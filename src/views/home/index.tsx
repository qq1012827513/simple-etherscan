import classNames from 'classnames'
import styles from './index.module.less'
import { useEffect, useState } from 'react'
import { testnetProvider } from '../../utils'
import SummaryCard from '../../components/summary-card'
import useStore from '../../store/store'
import type { Summary } from '@/types/home'
import { shortAddress } from '../../utils/convert'
import { ethers } from 'ethers'
import ListWrapper from '../../components/list-wrapper'
import ListItem from '../../components/list-wrapper/list-item'
function Home() {
  const [blockNumber, setBlockNumber] = useState<number>(0)
  const [blockList, setBlockList] = useState<Summary.BlocksType[]>([])
  const { baseInfo } = useStore()
  useEffect(() => {
    testnetProvider.getBlockNumber().then(res => {
      const blockNumber = Number(res.toFixed(0))
      setBlockNumber(blockNumber)
      setList(blockNumber)
    })
  }, [])
  async function setList(blockNumber: number) {
    const innerBlcokList = [] as Summary.BlocksType[]
    for (let i = blockNumber; i > blockNumber - 5; i--) {
      const res = await testnetProvider.getBlock(i, i == blockNumber)
      if (res) {
        const blockiItem = {} as Summary.BlocksType
        blockiItem.timestamp = res.timestamp
        blockiItem.number = res.number
        blockiItem.miner = res.miner
        blockiItem.size = res.transactions.length
        blockiItem.fee = res.gasUsed * res.baseFeePerGas!
        if (i == blockNumber) {
          blockiItem.transactions = res.prefetchedTransactions
        }
        innerBlcokList.push(blockiItem)
      }
    }
    setBlockList(innerBlcokList)
  }
  return (
    <div className={styles.home}>
      <div className={styles.back}>
        <div className='container'>
          <div className={styles.search}>
            <div className={styles.title}>
              <span
                className={classNames('iconfont', 'icon-web3', styles.icon)}
              ></span>
              <span>First Step Of Web3</span>
            </div>
            <div className={styles.input}>
              <span className={styles.address}>address</span>
              <input className={styles.inputArea} placeholder='address'></input>
              <div className={styles.searchButton}>
                <span
                  className={classNames('iconfont', 'icon-search', styles.icon)}
                ></span>
              </div>
            </div>
          </div>
          <div className={styles.summmary}>
            <SummaryCard
              iconClassName='icon-block'
              value={(blockNumber / 19000).toFixed(2) + 'M'}
              desc='Transactions'
            />
            <SummaryCard
              iconClassName='icon-block'
              value={baseInfo.gasPrice.toString() + ' Wei'}
              desc='Base Fee'
            />
            <SummaryCard
              iconClassName='icon-block'
              value={String(blockNumber)}
              desc='Latest Block'
            />
          </div>
        </div>
      </div>
      <div className={classNames(styles.list, 'container')}>
        <ListWrapper title='Latest Blocks'>
          {blockList.length > 0 &&
            blockList.map(item => (
              <ListItem
                key={item.timestamp}
                primaryLeft={item.number}
                secondaryLeft={`${((Date.now() - item.timestamp * 1000) / 1000).toFixed(0)} sec ago`}
                primaryRight={
                  <>
                    Miner <i>${shortAddress(item.miner, 8)}</i>
                  </>
                }
                secondaryRight={
                  <>
                    <i>{item.size}</i> txns
                  </>
                }
                amount={`${Number(ethers.formatUnits(String(item.fee), 'ether')).toFixed(6)} eth`}
                amountTooltip='total fee'
              />
            ))}
        </ListWrapper>
        <ListWrapper title='Latest Transactions'>
          {blockList.length > 0 &&
            blockList[0].transactions?.slice(0, 5).map(item => (
              <ListItem
                key={item.hash}
                primaryLeft={shortAddress(item.hash, 6)}
                secondaryLeft={`${((Date.now() - blockList[0].timestamp * 1000) / 1000).toFixed(0)} sec ago`}
                primaryRight={
                  <>
                    From <i>${shortAddress(item.from, 8)}</i>
                  </>
                }
                secondaryRight={
                  <>
                    To <i>{shortAddress(item.to!, 8)}</i>
                  </>
                }
                amount={`${Number(ethers.formatUnits(String(item.value), 'ether')).toFixed(6)} eth`}
                amountTooltip='base fee'
              />
            ))}
        </ListWrapper>
      </div>
    </div>
  )
}
export default Home
