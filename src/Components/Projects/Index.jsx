import Banner from "./Banner"
import { useEffect } from "react"

export default function Projects(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <Banner />
    )
} 