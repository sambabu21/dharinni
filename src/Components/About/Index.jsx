import Banner from "./Banner"
import Team from "./Team"
import LogoSection from "./LogoSection"
import Reveal from "../../Animations/Reveal"
import { useEffect } from "react"
import { Link } from "react-router-dom"


export default function About(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className="border-b-2 scroll-smooth relative">
            <Banner />
            <Reveal>
            <div className=" bg-[#F8FAE5]">
                {/* <div className="lg:max-w-lg p-10 flex flex-col justify-center items-center"> */}
                <div class="my-auto mx-auto flex flex-col justify-center items-center relative py-20">
            
                    
                    {/* <h1 className="mt-10 text-3xl font-bold tracking-tight text-[#F8FAE5] sm:text-4xl font-Anek">About Dharinni</h1> */}
                    
                    <div className="flex  justify-center items-center sm:w-3/4 lg:py-10 lg:mb-10 sm:px-24 px-10">
                        
                            <h2 className="mt-10 lg:mb-10   text-sm md:text-lg leading-7 text-stone-950 lg:max-w-none text-justify z-10">D H A R I N N I, is a trust founded in 2018 in Kerala, with the intent to do our part for the earth we live on. We are a core team of young architects, planners, conservation enthusiasts and techies, supported by an advisory team of 
                                Civil professionals.We are working towards Conservation, Preservation and Restoration of the Natural and Cultural Heritage, with incentivised adaptive reuse of built heritage as the epicenter. This has been initiated through carefully strategized programs for creating awareness, consciousness, sensibility and sensitivity towards saving "the earth we live on".

                                <br></br>
                                <br></br>
                                “BE THE CHANGE YOU WANT TO SEE”
                                <br></br>
                                <br></br>

                                If you are a nature lover, an explorer, an artist, an architect or just a curious soul, feel free to join in our cause and we can connect over anything and everything revolving around heritage and sustainability.

                            </h2>
                            {/* <div className="absolute text-[15rem] font-bold text-[#F8FAE5] -z-0 drop-shadow-xl">
                                <h1>DHARINNI</h1>
                            </div> */}
                            
                    </div>
                </div>
            </div>
           </Reveal> 
           <Reveal>
                <LogoSection />
           </Reveal>
           
            <Reveal>
                <Team />
            </Reveal>
            {/* <div className="h-24 md:h-28 flex justify-around items-center bg-[#43766C] ">
                <h1 className="text-sm md:text-xl lg:text-4xl font-bold text-[#faf4df]">Want to be a part of Dharinni?</h1>
                <Link
                      to="/contact"
                >
                     <button className="relative btn-hover p-1 sm:p-2 text-[#43766C] bg-[#F8FAE5] border border-[#F8FAE5] hover:bg-[#43766C] hover:text-[#F8FAE5] text-xs md:text-lg rounded-md shadow-md font-semibold">JOIN NOW →</button>
                </Link>
            </div> */}
        </div>
    )
}