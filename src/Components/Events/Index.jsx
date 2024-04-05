import Banner from "./Banner"
import { useEffect } from "react"

export default function Events(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <Banner />
    )
} 