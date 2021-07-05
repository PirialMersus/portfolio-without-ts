import React from "react";
import s from './InnerComponentBottomLeft.module.scss'
import {HoveredImage} from "./HovereImage.jsx/HoveredImage";

// const classNames = require('classnames');

export const InnerComponentBottomLeft = () => {

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
                <div><HoveredImage/></div>
                <div><HoveredImage/></div>
                <div><HoveredImage/></div>
                <div><HoveredImage/></div>
                <div><HoveredImage/></div>
                <div><HoveredImage/></div>
                <div><HoveredImage/></div>
                <div><HoveredImage/></div>
                <div><HoveredImage/></div>
                <div><HoveredImage/></div>
                <div><HoveredImage/></div>
                <div><HoveredImage/></div>
                <div><HoveredImage/></div>
                <div><HoveredImage/></div>
            </div>
        </div>
    )
}
