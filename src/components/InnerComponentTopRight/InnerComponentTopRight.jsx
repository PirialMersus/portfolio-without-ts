import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {faAddressCard} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faFilePdf} from '@fortawesome/free-solid-svg-icons'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import s from './InnerComponentTopRight.module.scss'

const classNames = require('classnames');

export const InnerComponentTopRight = () => {
    return (
        <div className={s.wrap}>
            <h2>Helo, guys</h2>
            <div className={s.divideLineBlock}>
                <div className={s.line}></div>
                <div className={s.letterIcon}>
                    <FontAwesomeIcon icon={faAddressCard}/>
                </div>
                <div className={s.line}></div>
            </div>
            <div className={s.personalInfosBlock}>
                <div>
                    <FontAwesomeIcon icon={faUser}/>
                    <h6>PERSONAL INFOS</h6>
                </div>
            </div>
            <div className={s.myCommonInfo}>
                <p>
                    I'm a Freelance Web Designer & Developer based in Moscow, Russia. I have serious passion for UI
                    effects, animations and creating intuitive, with over a decade of experience.
                </p>
            </div>
            <div className={s.exactlyMyInfo}>
                <ul className={classNames(s.lists, s.list1)}>
                    <li><span className={s.fontWeight_700}>First Name: </span>Lucy</li>
                    <li><span className={s.fontWeight_700}>Last Name: </span>Smith</li>
                    <li><span className={s.fontWeight_700}>Date of birth: </span>21 june 1990</li>
                    <li><span className={s.fontWeight_700}>Nationality: </span>Russian</li>
                    <li><span className={s.fontWeight_700}>Freelance: </span>Available</li>
                </ul>
            </div>
            <div className={s.exactlyMyInfo}>
                <ul className={classNames(s.lists, s.list2)}>
                    <li><span className={s.fontWeight_700}>Phone: </span>+34 21 18 40 10</li>
                    <li><span className={s.fontWeight_700}>Address: </span>Moscow, Russia</li>
                    <li><span className={s.fontWeight_700}>Email: </span>you@yourwebsite.com</li>
                    <li><span className={s.fontWeight_700}>Spoken Languages: </span>French - German</li>
                    <li><span className={s.fontWeight_700}>Skype: </span>linda.smith</li>
                </ul>
            </div>
            <a href="#" className={s.btn}>
                Download CV <FontAwesomeIcon icon={faFilePdf}/>
            </a>
            <a href="/blog" className={classNames(s.btn, s.btnBlog, s.fontWeight_700)}>
                My Blog <FontAwesomeIcon icon={faEdit}/>
            </a>
            <div className={s.closeButton}>
                <FontAwesomeIcon icon={faTimes}/>
            </div>
        </div>
    )
}
