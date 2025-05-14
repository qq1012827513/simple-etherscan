import styles from './index.module.less'
function Footer() {
  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className={styles.footerWrapper}>
      <div className='container'>
        <div className={styles.footer}>
          <div className={styles.left}>
            <img src='/public/imgs/eth.svg' alt='' />
            <span className={styles.powered}>Powered by Myself😊</span>
          </div>
          <div className={styles.right}>
            <span className={styles.top} onClick={backToTop}>
              ⬆ Back to Top
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
