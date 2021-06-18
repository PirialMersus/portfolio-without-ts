import React from "react";
import s from './InnerComponent.module.scss'

export const InnerComponent = () => {
    return (
        <div className={s.wrap}><h2>Content</h2></div>
    )
}