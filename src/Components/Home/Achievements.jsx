import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNewspaper,faAward } from "@fortawesome/free-solid-svg-icons"

export default function Achievements(){
    return (
        <div className="flex flex-col justify-center items-center w-3/4 mx-auto pb-10 ">
            <h2 className="text-3xl font-bold leading-8 tracking-normal text-stone-800  py-10 ">ACHIEVEMENTS</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="w-1/3 h-2/3 flex flex-col  justify-center items-center  border-stone-800 ">
                    <div className="w-[10rem] h-[10rem] border-4 border-stone-900 rounded-full flex justify-center items-center ">
                        <h1 className="text-stone-700  text-8xl font-extrabold ">1.</h1>
                    </div>
                    <h2 className="text-sm lg:text-lg text-stone-800  px-4  pt-10 h-[8rem] font-bold">Care La Contest - Fourth position  </h2>
                </div>
                <div className="md:w-1/3 h-1/3 flex flex-col  justify-around items-center  relative px-2 border-y-4 pt-10 md:border-0 md:pt-0 border-[#474033]">
                    <div className="hidden md:block w-full h-full absolute inset-0  border-x-4 border-[#474033] -skew-x-6"></div>

                    <div className="w-[10rem] h-[10rem]  border-4 border-stone-900 rounded-full flex justify-center items-center ">
                        <h1 className="text-stone-700  text-8xl font-extrabold ">2.</h1>
                    </div>
                    <h2 className="text-sm lg:text-lg text-stone-800  px-4  pt-10 h-[8rem] font-bold">Featured on The Hindu</h2>
                </div>
                <div className="w-1/3 h-2/3 flex flex-col  justify-center items-center  border-[#474033]  ">
                    <div className="w-[10rem] h-[10rem] border-4 border-stone-900 rounded-full flex justify-center items-center ">
                        <h1 className="text-stone-700  text-8xl font-extrabold ">3.</h1>
                    </div>
                    <h2 className="text-sm lg:text-lg text-stone-800  px-4 pt-10 h-[8rem] font-bold">Featured on BBC</h2>
                </div>
            </div>
        </div>
    )
}