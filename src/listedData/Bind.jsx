import React, { useEffect, useState } from "react"
import { getApi } from "../manageData/getData"
import { baseUrl } from "../manageData/config"
import Table from "./Table"


const Bind=()=>{
    const [alldata,setAllData]=useState([])

    useEffect(()=>{
        getApi().then(res=>setAllData(Array.isArray(res) ? res : res[Object.keys(res)[0]]))
    },[])
    return(
        <div>
        <Table alldata={alldata}/>
        </div>
    );
}
 export {Bind}