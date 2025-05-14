import classNames from 'classnames'
import styles from './index.module.less'
import type { Summary } from '../../types/home'

function SummaryCard(props: Summary.SummaryCardProps) {
  return (
    <div className={styles.block}>
      <span
        className={classNames('iconfont', props.iconClassName, styles.icon)}
      ></span>
      <div className={styles.content}>
        <span>{props.desc}</span>
        {props.value}
      </div>
    </div>
  )
}
export default SummaryCard
