import React from "react";
import s from './Bigbutton.module.scss'

export const BigButton = (props) => {
    return (
        <div className={s.bigButtonContainer}>
            <p>{props.firstWorld} <span>{props.secondWorld}</span></p>
            {/*<InnerComponent/>*/}
        </div>
    )
}