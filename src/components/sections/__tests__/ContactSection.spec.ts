import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactSection from '../ContactSection.vue'
import i18n from '@/i18n'
import { createPinia, setActivePinia } from 'pinia'

const fetchMock = vi.fn<typeof fetch>()
vi.stubGlobal('fetch', fetchMock)

const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: vi.fn<(key: string) => string | null>((key: string) => store[key] || null),
    setItem: vi.fn<(key: string, value: string) => void>((key: string, value: string) => {
      store[key] = value.toString()
    }),
    removeItem: vi.fn<(key: string) => void>((key: string) => {
      delete store[key]
    }),
    clear: vi.fn<() => void>(() => {
      store = {}
    })
  }
})()
vi.stubGlobal('localStorage', localStorageMock)

describe('ContactSection.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.useFakeTimers()
    localStorage.clear()
    fetchMock.mockReset()
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({ success: true })
    } as unknown as Response)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders labels and inputs correctly', () => {
    const wrapper = mount(ContactSection, {
      global: {
        plugins: [i18n]
      }
    })
    
    expect(wrapper.text()).toContain('Hubungi Saya')
    expect(wrapper.text()).toContain('Nama Lengkap')
    expect(wrapper.text()).toContain('Alamat Email')
    expect(wrapper.text()).toContain('Pesan Anda')
  })

  it('shows validation errors when fields are empty', async () => {
    const wrapper = mount(ContactSection, {
      global: {
        plugins: [i18n]
      }
    })
    
    await wrapper.find('form').trigger('submit.prevent')
    
    expect(wrapper.text()).toContain('Nama lengkap wajib diisi.')
    expect(wrapper.text()).toContain('Alamat email wajib diisi.')
    expect(wrapper.text()).toContain('Pesan wajib diisi.')
  })

  it('shows email format error when email is invalid', async () => {
    const wrapper = mount(ContactSection, {
      global: {
        plugins: [i18n]
      }
    })
    
    await wrapper.find('input#name').setValue('Ahmad')
    await wrapper.find('input#email').setValue('invalid-email')
    await wrapper.find('textarea#message').setValue('Hello world')
    
    await wrapper.find('form').trigger('submit.prevent')
    
    expect(wrapper.text()).toContain('Format alamat email tidak valid.')
  })

  it('submits successfully when form is valid', async () => {
    let resolveFetch!: (value: Response) => void
    const fetchPromise = new Promise<Response>((resolve) => {
      resolveFetch = resolve
    })
    fetchMock.mockReturnValue(fetchPromise)

    const wrapper = mount(ContactSection, {
      global: {
        plugins: [i18n]
      }
    })
    
    await wrapper.find('input#name').setValue('Ahmad')
    await wrapper.find('input#email').setValue('ahmad@example.com')
    await wrapper.find('textarea#message').setValue('Hello world')
    
    await wrapper.find('form').trigger('submit.prevent')
    await wrapper.vm.$nextTick()
    
    // Check loading/submitting state
    expect(wrapper.text()).toContain('Mengirim...')
    
    // Resolve fetch
    resolveFetch({
      ok: true,
      json: async () => ({ success: true })
    } as unknown as Response)
    
    await Promise.resolve()
    await Promise.resolve()
    await wrapper.vm.$nextTick()
    
    expect(fetchMock).toHaveBeenCalled()
    expect(wrapper.text()).toContain('Pesan Anda telah berhasil dikirim! Terima kasih.')
  })

  it('prevents submission and simulates success silently when honeypot field is filled', async () => {
    const wrapper = mount(ContactSection, {
      global: {
        plugins: [i18n]
      }
    })
    
    await wrapper.find('input#name').setValue('Bot Name')
    await wrapper.find('input#email').setValue('bot@spam.com')
    await wrapper.find('textarea#message').setValue('Spam message')
    await wrapper.find('input#fax_number').setValue('123456') // Fill honeypot
    
    await wrapper.find('form').trigger('submit.prevent')
    
    // Should NOT call fetch
    expect(fetchMock).not.toHaveBeenCalled()
    
    // Should still show success message silently
    expect(wrapper.text()).toContain('Pesan Anda telah berhasil dikirim! Terima kasih.')
    
    // Form fields should be cleared
    expect((wrapper.find('input#name').element as HTMLInputElement).value).toBe('')
    expect((wrapper.find('input#email').element as HTMLInputElement).value).toBe('')
    expect((wrapper.find('textarea#message').element as HTMLTextAreaElement).value).toBe('')
    expect((wrapper.find('input#fax_number').element as HTMLInputElement).value).toBe('')
  })

  it('sanitizes malicious script tags and HTML entities in input fields before submission', async () => {
    const wrapper = mount(ContactSection, {
      global: {
        plugins: [i18n]
      }
    })
    
    await wrapper.find('input#name').setValue('<script>alert("xss")</script>')
    await wrapper.find('input#email').setValue('user@example.com')
    await wrapper.find('textarea#message').setValue('Hello <img src="x" onerror="alert(1)"> & "goodbye"')
    
    await wrapper.find('form').trigger('submit.prevent')
    
    await Promise.resolve()
    await Promise.resolve()
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    
    expect(fetchMock).toHaveBeenCalled()
    const fetchArgs = fetchMock.mock.calls[0]
    expect(fetchArgs).toBeDefined()
    const requestInit = fetchArgs?.[1]
    expect(requestInit).toBeDefined()
    const bodyStr = requestInit?.body
    expect(bodyStr).toBeDefined()
    const payload = JSON.parse(bodyStr as string)
    
    expect(payload.name).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;')
    expect(payload.message).toBe('Hello &lt;img src=&quot;x&quot; onerror=&quot;alert(1)&quot;&gt; &amp; &quot;goodbye&quot;')
  })

  it('implements rate limiting and blocks consecutive submissions within 60 seconds', async () => {
    const wrapper = mount(ContactSection, {
      global: {
        plugins: [i18n]
      }
    })
    
    // First submit
    await wrapper.find('input#name').setValue('Ahmad')
    await wrapper.find('input#email').setValue('ahmad@example.com')
    await wrapper.find('textarea#message').setValue('Hello world')
    await wrapper.find('form').trigger('submit.prevent')
    
    await Promise.resolve()
    await Promise.resolve()
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    
    expect(fetchMock).toHaveBeenCalledTimes(1)
    
    // Verify localStorage set
    expect(localStorage.getItem('portfolio_contact_last_submit')).toBeDefined()
    
    // Try submitting again immediately
    await wrapper.find('input#name').setValue('Ahmad')
    await wrapper.find('input#email').setValue('ahmad@example.com')
    await wrapper.find('textarea#message').setValue('Hello world 2')
    await wrapper.find('form').trigger('submit.prevent')
    
    // Fetch count should STILL be 1 (second call blocked)
    expect(fetchMock).toHaveBeenCalledTimes(1)
    
    // Verify countdown display on the button
    expect(wrapper.text()).toContain('Tunggu 60 detik')
  })
})
