
import { create } from 'zustand'
import type { Store } from '../types/store'

const useStore = create<Store.StoreType>((set) => ({
  baseInfo: {
    gasPrice: BigInt(0),
    priorityPrice: BigInt(0),
  },
  setBaseInfo: (newBaseInfo: Store.StoreType['baseInfo']) => set({ baseInfo: newBaseInfo })
}))
export default useStore