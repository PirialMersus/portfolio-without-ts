import React, {useState} from "react";
import s from './HovereImage.module.scss'

const classNames = require('classnames');

export const HoveredImage = () => {

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

    return (
        <div className={s.wrap}>
            <div className={s.photoWrap}
                 onMouseEnter={onMouseEnterHandler}
                 onMouseLeave={onMouseLeaveHandler}
                 onMouseMove={onMouseMoveHandler}
            >
                <div className={classNames(s.squareTop, {
                    [s.active]: activeWrap === 'top',
                    [s.top]: passiveWrap === 'top',
                    [s.bottom]: passiveWrap === 'bottom',
                    [s.left]: passiveWrap === 'left',
                    [s.right]: passiveWrap === 'right',
                })}/>
                <div className={classNames(s.squareBottom, {
                    [s.active]: activeWrap === 'bottom',
                    [s.top]: passiveWrap === 'top',
                    [s.bottom]: passiveWrap === 'bottom',
                    [s.left]: passiveWrap === 'left',
                    [s.right]: passiveWrap === 'right',
                })}/>
                <div className={classNames(s.squareLeft, {
                    [s.active]: activeWrap === 'left',
                    [s.top]: passiveWrap === 'top',
                    [s.bottom]: passiveWrap === 'bottom',
                    [s.left]: passiveWrap === 'left',
                    [s.right]: passiveWrap === 'right',
                })}/>
                <div className={classNames(s.squareRight, {
                    [s.active]: activeWrap === 'right',
                    [s.top]: passiveWrap === 'top',
                    [s.bottom]: passiveWrap === 'bottom',
                    [s.left]: passiveWrap === 'left',
                    [s.right]: passiveWrap === 'right',
                })}/>
            </div>

        </div>
    )
}
