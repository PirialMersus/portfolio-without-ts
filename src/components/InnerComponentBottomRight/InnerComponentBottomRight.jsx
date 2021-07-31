import React from "react";
import s from './InnerComponentBottomRight.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons/faEnvelopeOpen";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons/faTelegramPlane";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons/faFacebookF";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import githubIcon from "./../../img/github.svg"
import TextField from "@material-ui/core/TextField";
import ClassesNesting from "../materialUi/TextField";
import {withStyles} from "@material-ui/styles";

const classNames = require('classnames');

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#ffb400',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#ffb400',
        },
        // '& .MuiInput-input': {          input text styles
        //     color: '#ffb400',
        // },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#ffb400',
            },
            '&:hover fieldset': {
                borderColor: '#ffb400',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#ffb400',
            },
        },
    },
})(TextField);



export const InnerComponentBottomRight = (props) => {

    const divStyle = {
        color: 'blue',
    };

    return (
        <div className={classNames(s.container, {[s.visible]: props.numberOfBlockAfterDelay === 4})}>
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
                    <span><FontAwesomeIcon icon={faEnvelope}/>you@youwebsite.com</span>
                    <h6>telegram</h6>
                    <span><FontAwesomeIcon icon={faTelegramPlane}/>linda.smith</span>
                    <h6>ADDRESS</h6>
                    <span><FontAwesomeIcon icon={faHome}/>Moscow, Russia</span>
                    <h6>SOCIAL PROFILES</h6>
                    <ul className={s.socialNetworks}>
                        {/*<FontAwesomeIcon icon={faFacebookSquare} className={s.faceBook}/>*/}
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100006915912945" className={s.facebook}>
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/fesenko-gennadii-578b46161/" className={s.linkedin}>
                                <FontAwesomeIcon icon={faLinkedinIn}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/PirialMersus" className={s.github}>
                                <img src={githubIcon} alt="github"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={s.rightSide}>
                    <form className={s.form} noValidate autoComplete="off">
                        <CssTextField id="outlined-basic" label="Outlined"/>
                    </form>
                </div>
            </div>

            <div className={s.closeButton}>
                <FontAwesomeIcon icon={faSignOutAlt} onClick={() => {
                    props.setNumberOfActiveBlock(1)
                }}/>
            </div>
        </div>
    )
}
