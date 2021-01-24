declare module 'node-pagerduty' {
  type Options = {
    url?: string
    method?: string
    headers?: Record<string, string>
    timeout?: number
    resolveWithFullResponse?: boolean
  }

  type Events = {
    sendEvent(payload: unknown): Promise<Response>
  }

  class Client {
    constructor(
      apiToken: string,
      tokenType?: 'bearer' | 'token',
      options?: Options,
    )
    events: Events
  }

  export default Client
}
