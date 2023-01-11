import React from 'react';
import styles from '../../styles/components/modalStyle.module.scss'
import { RiCloseFill } from 'react-icons/ri';


interface ModalProps {
    showModal: boolean,
    closeModal: (argument: boolean) => void
}

const Modal: React.FunctionComponent<ModalProps> = ({showModal, closeModal}) => {
    if (showModal) return null
  return (
    <div className={styles.main__container}>
        <div className={styles.main__container__header}>
<h1>Project title</h1>
<RiCloseFill style={{height: '50px', width: '50px'}} onClick={() => closeModal(true)}/>
        </div>
    </div>
  )
}

export default Modal;