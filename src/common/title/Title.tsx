import React from "react";
import style from './Title.module.scss';

type PropsType = {
    title: string
}

function Title(props: PropsType) {
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>
    )
}

export default Title;