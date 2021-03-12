import React from "react";
import{ shallowEqual, useDispatch, useSelector } from "react-redux"
import { filterEcoData, getEconomyData, saveDataInLocalStorage} from "../../Redux/Economy/action";
import { HeaderData } from "./HeaderData";
import { ShowEco } from "./ShowEco";
import { SideEco } from "./SideEco";
import styles from "../Economy/Styles/Economy.module.css"
import { useHistory } from "react-router";
function Economy(){

    const {isLoading, isError, filter_data} = useSelector(state => state.eco, shallowEqual)
    const dispatch = useDispatch()
    const history = useHistory()

    React.useEffect(() => {
       getData()
    }, [])

    const getData = () => {

        dispatch( getEconomyData() )
        .then((res) => {
            if(res){
                dispatch( filterEcoData() )
                dispatch( saveDataInLocalStorage() )
            }
        })
    }

    const redirectToUrl = (id) => {
        history.push(`/economy/${id}`)
    }
    return(
        <>
            <div className = {styles.main__page__main}>
                    {isLoading ? "...loading" : isError ? "Something went wrong" : <div className = {styles.main__page__container}>
                        {
                            filter_data && filter_data.map((item, i) => i < 5 ? <div className = {styles.head__side__eco}>
                                {i === 0 ? <div className = {styles.header}>  <HeaderData {...item} key = {item.id} redirectToUrl = {redirectToUrl} /> </div> 
                                : <div className = {styles.side}> <table> <tbody>  <SideEco {...item} key = {item.id} redirectToUrl = {redirectToUrl} /> </tbody> </table> </div>}
                            </div> : <div className = {styles.showall}> <table> <tbody> <ShowEco {...item} key = {item.id} redirectToUrl = {redirectToUrl} /> </tbody> </table> </div>)
                        }
                    </div>}
            </div>
        </>
    )
}

export {Economy}