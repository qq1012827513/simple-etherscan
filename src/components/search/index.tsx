import classNames from 'classnames'
import styles from './index.module.less'
function Search() {
  return (
    <div className={styles.search}>
      <span
        className={classNames('iconfont', 'icon-search', styles.icon)}
      ></span>
      <input className={styles.input}></input>
    </div>
  )
}
export default Search
