class defHttp {
  static async get<T>(requestOption: RequestOption) {
    requestOption.method = 'GET'
    return defHttp.callApi<T>(requestOption)
  }

  static async post<T>(requestOption: RequestOption) {
    requestOption.method = 'POST'
    return defHttp.callApi<T>(requestOption)
  }

  static async delete<T>(requestOption: RequestOption) {
    requestOption.method = 'DELETE'
    return defHttp.callApi<T>(requestOption)
  }

  static async put<T>(requestOption: RequestOption) {
    requestOption.method = 'PUT'
    return defHttp.callApi<T>(requestOption)
  }

  private static async callApi<T>(requestOption: RequestOption) {
    const httpUrl = uni.getSystemInfoSync().uniPlatform === 'web' ? import.meta.env.VITE_API_PREFIX : import.meta.env.VITE_HTTP_URL
    const info = uni.getSystemInfoSync()
    const ClientType = info.uniPlatform
    return new Promise<T>((resolve, reject) => {
      if (requestOption.needLoading) {
        requestOption.toast?.loading(requestOption.loadingMessage || '加载中')
      }
      uni.request({
        url: `${httpUrl}/${requestOption.url}`,
        method: requestOption.method,
        data: requestOption.data,
        header: {
          Authorization: uni.getStorageSync('TOKEN') || '',
          ClientType,
        },
        success: (res) => {
          let data = res.data as Res<T>
          if (res.statusCode !== 200 || !data || !data.success) {
            if (requestOption.needLoading) {
              requestOption.toast?.close()
            }
            requestOption.toast?.error({
              msg: data.tips || '网络异常',
            })
            return
          }
          if (typeof data === 'string') {
            data = JSON.parse(data)
          }

          if (requestOption.needLoading) {
            requestOption.toast?.close()
          }
          resolve(data.data as T)
        },
        fail: (error) => {
          if (requestOption.needLoading) {
            requestOption.toast?.close()
          }
          requestOption.toast?.error({
            msg: '网络异常',
          })
          reject(error)
        },
      })
    })
  }
}

export { defHttp }
