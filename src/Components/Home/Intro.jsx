import { Link } from "react-router-dom"
import Reveal from "../../Animations/Reveal"
import Achievements from "./Achievements"
import IntroImg from "../../Images/intro-img.png"
import Carousel from "../Carousel"

export default function Intro(){
    return (
    
        <div className=" bg-[#F8FAE5]  w-full -z-20 py-20">
            
            
              {/* <div class="absolute inset-x-0 top-0 hidden h-1/2  lg:block" aria-hidden="true"></div>
                <div class="mx-auto max-w-7xl lg:bg-transparent lg:px-8">
                  <div class="lg:grid lg:grid-cols-14 lg:grid-rows-">
                    <div class="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
                      
                      <div class="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:p-0">
                        
                          <img class=" lg:block border-4 border-stone-950 object-cover object-center bg-[#F8FAE5] rounded-lg" src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80" alt="" />
                       
                      </div>
                    </div>

                    <div class="relative lg:border-4 border-stone-950 rounded-xl lg:col-span-12 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center ">
                      <div class="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                      </div>
                      <div class="relative mx-auto max-w-md space-y-6 px-6 py-12 sm:max-w-3xl sm:py-16 lg:col-span-4 lg:col-start-3 lg:max-w-none lg:p-0 lg:row-start-2">
                        
                        <p class="text-lg text-stone-950 text-justify"><span className="font-bold">D H A R I N N I</span>, is a trust founded in 2018 in Kerala, with the intent to do our part for the earth we live on. We are a core team of young architects, planners, conservation enthusiasts and techies, supported by an advisory team of 
                                          Civil professionals.</p>
                        <a class="block w-full rounded-md border border-[#474033]  px-5 py-3 text-center text-base font-medium text-stone-900 shadow-md hover:bg-stone-700  hover:text-[#F8FAE5] sm:inline-block sm:w-auto " href="#up-event">Explore More Events →</a>
                      </div>
                      
                      <div className="flex justify-around items-center bg-[#43766C] lg:col-span-3 lg:col-start-9 py-20 lg:row-start-2">
                            <Link
                                  to="/contact"
                            >
                                <button className="relative btn-hover p-1 sm:p-2 text-[#43766C] bg-[#F8FAE5] border border-[#F8FAE5] hover:bg-[#43766C] hover:text-[#F8FAE5] text-xs md:text-lg rounded-md shadow-md font-semibold">DONATE NOW →</button>
                            </Link>
                      </div>
                      
                    </div>
                </div>
              </div> */}
              <div className="flex justify-center items-center flex-col p-10 w-full sm:flex-row">
                <div className="lg:w-[400px] flex justify-center md:pl-10 bg-transparent z-10 lg:h-[500px] h-[500px]">
                  <Carousel />
                  {/* <img className="w-[20rem] h-[30rem]" src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80" alt="" /> */}
                </div>
                <div className="lg:w-2/3 flex flex-col items-center lg:items-start gap-10 md:px-20 bg-transparent z-10 pt-10 sm:pt-0">
                    <p class="lg:text-lg text-stone-950 text-justify  mx-auto"><span className="font-bold">D H A R I N N I</span>, is a trust founded in 2018 in Kerala, with the intent to do our part for the earth we live on. We are a core team of young architects, planners, conservation enthusiasts and techies, supported by an advisory team of 
                                              Civil professionals.The aspiration is to contribute to conserving DHARINNI, this earth we live on, within our framework of understanding and expertise. We are able to encourage and motivate even a handful of people around us to understand the importance of collective intervention and contribute along with us, then we know we’re doing good.</p>
                    <Link
                        to="/contact"
                    >
                          <button className="btn-hover p-5 sm:p-8 text-[#F8FAE5] bg-[#43766C] border border-[#F8FAE5] hover:bg-[#2a4943] hover:text-[#F8FAE5] text-xs md:text-lg rounded-md shadow-md font-semibold ">DONATE NOW →</button>
                    </Link>  
                </div>   
                {/* <div className="absolute text-[15rem] font-bold text-[#F8FAE5] -z-0 drop-shadow-xl">
                  <h1>DHARINNI</h1>
                </div>                    */}
              </div>
              
            <Achievements />
        </div>
    
    )
}