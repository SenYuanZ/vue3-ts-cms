import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HYRequestInterceptors<T = AxiosResponse> {
  // 给请求拦截定义类型
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any

  // 给响应拦截定义类型
  responseInterceptor?: (res: T) => T

  responseInterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  // 给传入的请求配置可以自定义添加类型
  interceptors?: HYRequestInterceptors<T>
  showLoading?: boolean
}
