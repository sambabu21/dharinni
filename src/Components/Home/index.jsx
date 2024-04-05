import Carousel from "../Carousel"
import UpcomingEvents from "./UpcomingEvents"
import Testimonials from "./Testimonials"
import Intro from "./Intro"
import Reveal from "../../Animations/Reveal"
import {Link} from 'react-router-dom'
import Image from '../../Images/DHARINNI.png'
import { testimonials } from "../../Data"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import Banner from "./Banner"

export default function Home(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className="scroll-smooth">
            <Banner />
            <Intro />
            <UpcomingEvents />
            {/* <div className="h-24 md:h-28 flex justify-around items-center bg-[#43766C] ">
                <h1 className="text-sm md:text-xl lg:text-4xl font-bold text-[#faf4df] ">Want to donate to our cause?</h1>
                <Link
                      to="/contact"
                >
                     <button className="relative btn-hover p-1 sm:p-2 text-[#43766C] bg-[#F8FAE5] border border-[#F8FAE5] hover:bg-[#43766C] hover:text-[#F8FAE5] text-xs md:text-lg rounded-md shadow-md font-semibold">DONATE NOW →</button>
                </Link>
            </div> */}
            <Reveal>  
                <Testimonials testimonials={testimonials}/>
            </Reveal> 
        </div>
    )
}