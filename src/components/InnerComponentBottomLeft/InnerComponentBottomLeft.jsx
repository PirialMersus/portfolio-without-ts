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


// const classNames = require('classnames');

const images = [
    {image: townImage, title: 'town Image'},
    {image: sunEarth, title: 'sun Earth'},
    {image: face, title: 'face'},
    {image: yoga, title: 'yoga'},
    {image: Sanya, title: 'Sanya'},
    {image: shavasana, title: 'shavasana'},
    {image: statue, title: 'statue'},
    {image: space, title: 'space'},
    {image: boat, title: 'boat'}]

export const InnerComponentBottomLeft = () => {

    return (
        <div className={s.wrap}>
            <h2>
                <span>MY</span> <span>PORTFOLIO</span>

            </h2>
            <div className="InnerComponentTopRight_divideLineBlock__1F0dJ">
                <div className="InnerComponentTopRight_line__1fYKi"/>
                <div className="InnerComponentTopRight_letterIcon__T6QRn">
                </div>
                <div className={s.line}/>

            </div>
            <div className={s.imagesContainer}>
                {images.map(el => (
                    <div className={s.card}
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
            <div className={s.sliderContainer}>
                {/*<AwesomeSlider cssModule={AwesomeSliderStyles}>*/}
                {/*    <div data-src={townImage}/>*/}
                {/*    <div data-src={face}/>*/}
                {/*    <div data-src={space}/>*/}
                {/*    <div data-src={boat}/>*/}
                {/*</AwesomeSlider>*/}
                <AwesomeSlider
                    animation="foldOutAnimation"
                    cssModule={[CoreStyles, AnimationStyles]}
                >
                    <div data-src={space} ><p className={s.title}>hello gues</p></div>
                    <div data-src={face} ><p className={s.title}>hello gues</p></div>
                    <div data-src={boat} ><p className={s.title}>hello gues</p></div>
                    <div data-src={townImage} ><p className={s.title}>hello gues</p></div>
                    <div data-src={shavasana} ><p className={s.title}>hello gues</p></div>
                    <div data-src={statue} ><p className={s.title}>hello gues</p></div>
                    <div data-src={sunEarth} ><p className={s.title}>hello gues</p></div>
                </AwesomeSlider>
            </div>
        </div>
    )
}
