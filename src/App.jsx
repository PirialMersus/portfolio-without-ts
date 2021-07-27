import React, {useEffect, useState} from 'react';
import s from './App.module.scss'
import {BigButton} from "./components/BigButton/Bigbutton";
import {InnerComponentTopRight} from "./components/InnerComponentTopRight/InnerComponentTopRight";
import {InnerComponentBottomLeft} from "./components/InnerComponentBottomLeft/InnerComponentBottomLeft";
import {InnerComponentBottomRight} from "./components/InnerComponentBottomRight/InnerComponentBottomRight";


const classNames = require('classnames');

function App() {

    const [appClassName, setClass] = useState(`${s.app}`)

    useEffect(() => {
        setClass(`${s.app} ${s.visible}`)
    }, [])


    const [activeBlockNumber, setNumberOfActiveBlock] = useState(1)
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

            <div className={s.wrapForAppear}/>

            <div className={s.mainPicture}>
            </div>
            <div className={s.contentColumn}>
                <section className={finalFirstBlock_item_Class}>
                    <div className={s.miniBlock}>
                        <p>HI THERE ! I'M</p><h2>LINDA SMITH</h2><p>web designer</p>
                    </div>
                </section>

                <section className={finalSecondBlock_item_Class}>
                    {activeBlockNumber !== 2 && <div className={s.miniBlock}
                                                     onClick={() => {
                                                         setNumberOfActiveBlock(activeBlockNumber === 2 ? 1 : 2)
                                                     }}>
                        <BigButton
                            firstWorld='ABOUT'
                            secondWorld='ME'
                        />
                    </div>}
                    {numberOfBlockAfterDelay === 2 && <InnerComponentTopRight
                        activeBlockNumber={activeBlockNumber}
                        setNumberOfActiveBlock={setNumberOfActiveBlock}
                    />}
                </section>

                <section className={finalThirdBlock_item_Class}>
                    {activeBlockNumber !== 3 && <div className={s.miniBlock}
                                                     onClick={() => {
                                                         setNumberOfActiveBlock(activeBlockNumber === 3 ? 1 : 3)
                                                     }}
                    >
                        <BigButton firstWorld={'MY'} secondWorld={'PORTFOLIO'}/>
                    </div>}
                    {numberOfBlockAfterDelay === 3 && <InnerComponentBottomLeft
                        activeBlockNumber={activeBlockNumber}
                        setNumberOfActiveBlock={setNumberOfActiveBlock}
                    />}
                </section>

                <section className={finalFourthBlock_item_Class}>
                    {activeBlockNumber !== 4
                    && <div className={s.miniBlock}
                            onClick={() => {
                                setNumberOfActiveBlock(activeBlockNumber === 4 ? 1 : 4)
                            }}
                    >
                        <BigButton
                            firstWorld={'GET'}
                            secondWorld={'IN TOUCH'}
                            invisibilityCondition={}/>
                    </div>}
                    {numberOfBlockAfterDelay === 4 && <InnerComponentBottomRight
                        activeBlockNumber={activeBlockNumber}
                        setNumberOfActiveBlock={setNumberOfActiveBlock}
                    />}

                </section>
            </div>

        </div>
    )
}

export default App;
