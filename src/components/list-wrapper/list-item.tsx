import React from 'react'
import classNames from 'classnames'
import styles from './index.module.less'

interface ListItemProps {
  icon?: string
  primaryLeft: React.ReactNode
  secondaryLeft: React.ReactNode
  primaryRight: React.ReactNode
  secondaryRight: React.ReactNode
  amount: React.ReactNode
  amountTooltip?: string
}

const ListItem: React.FC<ListItemProps> = ({
  icon = 'icon-block',
  primaryLeft,
  secondaryLeft,
  primaryRight,
  secondaryRight,
  amount,
  amountTooltip = 'total fee'
}) => {
  return (
    <div className={styles.listItem}>
      <div className={styles.block}>
        <span className={classNames('iconfont', icon, styles.icon)}></span>
        <div className={styles.wrapper}>
          <span className={styles.fl}>{primaryLeft}</span>
          <span className={styles.sl}>{secondaryLeft}</span>
        </div>
      </div>
      <div className={styles.info}>
        <span className={styles.fl}>{primaryRight}</span>
        <span className={styles.sl}>{secondaryRight}</span>
      </div>
      <div className={styles.amount}>
        <span className={styles.ethSpan} data-xx={amountTooltip}>
          {amount}
        </span>
      </div>
    </div>
  )
}

export default ListItem
