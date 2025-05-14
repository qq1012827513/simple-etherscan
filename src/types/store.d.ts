export namespace Store {
  interface StoreType {
    baseInfo: {
      gasPrice: bigint,
      priorityPrice: bigint
    },
    setBaseInfo: (p: StoreType['baseInfo']) => void
  }
}