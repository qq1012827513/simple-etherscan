import { TransactionResponse } from 'ethers'
export namespace Summary {
  interface SummaryCardProps {
    iconClassName: string
    desc: string
    value: string
  }
  interface BlocksType {
    timestamp: number,
    number: number,
    miner: string,
    size: number,
    fee: bigint,
    transactions?: Array<TransactionResponse>
  }
}