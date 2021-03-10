import React from "react"
import styles from "../Comman/Styles/Content.module.css"

function Header(data){

    const { title, description } = data
    return(
        <>
        <div className = {styles.header__main}>
            <h1> {title} </h1>
            <p> {description} </p>
        </div>
        </>
    )
}

export {Header}