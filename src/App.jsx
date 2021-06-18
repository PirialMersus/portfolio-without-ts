import React, {useEffect, useState} from 'react';
import s from './App.module.scss'
import joliPhoto from '../src/img/joly.jpg'
import {BigButton} from "./components/BigButton/Bigbutton";
import {InnerComponent} from "./components/InnerComponent/Innercomponent";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'

const classNames = require('classnames');

function App() {

    const [appClassName, setClass] = useState(`${s.app} ${s.invisible}`)

    useEffect(() => {
        setClass(`${s.app} ${s.visible}`)
    }, [])

    const [activeBlockNumber, setNumberOfActiveBlock] = useState(1)


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
                <section className={finalFirstBlock_item_Class }>
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
                </section>
                <section className={finalSecondBlock_item_Class}
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
                </section>
                <section className={finalThirdBlock_item_Class}
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
                </section>
                <section className={finalFourthBlock_item_Class}
                         onClick={() => {
                             setNumberOfActiveBlock(activeBlockNumber === 4 ? 1 : 4)
                         }}>
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
                </section>
            </div>
        </div>
    )
}

export default App;
