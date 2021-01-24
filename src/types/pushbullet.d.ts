declare module '@jef/pushbullet' {
  export type DeviceParameters = string | number | Record<string, unknown>

  export type PushBulletCallback =
    | ((error: Error) => void)
    | ((error: null | undefined, response: Response) => void)

  export interface ListOptions {
    active?: boolean
    cursor?: string
    limit?: number
  }

  export interface HistoryOptions extends ListOptions {
    modified_after?: number
  }

  export interface PushBulletStream {
    connect: () => void
    close: () => void
    on: ((event: 'connect' | 'close' | 'nop', callback: () => void) => void) &
      ((event: 'error', callback: (error: Error) => void) => void) &
      ((event: 'message', callback: (message: unknown) => void) => void) &
      ((event: 'tickle', callback: (tickle: unknown) => void) => void) &
      ((event: 'push', callback: (push: unknown) => void) => void)
  }

  export class PushBullet {
    constructor(apiKey: string, options?: {fullResponses: boolean})
    me(callback: PushBulletCallback): Promise<ReadableStream<Uint8Array>>
    devices(
      options: ListOptions,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    devices(callback: PushBulletCallback): Promise<ReadableStream<Uint8Array>>
    createDevice(
      options: Record<string, unknown>,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    updateDevice(
      deviceIden: string,
      deviceOptions: Record<string, unknown>,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    deleteDevice(
      deviceIden: string,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    note(
      deviceParameters: DeviceParameters,
      title: string,
      body: string,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    link(
      deviceParameters: DeviceParameters,
      name: string,
      url: string,
      body: string,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    file(
      deviceParameters: DeviceParameters,
      filePath: string,
      message: string,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    dismissPush(
      pushIden: DeviceParameters,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    deletePush(
      pushIden: DeviceParameters,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    deleteAllPushes(
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    history(
      options: HistoryOptions,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    history(callback: PushBulletCallback): Promise<ReadableStream<Uint8Array>>
    subscriptions(
      options: ListOptions,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    subscriptions(
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    subscribe(
      channelTag: string,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    unsubscribe(
      subscriptionIden: string,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    muteSubscription(
      subscriptionIden: string,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    unmuteSubscription(
      subscriptionIden: string,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    channelInfo(
      channelTag: string,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    chats(
      options: ListOptions,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    chats(callback: PushBulletCallback): Promise<ReadableStream<Uint8Array>>
    createChat(
      email: string,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    deleteChat(
      chatIden: string,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    muteChat(
      chatIden: string,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    unmuteChat(
      chatIden: string,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    sendSMS(
      options: Record<string, unknown>,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    sendClipboard(
      options: Record<string, unknown>,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    dismissEphemeral(
      options: Record<string, unknown>,
      callback: PushBulletCallback,
    ): Promise<ReadableStream<Uint8Array>>
    stream(): PushBulletStream
    enableEncryption(
      encryptionPassword: string,
      userIden: string,
    ): PushBulletStream
  }

  export default PushBullet
}
