import React, {useEffect, useState} from 'react';
import s from './App.module.scss'
import joliPhoto from '../src/img/joly.jpg'
import {BigButton} from "./components/BigButton/Bigbutton";
import {InnerComponent} from "./components/InnerComponent/Innercomponent";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'

const classNames = require('classnames');

function App() {

    let componentClass = `${s.app} ${s.invisible}`
    // let componentClass = classNames(s.app, s.invisible)

    useEffect(() => {
        // componentClass = classNames(s.app, s.visible)
        componentClass = `${s.app} ${s.visible}`
        debugger
    }, [])

    const [activeBlockNumber, setNumberOfActiveBlock] = useState(1)


    const finalFirstBlock_item_Class = classNames(s.item, {
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

    const finalFirst_rowItem_Class = classNames(s.rowItem, {[s.activeRow]: activeBlockNumber === 2})
    const finalSecond_rowItem_Class = classNames(s.rowItem, {[s.activeRow]: activeBlockNumber === 3 || activeBlockNumber === 4})

    return (
        <div className={componentClass}>
            <img src={joliPhoto} alt="Joly" className={s.photo}/>
            <div className={s.contentColumn}>
                <div className={s.flexContainer}>
                    <div className={finalFirst_rowItem_Class}>
                        <div className={finalFirstBlock_item_Class}>
                            <FontAwesomeIcon
                                icon={faTimesCircle}
                                className={s.fontAwesome}
                                onClick={() => {
                                    setNumberOfActiveBlock(1)
                                }}
                            />
                            <div
                                className={s.miniBlock}
                                // onClick={() => {setNumberOfActiveBlock(true)}
                            >
                                <p>HI THERE ! I'M</p><h2>LINDA SMITH</h2><p>web designer</p>
                            </div>
                        </div>
                        <div className={finalSecondBlock_item_Class}
                             onClick={() => {
                                 setNumberOfActiveBlock(activeBlockNumber === 2 ? 1 : 2)
                             }}>
                            <FontAwesomeIcon
                                icon={faTimesCircle}
                                className={s.fontAwesome}
                                onClick={() => {
                                    setNumberOfActiveBlock(1)
                                }}
                            />
                            <div className={s.miniBlock}>
                                <h2>about me</h2>
                            </div>
                            <InnerComponent/>
                        </div>
                    </div>
                    <div className={finalSecond_rowItem_Class}>
                        <div className={finalThirdBlock_item_Class}
                             onClick={() => {
                                 setNumberOfActiveBlock(activeBlockNumber === 3 ? 1 : 3)
                             }}>
                            <FontAwesomeIcon
                                icon={faTimesCircle}
                                className={s.fontAwesome}
                                onClick={() => {
                                    setNumberOfActiveBlock(1)
                                }}
                            />
                            <div className={s.miniBlock}>
                                <BigButton firstWorld={'hello'} secondWorld={'world'}/></div>
                            <InnerComponent/>
                        </div>
                        <div className={finalFourthBlock_item_Class}
                             onClick={() => {
                                 setNumberOfActiveBlock(activeBlockNumber === 4 ? 1 : 4)
                             }}>
                            <div className={s.wrapper}>
                                <FontAwesomeIcon
                                    icon={faTimesCircle}
                                    className={s.fontAwesome}
                                    onClick={() => {
                                        setNumberOfActiveBlock(1)
                                    }}
                                />
                                <div className={s.miniBlock}>
                                    <h2>get in touch</h2>
                                </div>
                                <InnerComponent/>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className={s.innerContent}>*/}
                {/*    <button*/}
                {/*        onClick={() => {*/}
                {/*            setNumberOfActiveBlock(false)*/}
                {/*        }}>Close*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>

        </div>
    );
}

export default App;
