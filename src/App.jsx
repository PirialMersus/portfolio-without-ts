import React, {useEffect, useState} from 'react';
import s from './App.module.scss'
import joliPhoto from '../src/img/joly.jpg'
import {BigButton} from "./components/BigButton/Bigbutton";
import {InnerComponentTopRight} from "./components/InnerComponentTopRight/InnerComponentTopRight";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import {InnerComponentBottomLeft} from "./components/InnerComponentBottomLeft/InnerComponentBottomLeft";
import {InnerComponentBottomRight} from "./components/InnerComponentBottomRight/InnerComponentBottomRight";

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

const classNames = require('classnames');

function App() {

    const [appClassName, setClass] = useState(`${s.app} ${s.invisible}`)

    useEffect(() => {
        setClass(`${s.app} ${s.visible}`)
    }, [])


    const [activeBlockNumber, setNumberOfActiveBlock] = useState(2)
    const [numberOfBlockAfterDelay, setNumberOfBlockAfterDelay] = useState(1)

    useEffect(() => {
        setTimeout(() => {
            setNumberOfBlockAfterDelay(activeBlockNumber)
        }, 1000)
    }, [activeBlockNumber])


    const finalFirstBlock_item_Class = classNames(s.item, s.topLeft, {
        [s.deactiveItem]: activeBlockNumber !== 1
    })
    const finalSecondBlock_item_Class = classNames(s.item, {
        [s.activeItem]: activeBlockNumber === 2,
        [s.deactiveItem]: activeBlockNumber === 3 || activeBlockNumber === 4
    })
    const finalThirdBlock_item_Class = classNames(s.item, {
        [s.activeItem]: activeBlockNumber === 3,
        [s.deactiveItem]: activeBlockNumber === 2 || activeBlockNumber === 4
    })
    const finalFourthBlock_item_Class = classNames(s.item, {
        [s.activeItem]: activeBlockNumber === 4,
        [s.deactiveItem]: activeBlockNumber === 2 || activeBlockNumber === 3
    })

    return (
        <div className={appClassName}>
            <div className={s.mainPicture}>
                {/*<img src={joliPhoto} alt="Joly" className={s.photo}/>*/}
            </div>
            <div className={s.contentColumn}>
                <section className={finalFirstBlock_item_Class}>
                    <div
                        className={s.miniBlock}
                        // onClick={() => {setNumberOfActiveBlock(true)}
                    >
                        <p>HI THERE ! I'M</p><h2>LINDA SMITH</h2><p>web designer</p>
                    </div>
                </section>
                <section className={finalSecondBlock_item_Class}                >
                    <div className={s.miniBlock} onClick={() => {
                        setNumberOfActiveBlock(activeBlockNumber === 2 ? 1 : 2)
                    }}>
                        <h2>about me</h2>
                    </div>
                    {numberOfBlockAfterDelay === 2 && <InnerComponentTopRight
                        activeBlockNumber={activeBlockNumber}
                        setNumberOfActiveBlock={setNumberOfActiveBlock}
                    />}
                </section>
                <section className={finalThirdBlock_item_Class}
                         onClick={() => {
                             setNumberOfActiveBlock(activeBlockNumber === 3 ? 1 : 3)
                         }}
                >
                    {activeBlockNumber !== 3 ? <div className={s.miniBlock}>
                            <BigButton firstWorld={'hello'} secondWorld={'world'}/>
                        </div> :
                        <InnerComponentBottomLeft/>}
                </section>
                <section className={finalFourthBlock_item_Class}
                         onClick={() => {
                             setNumberOfActiveBlock(activeBlockNumber === 4 ? 1 : 4)
                         }}>

                    <div className={s.miniBlock}>
                        <h2>get in touch</h2>
                    </div>
                    <InnerComponentBottomRight/>
                </section>
            </div>
        </div>
    )
}

export default App;
