import React, {useEffect, useState} from 'react';
import s from './App.module.scss'
import {BigButton} from "./components/BigButton/Bigbutton";
import {InnerComponentTopRight} from "./components/InnerComponentTopRight/InnerComponentTopRight";
import {InnerComponentBottomLeft} from "./components/InnerComponentBottomLeft/InnerComponentBottomLeft";
import {InnerComponentBottomRight} from "./components/InnerComponentBottomRight/InnerComponentBottomRight";
import ReactTypingEffect from 'react-typing-effect';


const classNames = require('classnames');

function App() {

    const [appClassName, setClass] = useState(`${s.app}`)

    useEffect(() => {
        setClass(`${s.app} ${s.visible}`)
    }, [])


    const [activeBlockNumber, setNumberOfActiveBlock] = useState(3)
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
    const commonMiniBlockClass = classNames(s.miniBlock, {[s.visible]: numberOfBlockAfterDelay === 1})

    return (
        <div className={appClassName}>

            <div className={s.wrapForAppear}/>

            <div className={s.mainPicture}>
            </div>
            <div className={s.contentColumn}>
                <section className={finalFirstBlock_item_Class}>
                    {activeBlockNumber === 1 &&
                    <div className={commonMiniBlockClass}>
                        <div>
                            <p>HI THERE ! I'M</p>
                            <h2>LINDA SMITH</h2>
                            <div>
                                <ReactTypingEffect
                                    className={s.typedText}
                                    cursor={' '}
                                    text={["BLOGGER", "WEB DESIGNER", "DEVELOPER"]}
                                    eraseDelay={1000}
                                    typingDelay={1000}
                                    speed={50}
                                    eraseSpeed={50}
                                />
                            </div>
                        </div>
                    </div>}
                </section>

                <section className={finalSecondBlock_item_Class}>
                    {activeBlockNumber !== 2 && <div className={commonMiniBlockClass}
                                                     onClick={() => {
                                                         setNumberOfActiveBlock(activeBlockNumber === 2 ? 1 : 2)
                                                     }}>
                        <BigButton
                            firstWorld='ABOUT'
                            secondWorld='ME'
                        />
                    </div>}
                    {activeBlockNumber === 2 && <InnerComponentTopRight
                        activeBlockNumber={activeBlockNumber}
                        setNumberOfActiveBlock={setNumberOfActiveBlock}
                        numberOfBlockAfterDelay={numberOfBlockAfterDelay}
                    />}
                </section>

                <section className={finalThirdBlock_item_Class}>
                    {activeBlockNumber !== 3 && <div className={commonMiniBlockClass}
                                                     onClick={() => {
                                                         setNumberOfActiveBlock(activeBlockNumber === 3 ? 1 : 3)
                                                     }}
                    >
                        <BigButton
                            firstWorld={'MY'}
                            secondWorld={'PORTFOLIO'}
                            visibilityCondition={numberOfBlockAfterDelay === 1}
                        />
                    </div>}
                    {activeBlockNumber === 3 && <InnerComponentBottomLeft
                        activeBlockNumber={activeBlockNumber}
                        setNumberOfActiveBlock={setNumberOfActiveBlock}
                        numberOfBlockAfterDelay={numberOfBlockAfterDelay}
                    />}
                </section>

                <section className={finalFourthBlock_item_Class}>
                    {activeBlockNumber !== 4
                    && <div className={commonMiniBlockClass}
                            onClick={() => {
                                setNumberOfActiveBlock(activeBlockNumber === 4 ? 1 : 4)
                            }}
                    >
                        <BigButton
                            firstWorld={'GET'}
                            secondWorld={'IN TOUCH'}
                            visibilityCondition={numberOfBlockAfterDelay === 1}/>
                    </div>}
                    {activeBlockNumber === 4 && <InnerComponentBottomRight
                        activeBlockNumber={activeBlockNumber}
                        setNumberOfActiveBlock={setNumberOfActiveBlock}
                        numberOfBlockAfterDelay={numberOfBlockAfterDelay}
                    />}

                </section>
            </div>

        </div>
    )
}

export default App;
// import React from "react";
//
// class UniqueList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {values: [], text: ''};
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handlePushElement = this.handlePushElement.bind(this);
//         this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
//         this.handleRemove = this.handleRemove.bind(this);
//         this.handleClear = this.handleClear.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState((prevState) => ({...prevState, text: event.target.value}));
//     }
//
//     handleOnKeyPress(event) {
//         if (event.key === 'Enter' && event.target.value) {
//             this.handlePushElement(event);
//         }
//     }
//
//     handlePushElement(event) {
//
//         for (let i = 0; i < this.state.values.length; i++) {
//             if (this.state.text.trim().toLowerCase() === this.state.values[i].toLowerCase()) {
//                 return;
//             }
//         }
//         this.setState((prevState) => {
//             return {values: [...prevState.values, prevState.text.trim()], text: ''}
//         });
//     }
//
//     handleRemove(event) {
//         for (let i = 0; i < this.state.values.length; i++) {
//             if (this.state.text.trim().toLowerCase() === this.state.values[i].toLowerCase()) {
//                 const tempArr = [...this.state.values]
//                 tempArr.splice(i, 1);
//
//                 this.setState({values: tempArr, text: ''});
//                 break;
//             }
//
//         }
//
//     }
//
//     handleClear(event) {
//         if (this.state.values.length > 0) {
//             this.setState({values: [], text: ''});
//         }
//
//     }
//
//     // TODO feel free to adjust this skeleton as you wish
//
//     render() {
//         return (
//             <>
//                 <div>
//                     <input
//                         className="item-input"
//                         type="text"
//                         value={this.state.text}
//                         onChange={this.handleChange}
//                         onKeyDown={this.handleOnKeyPress}
//                     />
//                     <input
//                         className="add-button"
//                         type="button"
//                         value="Add Item"
//                         onClick={this.handlePushElement}
//                     />
//                     <input
//                         className="remove-button"
//                         type="button"
//                         value="Remove Item"
//                         onClick={this.handleRemove}
//                     />
//                     <input
//                         className="clear-button"
//                         type="button"
//                         value="Clear Items"
//                         onClick={this.handleClear}
//                     />
//                 </div>
//                 <ul className="items">
//                     {this.state.values.map((value, index) => <li key={index}>{value}</li>)}
//                 </ul>
//             </>
//         );
//     }
// }
//
// export default UniqueList;