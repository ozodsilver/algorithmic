import { defu } from 'defu'
import type { NitroFetchOptions } from 'nitropack'
import type { FetchContext } from 'ofetch'
import type { FetchOptions } from 'ofetch'

import { navigateTo } from '#app'
import type { ResponseBody } from '~/types/common/api'

export function useCustomFetch<T>(url: string, options: FetchOptions = {}) {
  const config = useRuntimeConfig()
  const token = useCookie('token')
  const refreshToken = useCookie('refreshToken')
  // const localePath = useLocalePath()
  const defaults: FetchOptions = {
    baseURL: config.public.baseUrl as string,

    onRequest(context: FetchContext): Promise<void> | void {
      const existingHeaders = new Headers(context.options.headers || {})
      if (token.value) {
        existingHeaders.set('Authorization', `Bearer ${token.value}`)
      }
      context.options.headers = existingHeaders
    },


    onResponse({ request, options, response }) {
      if (config.public.mode === 'local') {
        const req = `%c ${options.method?.toUpperCase() ?? 'GET'}: ${request}`
      }
    },

    onResponseError({ response }: FetchContext): Promise<void> | void {
      switch (response?.status) {
      case 401:
        token.value = null
        refreshToken.value = null
        // navigateTo(localePath('/?auth=true'))
        break
      default:
        throw response?._data || new Error('An unexpected error occurred')
      }
    }
  }

  const params = defu(options, defaults) as NitroFetchOptions<string>
  return $fetch<ResponseBody<T>>(url, params)
}
