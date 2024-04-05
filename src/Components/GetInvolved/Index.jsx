import Banner from "./Banner"
import { useEffect } from "react"
import Form from "./Form"
import JoinImg from "../../Images/join-svg.png"

export default function GetInvolved(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div>
            <Banner />
            <div className="lg:flex">
                {/* <div className="lg:w-1/3 bg-[#f7f7f8] flex justify-center items-center relative">
                    <img src={JoinImg} className="lg:absolute  md:w-[30rem] md:h-[30rem] w-[15rem] h-[15rem]"/>
                </div> */}
                <Form />
            </div>
        </div>
    )
} 