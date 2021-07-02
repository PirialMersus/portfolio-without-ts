import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faAddressCard,
    faBriefcase,
    faCalendar,
    faEdit,
    faFilePdf,
    faGraduationCap,
    faStar,
    faTimes,
    faUser
} from '@fortawesome/free-solid-svg-icons'
import s from './InnerComponentTopRight.module.scss'

const classNames = require('classnames');

const buttonsNames = ['experience', 'education', 'skills']

export const InnerComponentTopRight = (props) => {

    const initSlidesNames = ['active', 'neutral', 'passive']

    const [activeSlideNumber, setActiveSlideNumber] = React.useState(0)
    const [slides, setSlides] = React.useState(initSlidesNames)


    // const finalFirstContolBtnClass = `${s.controlBtn} ${activeSlideNumber === 0 && s.active}`
    // const finalSecondContolBtnClass = `${s.controlBtn} ${activeSlideNumber === 1 && s.active}`
    // const finalThirdContolBtnClass = `${s.controlBtn} ${activeSlideNumber === 2 && s.active}`

    // const slides = ['active', 'neutral', 'passive']


    function slideClickHandler(slide) {
        if (slide !== activeSlideNumber) {
            setSlides(prevState => {
                return changeSlidesNumbers(slide, prevState)
            })
            setActiveSlideNumber(slide)
        }
    }

    function changeSlidesNumbers(slide, prevState) {

        let indexPrevActiveElem;
        prevState.find((el, index) => {
            if (el === 'active') {
                indexPrevActiveElem = index;
            }
        })

        const tempSlides = ['', '', '']
        tempSlides[slide] = 'active'
        tempSlides[indexPrevActiveElem] = 'neutral'
        tempSlides.map((slide, index) => {
                if (slide !== 'active' && slide !== 'neutral') {
                    tempSlides[index] = 'passive'
                }
            }
        )
        return tempSlides
    }

    return (
        <div className={classNames(s.wrap, {[s.invisible]: props.activeBlockNumber !== 2})}>
            <h2>Hello, guys</h2>
            <div className={s.divideLineBlock}>
                <div className={s.line}/>
                <div className={s.letterIcon}>
                    <FontAwesomeIcon icon={faAddressCard}/>
                </div>
                <div className={s.line}/>
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
                    {buttonsNames.map((button, idx) => (
                        <div className={`${s.controlBtn} ${activeSlideNumber === idx && s.active}`}
                             onClick={() => slideClickHandler(idx)}
                             key={idx}
                        >
                            <FontAwesomeIcon icon={faBriefcase}/>
                            <h6>{button}</h6>
                        </div>
                    ))}
                    {/*<div className={finalFirstContolBtnClass} onClick={() => {*/}
                    {/*    setSlides(prevState => {*/}
                    {/*        changeSlidesNumbers(0, prevState = initSlidesNames)*/}
                    {/*        setActiveSlideNumber(0)*/}
                    {/*    })*/}
                    {/*}}>*/}
                    {/*    <FontAwesomeIcon icon={faBriefcase}/>*/}
                    {/*    <h6>Experience</h6>*/}
                    {/*</div>*/}
                    {/*<div className={finalSecondContolBtnClass} onClick={() => {*/}
                    {/*    setSlides((prevState => {*/}
                    {/*        changeSlidesNumbers(1, prevState = initSlidesNames)*/}
                    {/*        setActiveSlideNumber(1)*/}
                    {/*    }))*/}
                    {/*}}>*/}
                    {/*    <FontAwesomeIcon icon={faGraduationCap}/>*/}
                    {/*    <h6>Education</h6>*/}
                    {/*</div>*/}
                    {/*<div className={finalThirdContolBtnClass} onClick={() => {*/}
                    {/*    setSlides((prevState => {*/}
                    {/*        changeSlidesNumbers(2, prevState = initSlidesNames)*/}
                    {/*        setActiveSlideNumber(2)*/}
                    {/*    }))*/}
                    {/*}}>*/}
                    {/*    <FontAwesomeIcon icon={faStar}/>*/}
                    {/*    <h6>Skills</h6>*/}
                    {/*</div>*/}
                </div>
                <div className={s.slidesBlockWrap}>
                    <div className={s.slidesBlock}>
                        <div className={`${s.slide} ${s[slides[0]]}`}
                             onClick={() => slideClickHandler(0)}>
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
                                        <p>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
                                            adipisicing
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
                                        <p>Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed
                                            do
                                            eiusmod tempor duntt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.slide} ${s[slides[1]]}`}
                             onClick={() => slideClickHandler(1)}>
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
                                        <p>Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed
                                            do
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
                                        <p>Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed
                                            do
                                            eiusmod tempor duntt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.slide} ${s[slides[2]]}`}
                             onClick={() => slideClickHandler(2)}>
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
                                            <div className={s.resumeContent}>
                                                <h6>JAVASCRIPT</h6>
                                                <p className={s.icon} data-star="4.5">
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={s.col}>
                                            <div className={s.resumeContent}>
                                                <h6>CSS</h6>
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
                                            <div className={s.resumeContent}>
                                                <h6>PHP</h6>
                                                <p data-star="3">
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={s.col}>
                                            <div className={s.resumeContent}>
                                                <h6>JQUERY</h6>
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
                                            <div className={s.resumeContent}>
                                                <h6>ANGULAR JS</h6>
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
                                            <div className={s.resumeContent}>
                                                <h6>WORDPRESS</h6>
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
                                            <div className={s.resumeContent}>
                                                <h6>JOOMLA</h6>
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
                                            <div className={s.resumeContent}>
                                                <h6>MAGENTO</h6>
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
                                            <div className={s.resumeContent}>
                                                <h6>DRUPAL</h6>
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
                                            <div className={s.resumeContent}>
                                                <h6>ADOBE PHOTOSHOP</h6>
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
                                            <div className={s.resumeContent}>
                                                <h6>ADOBE ILLUSTRATOR</h6>
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
            </div>
            <div className={s.closeButton}>
                <FontAwesomeIcon icon={faTimes} className={s.fontAwesome} onClick={() => {
                    props.setNumberOfActiveBlock(1)
                }}/>
            </div>

        </div>
    )
}
