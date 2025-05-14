import React from 'react'
import type { ReactNode } from 'react'
import styles from './index.module.less'

interface ListWrapperProps {
  title: string
  children: ReactNode
  footer?: string
  onFooterClick?: () => void
}

const ListWrapper: React.FC<ListWrapperProps> = ({
  title,
  children,
  footer = 'show all transactions',
  onFooterClick
}) => {
  return (
    <div className={styles.listWrapper}>
      <div className={styles.header}>{title}</div>
      {children}
      {footer && (
        <div className={styles.footer} onClick={onFooterClick}>
          {footer}
        </div>
      )}
    </div>
  )
}

export default ListWrapper
