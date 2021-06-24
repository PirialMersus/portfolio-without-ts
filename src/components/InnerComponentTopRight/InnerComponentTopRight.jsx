import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {faAddressCard} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faFilePdf} from '@fortawesome/free-solid-svg-icons'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {faBriefcase} from '@fortawesome/free-solid-svg-icons'
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import {faCalendar} from '@fortawesome/free-solid-svg-icons'

import {faStar} from '@fortawesome/free-solid-svg-icons'
import s from './InnerComponentTopRight.module.scss'
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons/index";

const classNames = require('classnames');

export const InnerComponentTopRight = (props) => {
    return (
        <div className={classNames(s.wrap, {[s.invisible]: props.activeBlockNumber !== 2})}>
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
                    {/*todo*/}
                </a>
                <a href="/blog" className={classNames(s.btn, s.btnBlog, s.fontWeight_700)}>
                    My Blog <FontAwesomeIcon icon={faEdit}/>
                </a>
            </div>
            <div className={s.sliderWrap}>
                <div className={s.controlsBlock}>
                    <div className={classNames(s.controlBtn, s.active)}>
                        <FontAwesomeIcon icon={faBriefcase}/>
                        <h6>Experience</h6>
                    </div>
                    <div className={s.controlBtn}>
                        <FontAwesomeIcon icon={faGraduationCap}/>
                        <h6>Education</h6>
                    </div>
                    <div className={s.controlBtn}>
                        <FontAwesomeIcon icon={faStar}/>
                        <h6>Skills</h6>
                    </div>
                </div>
                <div className={s.slidesBlock}>
                    <div className={s.slide}>
                        <div className={s.resumeCardHeader}>
                            <FontAwesomeIcon icon={faBriefcase}/>
                            <h6>Experience</h6>
                        </div>
                        <div className={s.resumeCardBody}>
                            <div className={s.experience}>
                                <div className={s.resumeContent}>
                                    <h6><span>Web Designer - </span>Envato</h6>
                                    <span className={s.date}><FontAwesomeIcon
                                        icon={faCalendar}/> <span>2015 - 2018</span></span>
                                    <p>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing
                                        elit</p>
                                </div>
                                <span className={s.separator}/>
                                <div className={s.resumeContent}>
                                    <h6><span>Web Developer - </span>Google</h6>
                                    <span className={s.date}><FontAwesomeIcon
                                        icon={faCalendar}/> <span>2011 - 2015</span></span>
                                    <p>Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit,
                                        tempor incididunt</p>
                                </div>
                                <span className={s.separator}/>
                                <div className={s.resumeContent}>
                                    <h6><span>Community Manager - </span>Adobe</h6>
                                    <span className={s.date}><FontAwesomeIcon
                                        icon={faCalendar}/> <span>2007 - 2011</span></span>
                                    <p>Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do
                                        eiusmod tempor duntt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.slide}>
                        <div className={s.resumeCardHeader}>
                            <FontAwesomeIcon icon={faGraduationCap}/>
                            <h6>Education</h6>
                        </div>
                        <div className={s.resumeCardBody}>
                            <div className={s.experience}>
                                <div className={s.resumeContent}>
                                    <h6><span>ENGINEERING DIPLOMA - </span>OXFORD UNIVERSITY</h6>
                                    <span className={s.date}><FontAwesomeIcon
                                        icon={faCalendar}/> <span>2015 - 2018</span></span>
                                    <p>Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do
                                        eiusmod tempor duntt</p>
                                </div>
                                <span className={s.separator}/>
                                <div className={s.resumeContent}>
                                    <h6><span>MASTERS DEGREE  - </span>PARIS UNIVERSITY</h6>
                                    <span className={s.date}><FontAwesomeIcon
                                        icon={faCalendar}/> <span>2011 - 2015</span></span>
                                    <p>Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit,
                                        tempor incididunt</p>
                                </div>
                                <span className={s.separator}/>
                                <div className={s.resumeContent}>
                                    <h6><span>BACHELOR DEGREE - </span>BERLIN HIGHER INSTITUTE</h6>
                                    <span className={s.date}><FontAwesomeIcon
                                        icon={faCalendar}/> <span>2007 - 2011</span></span>
                                    <p>Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do
                                        eiusmod tempor duntt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.slide}>
                        <div className={s.resumeCardHeader}>
                            <FontAwesomeIcon icon={faStar}/>
                            <h6>Skills</h6>
                        </div>
                        <div className={s.resumeCardBody}>
                            <div className={s.counterContainer}>
                                <div className={s.row} id="skills-counter">
                                    <div className={s.col}>

                                        <div className={s.resumeContent}>
                                            <h6>HTML</h6>
                                            <p data-star="5">
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                            </p>
                                        </div>

                                    </div>
                                    <div className={s.col}>

                                        <div className="resume-content">
                                            <h6 className="uppercase">JAVASCRIPT</h6>
                                            <p data-star="4.5">
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                            </p>
                                        </div>

                                    </div>
                                    <div className={s.col}>

                                        <div className="resume-content">
                                            <h6 className="uppercase">CSS</h6>
                                            <p data-star="4.5">
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                            </p>
                                        </div>

                                    </div>
                                    <div className={s.col}>

                                        <div className="resume-content">
                                            <h6 className="uppercase">PHP</h6>
                                            <p data-star="3">
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                            </p>
                                        </div>

                                    </div>
                                    <div className={s.col}>

                                        <div className="resume-content">
                                            <h6 className="uppercase">JQUERY</h6>
                                            <p data-star="5">
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                            </p>
                                        </div>

                                    </div>
                                    <div className={s.col}>

                                        <div className="resume-content">
                                            <h6 className="uppercase">ANGULAR JS</h6>
                                            <p data-star="3">
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                            </p>
                                        </div>

                                    </div>
                                    <div className={s.col}>

                                        <div className="resume-content">
                                            <h6 className="uppercase">WORDPRESS</h6>
                                            <p data-star="4.5">
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                            </p>
                                        </div>

                                    </div>
                                    <div className={s.col}>

                                        <div className="resume-content">
                                            <h6 className="uppercase">JOOMLA</h6>
                                            <p data-star="3.5">
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                            </p>
                                        </div>

                                    </div>
                                    <div className={s.col}>

                                        <div className="resume-content">
                                            <h6 className="uppercase">MAGENTO</h6>
                                            <p data-star="4">
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                            </p>
                                        </div>

                                    </div>
                                    <div className={s.col}>

                                        <div className="resume-content">
                                            <h6 className="uppercase">DRUPAL</h6>
                                            <p data-star="5">
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                            </p>
                                        </div>

                                    </div>
                                    <div className={s.col}>

                                        <div className="resume-content">
                                            <h6 className="uppercase">ADOBE PHOTOSHOP</h6>
                                            <p data-star="4">
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>

                                            </p>
                                        </div>

                                    </div>
                                    <div className={s.col}>

                                        <div className="resume-content">
                                            <h6 className="uppercase">ADOBE ILLUSTRATOR</h6>
                                            <p data-star="3.5">
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <FontAwesomeIcon icon={faStar}/>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.closeButton}>
                <FontAwesomeIcon icon={faTimes} className={s.fontAwesome} onClick={() => {
                    props.setNumberOfActiveBlock(1)
                }}/>
            </div>

        </div>
    )
}
