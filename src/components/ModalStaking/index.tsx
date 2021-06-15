import React from 'react'
import styles from './modal-staking.module.scss'

interface IModalStakingProps {
  modalOpen: boolean
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalStaking = ({ modalOpen, setModalOpen }: IModalStakingProps) => {
  function handleCloseModal() {
    setModalOpen(false)
  }

  return (
    <>
      <div className={styles.backdrop} onClick={handleCloseModal} style={{display: modalOpen ? 'block' : 'none'}} />
      <div 
        className={`${styles['border-gradient']}`} 
        style={{display: modalOpen ? 'block' : 'none'}}
      >
        <div className={styles['background-black']}>
          <div className={styles['inter-background']}>
            <span>Stake in Pool</span>
            <button type="button" onClick={() => setModalOpen(false)}><img src="assets/close.svg" alt="" /> </button>
          </div>
          <div className={styles['main-container']}>
            <div className={styles.amount}>
              <span>$KACY Amount</span>
              <input type="number" placeholder="0" />
              <div className={styles.line} />
              <h5>Balance: 1.3254876</h5>
            </div>
            <div className={styles['button-container']}>
              <button type="button">25%</button>
              <button type="button">50%</button>
              <button type="button">75%</button>
              <button type="button">max</button>
            </div>
            <button className={`${styles.btn} ${styles.confirm}`} type="button" onClick={() => setModalOpen(false)}>Confirm</button>
            <button className={`${styles.btn} ${styles['get-kacy']}`} type="button" onClick={() => setModalOpen(false)}>Get KACY</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalStaking