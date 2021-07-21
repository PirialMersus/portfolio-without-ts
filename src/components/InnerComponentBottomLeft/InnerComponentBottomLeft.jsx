import React, {useState} from "react";
import s from './InnerComponentBottomLeft.module.scss'
import townImage from '../../img/2CjYynXykis.jpg'
import sunEarth from '../../img/70188833_15484.jpg'
import face from '../../img/face.jpg'
import yoga from '../../img/photo_2020-07-21_11-04-14.jpg'
import Sanya from '../../img/photo_2021-01-13_23-32-43.jpg'
import shavasana from '../../img/shavas.jpg'
import statue from '../../img/statue for find.jpg'
import space from '../../img/unnamed.jpg'
import boat from '../../img/userAva.jpg'
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import '../../App.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSuitcase} from "@fortawesome/free-solid-svg-icons/faSuitcase";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons/faSignOutAlt";

const classNames = require('classnames');

const images = [
    {image: townImage, title: 'town Image'},
    {image: sunEarth, title: 'sun Earth'},
    {image: face, title: 'face'},
    {image: yoga, title: 'yoga'},
    {image: Sanya, title: 'Sanya'},
    {image: shavasana, title: 'shavasana'},
    {image: statue, title: 'statue'},
    {image: space, title: 'space'},
    {image: boat, title: 'boat'}
]

export const InnerComponentBottomLeft = (props) => {
    const [activeSlide, setActiveSlide] = useState(0)

    const showSlider = (index) => {
        setActiveSlide(index)
    }

    return (
        <div className={classNames(s.container, {[s.invisible]: props.activeBlockNumber !== 3})}>
            <h2>
                <span>MY</span> <span>PORTFOLIO</span>
            </h2>

            <div className={s.divideLineBlock}>
                <div className={s.line}/>
                <div className={s.letterIcon}>
                    <FontAwesomeIcon icon={faSuitcase}/>
                </div>
                <div className={s.line}/>
            </div>

            <div className={`${s.imagesContainer} ${activeSlide !== 0 && s.onActiveSlider}`}>
                {images.map((el, index) => (
                    <div className={s.card} key={index}
                         onClick={() => {
                             showSlider(index)
                         }}
                    >
                        <div className={s.box}>
                            <div className={s.imgBx}>
                                <img src={el.image} alt="image"/>
                            </div>
                            <div className={s.contentBx}>
                                <div>
                                    <h3>{el.title}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div
                className={`${s.sliderWrapper} ${activeSlide !== 0 && s.activeSlider}`}
            >

                <AwesomeSlider
                    organicArrows
                    className='sliderWrapper'
                    // style={cssModule}
                    selected={activeSlide}
                    animation="foldOutAnimation"
                    cssModule={[CoreStyles, AnimationStyles]}
                >

                    {images.map((el, index) => (
                        <div data-src={el.image} key={index}>
                            <div className={s.titleBackground} onClick={() => {
                                setActiveSlide(0)
                            }}><p className={s.title}>{el.title}</p></div>
                        </div>
                    ))}


                </AwesomeSlider>
            </div>
            <div className={s.closeButton}>
                <FontAwesomeIcon icon={faSignOutAlt} className={s.fontAwesome} onClick={() => {
                    props.setNumberOfActiveBlock(1)
                }}/>
            </div>
        </div>
    )
}
