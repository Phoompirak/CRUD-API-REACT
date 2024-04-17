import React, { memo } from 'react'
import styles from './CheckedCard.module.css'
import { IoCheckmark, IoClose } from "react-icons/io5";

const CheckedCard = memo(({ msg, checkError, fnOk }) => {
    const styleMsg = msg ? "flex-end" : "center";
    const checkSuccess = checkError ? '#a5dda1' : '#e96c66'

    return (
        <div>
            <div className={styles.container} id='box-popup'>
                <div className={styles.bg_black}>
                    <div className={styles.modal}>
                        <div className={styles.correct} style={{ borderTop: `${checkSuccess} 3px solid`, borderBottom: `${checkSuccess} 3px solid` }}>
                            {checkError ? <IoCheckmark /> : <IoClose color='#db2d24'/>}
                        </div>
                        <div className={styles.show_data}>
                            <h3>{msg || ""}</h3>
                        </div>
                        <div className={styles.btn_ok} style={{ alignSelf: styleMsg}}>
                            <button onClick={fnOk ? fnOk : () => {
                                window.location.reload()
                            }}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default CheckedCard
