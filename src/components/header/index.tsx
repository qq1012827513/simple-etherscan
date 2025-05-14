import styles from './index.module.less'
import { useEffect } from 'react'
import testnetProvider from '../../utils/provider'
import classnames from 'classnames'
import Search from '../search'
import classNames from 'classnames'
import useStore from '../../store/store'
import { useNavigate } from 'react-router'
function Header() {
  const { baseInfo, setBaseInfo } = useStore()
  const navigate = useNavigate()
  useEffect(() => {
    testnetProvider.getFeeData().then(res => {
      setBaseInfo({
        gasPrice: res.gasPrice!,
        priorityPrice: res.maxPriorityFeePerGas!
      })
    })
  }, [])
  return (
    <div className={styles.header}>
      <div className={styles.headerTop}>
        <div className={classnames(styles.content, 'container')}>
          <div className={styles.left}>
            {baseInfo.gasPrice > 0 ? (
              <>
                <span>Gas Price: {baseInfo.gasPrice} wei</span>
                <span>Priority Gas Price: {baseInfo.priorityPrice} wei</span>
              </>
            ) : (
              ''
            )}
          </div>
          <div className={styles.middle}>
            <span>Sepolia Testnet</span>
          </div>
          <div className={styles.right}>
            {location.pathname === '/' ? (
              ''
            ) : (
              <div className={styles.search}>
                <Search />
              </div>
            )}
            <div className={styles.buttons}>
              <span
                className={classNames('iconfont', 'icon-github', styles.icon)}
              ></span>
            </div>
          </div>
        </div>
      </div>

      <div className={classnames(styles.menu, 'container')}>
        <div className={styles.logo}>
          <img src='/public/imgs/logo.svg' />
        </div>
        <ul className={styles.menuItem}>
          <li onClick={() => navigate('/')}>Home</li>
          <li>BlockChain</li>
          <li>Tokens</li>
          <li>NFTs</li>
          <li>More</li>
        </ul>
      </div>
    </div>
  )
}
export default Header
