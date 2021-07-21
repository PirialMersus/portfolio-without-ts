import React from "react";
import s from './InnerComponentBottomRight.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons/faEnvelopeOpen";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";

const classNames = require('classnames');

export const InnerComponentBottomRight = (props) => {
    return (
        <div className={classNames(s.container, {[s.invisible]: props.activeBlockNumber !== 4})}>
            <div className={s.divideLineBlock}>
                <div className={s.line}/>
                <div className={s.letterIcon}>
                    <FontAwesomeIcon icon={faEnvelopeOpen}/>
                </div>
                <div className={s.line}/>
            </div>

            <div className={s.contentRow}>
                <div className={s.leftSide}>
                    <h6>PHONE</h6>
                    <span><FontAwesomeIcon icon={faPhone}/>+380673991967</span>
                    <h6>EMAIL</h6>
                    <span> you@youwebsite.com</span>
                    <h6>telegram</h6>
                    <span>linda.smith</span>
                    <h6>ADDRESS</h6>
                    <span>Moscow, Russia</span>
                    <h6>SOCIAL PROFILES</h6>
                    <span>+380673991967</span>
                </div>
                <div className={s.rightSide}></div>
            </div>

            <div className={s.closeButton}>
                <FontAwesomeIcon icon={faSignOutAlt} onClick={() => {
                    props.setNumberOfActiveBlock(1)
                }}/>
            </div>
        </div>
    )
}
