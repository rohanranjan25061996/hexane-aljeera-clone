import React from "react";
import{ shallowEqual, useDispatch, useSelector } from "react-redux"
import { filterCoronaData, getCoronaData} from "../../Redux/Corona/action";
import { saveDataInLocalStorage} from '../../Redux/Economy/action'
import { HeaderData } from "../Economy/HeaderData";
import { ShowEco } from "../Economy/ShowEco";
import { SideEco } from "../Economy/SideEco";
import styles from "../Economy/Styles/Economy.module.css"
import { useHistory } from "react-router";

function Corona(){

    const {isLoading, isError, filter_data ,data} = useSelector(state => state.corona, shallowEqual)
    const dispatch = useDispatch()
    const history = useHistory()

    React.useEffect(() => {
       getData()
    }, [])

    const getData = () => {

        dispatch( getCoronaData() )
        .then((res) => {
            if(res){
                dispatch( filterCoronaData() )
                dispatch( saveDataInLocalStorage() )
            }
        })
    }

    const redirectToUrl = (id) => {
        history.push(`/corona/${id}`)
    }
    return(
        <>
        <div className = {styles.main__page__main}>
            {isLoading ? "...loading" : isError ? "Something went wrong" : <div className = {styles.main__page__container}>
                {
                    data?.map((item, i) => i < 5 ? <div className = {styles.head__side__eco}>
                        {i === 0 ? <div className = {styles.header}>  <HeaderData {...item} key = {item.id} redirectToUrl = {redirectToUrl} /> </div> 
                        : <div className = {styles.side}> <table> <tbody>  <SideEco {...item} key = {item.id} redirectToUrl = {redirectToUrl} /> </tbody> </table> </div>}
                    </div> : <div className = {styles.showall}> <table> <tbody> <ShowEco {...item} key = {item.id} redirectToUrl = {redirectToUrl} /> </tbody> </table> </div>)
                }
                </div>}
        </div>
        </>
    )
}

export {Corona}