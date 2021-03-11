import React from 'react'
import styles from "./Coronavirus/Corona.module.css";
const Advetisement = ({hideAd , key , image , link}) => {
    return (
        <div >
            <i onClick={() => hideAd(key)} style={{color:"red"}} class="fas fa-times"> </i>
            <img className={styles.ads} src={image} alt="ads"/>
        </div>
    )
}

export default Advetisement
