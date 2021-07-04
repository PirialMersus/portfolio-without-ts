import React, {useState} from "react";
import s from './InnerComponentBottomLeft.module.scss'

const classNames = require('classnames');


export const InnerComponentBottomLeft = () => {
    // let changeClass = false

    const [activeWrap, setActiveWrap] = useState('')
    const [passiveWrap, setPassiveWrap] = useState('')

    // useState(()=> {
    //     setTimeout(() => {
    //         debugger
    //         setActiveWrap('')
    //         setPassiveWrap('')
    //     }, 1000)
    // },[editModeMode])

    let movementX;
    let movementY;

    let watchMode = false
    let editModeMode = true

    const findDirectionOnLeave = (movementX, movementY) => {
        if (movementX < 0 && movementY === 0) {
            console.log('left aut')
            setPassiveWrap('left')
        }
        if (movementX === 0 && movementY < 0) {
            console.log('top aut')
            setPassiveWrap('top')

        }
        if (movementX > 0 && movementY === 0) {
            console.log('right aut')
            setPassiveWrap('right')

        }
        if (movementX === 0 && movementY > 0) {
            console.log('bottom aut')
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
            // console.log(movementX, movementY)
            if (movementX > 0 && movementY === 0) {
                console.log('left in')
                setActiveWrap('left')
            }
            if (movementX === 0 && movementY > 0) {
                console.log('top in')
                setActiveWrap('top')

            }
            if (movementX < 0 && movementY === 0) {
                console.log('right in')
                setActiveWrap('right')

            }
            if (movementX === 0 && movementY < 0) {
                console.log('bottom in')
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
        // setActiveWrap('')
        // changeClass = !changeClass
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
