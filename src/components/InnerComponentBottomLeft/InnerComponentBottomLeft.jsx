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
import styled from 'styled-components'
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import '../../App.css'

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

// const cssModule = {
// --slider-height-percentage: '60%',
// --slider-transition-duration: '346ms',
// --organic-arrow-thickness: '4px',
// --organic-arrow-border-radius: '0px',
// --organic-arrow-height: '40px',
// --organic-arrow-color: '#56a491',
// --control-button-width: '10%',
// --control-button-height: '25%',
// --control-button-background: 'transparent',
// --control-bullet-color: '#65c1ab',
// --control-bullet-active-color: '#56a491',
// --loader-bar-color: '#851515',
// --loader-bar-height: '6px'
// }
// const cssModule = {
//     '--sliderHeightPercentage': '60%',
//     '--sliderTransitionDuration': '500ms',
//     '--organicArrowThickness': '6px',
//     '--organicArrowBorderRadius': '0px',
//     '--organicArrowHeight': '40px',
//     '--organicArrowColor': '#b1a413',
//     '--controlButtonWidth': '10%',
//     '--controlButtonHeight': '25%',
//     '--controlButtonBackground': 'transparent',
//     '--controlBulletColor': '#c7d667',
//     '--controlBulletActiveColor': '#77b631',
//     '--loaderBarColor': '#852f43',
//     '--loaderBarHeight': '6px'
// }

// const Slider = styled(AwesomeSlider)`
//  .awssld__controls__arrow-left:before,
//  .awssld__controls__arrow-left:after {
//     background-color: red;
//     }
// `


export const InnerComponentBottomLeft = () => {
    // const inputRef = React.useRef(null)
    const [activeSlide, setActiveSlide] = useState(-1)

    const showSlider = (index) => {
        setActiveSlide(index)
    }

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
                className={`${s.sliderWrapper} ${activeSlide !== -1 && s.activeSlider}`}
            >
                {/*<AwesomeSlider cssModule={AwesomeSliderStyles}>*/}
                {/*    <div data-src={townImage}/>*/}
                {/*    <div data-src={face}/>*/}
                {/*    <div data-src={space}/>*/}
                {/*    <div data-src={boat}/>*/}
                {/*</AwesomeSlider>*/}
                <AwesomeSlider
                    organicArrows
                    className='sliderWrapper'
                    // style={cssModule}
                    selected={activeSlide}
                    animation="foldOutAnimation"
                    cssModule={[CoreStyles, AnimationStyles]}
                >
                    <div data-src={space}>
                        <div className={s.titleBackground} onClick={() => {
                            setActiveSlide(-1)
                        }}><p className={s.title}>hello gues</p></div>
                    </div>
                    <div data-src={face}>
                        <div className={s.titleBackground} onClick={() => {
                            setActiveSlide(-1)
                        }}><p className={s.title}>hello gues</p></div>
                    </div>
                    <div data-src={boat}>
                        <div className={s.titleBackground} onClick={() => {
                            setActiveSlide(-1)
                        }}><p className={s.title}>hello gues</p></div>
                    </div>
                    <div data-src={townImage}>
                        <div className={s.titleBackground} onClick={() => {
                            setActiveSlide(-1)
                        }}><p className={s.title}>hello gues</p></div>
                    </div>
                    <div data-src={shavasana}>
                        <div className={s.titleBackground} onClick={() => {
                            setActiveSlide(-1)
                        }}><p className={s.title}>hello gues</p></div>
                    </div>
                    <div data-src={statue}>
                        <div className={s.titleBackground} onClick={() => {
                            setActiveSlide(-1)
                        }}><p className={s.title}>hello gues</p></div>
                    </div>
                    <div data-src={sunEarth}>
                        <div className={s.titleBackground} onClick={() => {
                            setActiveSlide(-1)
                        }}><p className={s.title}>hello gues</p></div>
                    </div>
                </AwesomeSlider>
            </div>
        </div>
    )
}
