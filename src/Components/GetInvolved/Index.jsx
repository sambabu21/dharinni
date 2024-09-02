import Banner from "./Banner"
import { useEffect } from "react"
import Form from "./Form"
import waLogo from "../../Images/whatsapp-logo.png"

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
            <div className="h-32 bg-[#F8FAE5] flex justify-center items-center gap-10">
                <h2 className="text-2xl font-bold">Join our whatsapp group to recieve the latest updates on events and other cool stuff we do → </h2>
                <a>
                    <img src={waLogo} className="w-16 hover:cursor-pointer "/>
                </a>
            </div>
        </div>
    )
} 