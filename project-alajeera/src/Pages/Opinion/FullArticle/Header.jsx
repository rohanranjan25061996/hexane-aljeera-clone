import React from "react"
import styles from "../FullArticle/Styles/Content.module.css"

function Header(data){

    const { title, description } = data
    return(
        <>
        <div className = {styles.header__main}>
        {/* <i class="fas fa-quote-left">Hello</i> */}
            <h1> {title} </h1>
            <p> {description} </p>
        </div>
        </>
    )
}

export {Header}