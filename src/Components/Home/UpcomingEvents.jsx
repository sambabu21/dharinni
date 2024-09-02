
import { Link } from "react-router-dom"
import Reveal from "../../Animations/Reveal"
import Carousel from "../Carousel"

export default function UpcomingEvents(){
    return(
        <div className="sm: pb-20 flex flex-col justify-center items-center bg-stone-950 relative overflow-hidden" id="up-event">
            <h1 className="text-[#F8FAE5] z-10 font-bold text-4xl tracking-tight md:text-6xl mb-10 mt-10 sm:mb-20 pt-10 ">UPCOMING EVENTS</h1>
            <div className="w-3/4 ">
                <Reveal>
                    <div className="div-1 h-[300px]  relative flex flex-col justify-center items-center mb-10 group rounded-md"> 
                        <div className="absolute inset-0 -z-10 group-hover:bg-gradient-to-t from-[#505043da] via-[#505043da] to-[#505043da] rounded-md"></div>
                        
                        <h1 className="text-[#f9f8f4] text-2xl sm:text-4xl font-bold hidden group-hover:block">Event 1 Title...</h1>
                        <Link
                                to="/about"
                            >
                                <button className="relative mt-10 p-2 text-[#f9f8f4] z-1 border-[#f9f8f4] border btn-slider hidden group-hover:block rounded-md shadow-md">LEARN MORE →</button>
                            </Link>
                    </div>
                </Reveal>
                <Reveal delay={0.5}>
                    <div className="div-2 h-[300px] relative flex flex-col justify-center items-center mb-10 group rounded-md">
                        <div className="absolute inset-0 -z-10 group-hover:bg-gradient-to-t from-[#505043da] via-[#505043da] to-[#505043da] rounded-md"></div>
                       
                        <h1 className="text-[#f9f8f4] text-2x sm:text-4xl font-bold hidden group-hover:block">Event 2 Title...</h1>
                        <Link
                                to="/about"
                            >
                                <button className="relative mt-10 p-2 text-[#f9f8f4] z-1 border-[#f9f8f4] border btn-slider hidden group-hover:block rounded-md shadow-md">LEARN MORE →</button>
                            </Link>
                    </div>
                </Reveal>
                <Reveal delay={0.75}>
                    {/* <div className="div-3 h-[300px] relative flex flex-col justify-center items-center mb-10 group rounded-md">
                        <div className="absolute inset-0 -z-10 group-hover:bg-gradient-to-t from-[#505043da] via-[#505043da] to-[#505043da]  rounded-md"></div>
                        
                        <h1 className="text-[#f9f8f4] text-2x sm:text-4xl font-bold hidden group-hover:block">Event 3 Title...</h1>
                        <Link
                                to="/about"
                            >
                                <button className="relative mt-10 p-2 text-[#f9f8f4] z-1 border-[#f9f8f4] border btn-slider hidden group-hover:block rounded-md shadow-md">LEARN MORE →</button>
                            </Link>
                    </div> */}
                    <div className=" h-[300px] relative flex  justify-center items-center mb-10 group rounded-md">
                        <div className="div-2 w-[300px] h-[300px] rounded-md flex">
                            {/* <Carousel /> */}
                        </div>
                        <Link
                            to="/events"
                        >
                            <button className="relative w-[120px] h-[120px]  sm:mx-10 text-[#F8FAE5]   border-[#43766C] border-4 hover:text-[#2C3639] hover:border-0 hover:bg-[#F8FAE5] rounded-md shadow-md mt-8">EXPLORE EVENTS <br></br><span className="text-xl"></span>➤</button>
                        </Link>
                    </div>
                </Reveal>
            </div>
            <div>
                {/* <Link
                       to="/events"
                 >
                     <button className="relative  p-2  sm:mx-10 text-[#F8FAE5]   border-[#F8FAE5] border-2 hover:text-[#2C3639] hover:bg-[#F8FAE5] rounded-md shadow-md mt-8">CHECK OUT MORE EVENTS →</button>
                </Link> */}
            </div>
        </div>
    )
}