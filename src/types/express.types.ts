export type ResponsePayload = {
    data: any
} | {
    error: {
        message: string
    }
}