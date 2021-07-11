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
                />
                    </div>
                {/*    <div><HoveredImage*/}
                {/*        title='first block'*/}
                {/*        image={sunEarth}*/}
                {/*    />*/}
                {/*    </div>*/}
                {/*    <div><HoveredImage*/}
                {/*        title='first block'*/}
                {/*        image={face}*/}
                {/*    />*/}
                {/*    </div>*/}
                {/*    <div><HoveredImage*/}
                {/*        title='first block'*/}
                {/*        image={yoga}*/}
                {/*    />*/}
                {/*    </div>*/}
                {/*    <div><HoveredImage*/}
                {/*        title='first block'*/}
                {/*        image={sanya}*/}
                {/*    />*/}
                {/*    </div>*/}
                {/*    <div><HoveredImage*/}
                {/*        title='first block'*/}
                {/*        image={shavasana}*/}
                {/*    />*/}
                {/*    </div>*/}
                {/*    <div><HoveredImage*/}
                {/*        title='first block'*/}
                {/*        image={statue}*/}
                {/*    />*/}
                {/*    </div>*/}
                {/*    <div><HoveredImage*/}
                {/*        title='first block'*/}
                {/*        image={space}*/}
                {/*    />*/}
                {/*    </div>*/}
                {/*    <div><HoveredImage*/}
                {/*        title='first block'*/}
                {/*        image={boat}*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
