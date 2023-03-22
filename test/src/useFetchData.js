// This is Custom Hook

import { useEffect, useState } from "react"

function useFetchData(url){

    const [data, setData] = useState([])
    useEffect(() =>{
        fetchData()
    },)

    async function fetchData() {

        const resp = await fetch(url)
        setData(await resp.json())
    }
    return [data]
}

export default useFetchData