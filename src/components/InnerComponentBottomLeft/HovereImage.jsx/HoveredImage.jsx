import React, {useState} from "react";
import s from './HovereImage.module.scss'

const classNames = require('classnames');

export const HoveredImage = React.memo((props) => {

    const [activeWrap, setActiveWrap] = useState('')
    const [passiveWrap, setPassiveWrap] = useState('')
    const [spanStyle, setSpanStyle] = useState({top:0,left:0})

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
        console.log('enter')
        const x = e.nativeEvent.pageX - e.nativeEvent.offsetX
        const y = e.nativeEvent.pageY - e.nativeEvent.offsetY

        const style = {top:y, left:x}
        setSpanStyle(style)
        // watchMode = true
        // console.log(e.nativeEvent.offsetX)
        // console.log(e.nativeEvent.offsetY)
    }

    const onMouseMoveHandler = (e) => {
        // const x = e.nativeEvent.pageX - e.nativeEvent.offsetX
        // const y = e.nativeEvent.pageY - e.nativeEvent.offsetY
        //
        // const style = {top:y, left:x}
        // setSpanStyle(style)



        // movementX = e.movementX
        // movementY = e.movementY
        //
        // if (movementX !== 0 && movementY !== 0) {
        //     return
        // }
        // if (editModeMode && watchMode) {
        //     if (movementX > 0 && movementY === 0) {
        //         setActiveWrap('left')
        //     }
        //     if (movementX === 0 && movementY > 0) {
        //         setActiveWrap('top')
        //     }
        //     if (movementX < 0 && movementY === 0) {
        //         setActiveWrap('right')
        //     }
        //     if (movementX === 0 && movementY < 0) {
        //         setActiveWrap('bottom')
        //     }
        //     setPassiveWrap('')
        // }
    }

    const onMouseLeaveHandler = (e) => {
        console.log('leave')

        const x = e.nativeEvent.pageX - e.nativeEvent.offsetX
        const y = e.nativeEvent.pageY - e.nativeEvent.offsetY

        const style = {top:y, left:x}
        setSpanStyle(style)
        // console.log(e.nativeEvent.offsetX)
        // console.log(e.nativeEvent.offsetY)
        //
        // // movementX = e.movementX
        // // movementY = e.movementY
        //
        // if (movementX !== 0 && movementY !== 0) {
        //     if (Math.abs(movementX) > Math.abs(movementY)) {
        //         findDirectionOnLeave(movementX, 0)
        //     } else {
        //         findDirectionOnLeave(0, movementY)
        //     }
        //
        // } else {
        //     // console.log(movementX, movementY)
        //     findDirectionOnLeave(movementX, movementY)
        // }
        // watchMode = false
        // editModeMode = true
    }

    return (
        <div className={s.container}>
            <div className={s.card}
                 onMouseEnter={onMouseEnterHandler}
                 onMouseLeave={onMouseLeaveHandler}
                 onMouseMove={onMouseMoveHandler}
            >
                <span style={spanStyle}>1234</span>
                <div className={s.imgBox}>
                    <img src={props.image} alt="image" className={s.img}/>
                </div>
                <div className={s.content}>
                    <div>
                        <h3>Card Title</h3>
                    </div>
                </div>
                {/*<div className={classNames(s.squareTop, {*/}
                {/*    [s.active]: activeWrap === 'top',*/}
                {/*    [s.top]: passiveWrap === 'top',*/}
                {/*    [s.bottom]: passiveWrap === 'bottom',*/}
                {/*    [s.left]: passiveWrap === 'left',*/}
                {/*    [s.right]: passiveWrap === 'right',*/}
                {/*})}><h4>{props.title}</h4></div>*/}
                {/*<div className={classNames(s.squareBottom, {*/}
                {/*    [s.active]: activeWrap === 'bottom',*/}
                {/*    [s.top]: passiveWrap === 'top',*/}
                {/*    [s.bottom]: passiveWrap === 'bottom',*/}
                {/*    [s.left]: passiveWrap === 'left',*/}
                {/*    [s.right]: passiveWrap === 'right',*/}
                {/*})}><h4>{props.title}</h4></div>*/}
                {/*<div className={classNames(s.squareLeft, {*/}
                {/*    [s.active]: activeWrap === 'left',*/}
                {/*    [s.top]: passiveWrap === 'top',*/}
                {/*    [s.bottom]: passiveWrap === 'bottom',*/}
                {/*    [s.left]: passiveWrap === 'left',*/}
                {/*    [s.right]: passiveWrap === 'right',*/}
                {/*})}><h4>{props.title}</h4></div>*/}
                {/*<div className={classNames(s.squareRight, {*/}
                {/*    [s.active]: activeWrap === 'right',*/}
                {/*    [s.top]: passiveWrap === 'top',*/}
                {/*    [s.bottom]: passiveWrap === 'bottom',*/}
                {/*    [s.left]: passiveWrap === 'left',*/}
                {/*    [s.right]: passiveWrap === 'right',*/}
                {/*})}><h4>{props.title}</h4>*/}
                {/*</div>*/}
            </div>

        </div>
    )
})
