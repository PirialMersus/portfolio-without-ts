import React from "react";
import s from './Bigbutton.module.scss'

const classNames = require('classnames');

export const BigButton = (props) => {
    return (
        <div className={classNames(s.bigButtonContainer, {[s.invisible] : props.invisibilityCondition})}>
            <div>
                <span
                    className={s.firstWord}
                    data-text={props.firstWorld}>{props.firstWorld}</span>&nbsp;
                <span
                    className={s.secondWord}
                    data-text={props.secondWorld}>{props.secondWorld}</span>
            </div>
        </div>
    )
}