import React, {useState} from "react";
import s from './InnerComponentBottomLeft.module.scss'
import {HoveredImage} from "./HovereImage.jsx/HoveredImage";
import townImage from '../../img/2CjYynXykis.jpg'
import sunEarth from '../../img/70188833_15484.jpg'
import face from '../../img/face.jpg'
import yoga from '../../img/photo_2020-07-21_11-04-14.jpg'
import sanya from '../../img/2CjYynXykis.jpg'
import shavasana from '../../img/shavas.jpg'
import statue from '../../img/statue for find.jpg'
import space from '../../img/unnamed.jpg'
import boat from '../../img/userAva.jpg'

// const classNames = require('classnames');

export const InnerComponentBottomLeft = () => {
    //............................................
    const [activeWrap, setActiveWrap] = useState('')
    const [passiveWrap, setPassiveWrap] = useState('')

    let movementX;
    let movementY;

    let watchMode = false
    let editModeMode = true

    const findDirectionOnLeave = (movementX, movementY) => {
        if (movementX < 0 && movementY === 0) {
            setPassiveWrap('left')
        }
        if (movementX === 0 && movementY < 0) {
            setPassiveWrap('top')
        }
        if (movementX > 0 && movementY === 0) {
            setPassiveWrap('right')
        }
        if (movementX === 0 && movementY > 0) {
            setPassiveWrap('bottom')
        }
    }

    const onMouseEnterHandler = (e) => {
        watchMode = true
    }

    const onMouseMoveHandler = (e) => {

        movementX = e.movementX
        movementY = e.movementY

        if (movementX !== 0 && movementY !== 0) {
            return
        }
        if (editModeMode && watchMode) {
            if (movementX > 0 && movementY === 0) {
                setActiveWrap('left')
            }
            if (movementX === 0 && movementY > 0) {
                setActiveWrap('top')
            }
            if (movementX < 0 && movementY === 0) {
                setActiveWrap('right')
            }
            if (movementX === 0 && movementY < 0) {
                setActiveWrap('bottom')
            }
            setPassiveWrap('')
        }
    }

    const onMouseLeaveHandler = (e) => {

        // movementX = e.movementX
        // movementY = e.movementY

        if (movementX !== 0 && movementY !== 0) {
            if (Math.abs(movementX) > Math.abs(movementY)) {
                findDirectionOnLeave(movementX, 0)
            } else {
                findDirectionOnLeave(0, movementY)
            }

        } else {
            // console.log(movementX, movementY)
            findDirectionOnLeave(movementX, movementY)
        }
        watchMode = false
        editModeMode = true
    }
    //////////////.................................................
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
            <div className={s.imagesWrap}>
                <div><HoveredImage
                    title='first block'
                    image={townImage}
                    onMouseLeaveHandler={onMouseLeaveHandler}
                    onMouseLeaveHandler={onMouseLeaveHandler}
                />
                    </div>
                    <div><HoveredImage
                        title='first block'
                        image={sunEarth}
                    />
                    </div>
                    <div><HoveredImage
                        title='first block'
                        image={face}
                    />
                    </div>
                    <div><HoveredImage
                        title='first block'
                        image={yoga}
                    />
                    </div>
                    <div><HoveredImage
                        title='first block'
                        image={sanya}
                    />
                    </div>
                    <div><HoveredImage
                        title='first block'
                        image={shavasana}
                    />
                    </div>
                    <div><HoveredImage
                        title='first block'
                        image={statue}
                    />
                    </div>
                    <div><HoveredImage
                        title='first block'
                        image={space}
                    />
                    </div>
                    <div><HoveredImage
                        title='first block'
                        image={boat}
                    />
                </div>
            </div>
        </div>
    )
}
