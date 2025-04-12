export type ResponsePayload<DataType> = {
    data: DataType
} | {
    error: {
        message: string
    }
}