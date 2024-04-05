import Reveal from "../../Animations/Reveal"
// import { useState,useEffect } from "react"
import Image from '../../Images/dharinni-logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye,faBullseye } from "@fortawesome/free-solid-svg-icons"


export default function LogoSection(){
    // const [loading,setLoading]= useState(false)

    // useEffect(()=>{
    //     let timer1=setTimeout(()=>{
    //         setLoading(true)
    //     },2000)

    //     return ()=>{
    //         clearTimeout(timer1)
    //     }
    // },[])
    return (
         
          <div className="lg:flex ">
            <div className="bg-[#F8FAE5]  flex flex-col justify-center items-center lg:w-3/4 py-20">
              <Reveal>
              <p class=" text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl flex justify-center items-center ">Vision & Mission</p>

                <dl class=" max-w-xl space-y-8 text-base leading-7 text-stone-900 lg:max-w-none p-10 lg:w-3/4 mx-auto">
                  
                    <div class="relative pl-9 ">
                       <dt class="inline font-semibold text-stone-900 text-sm md:text-lg">
                        <FontAwesomeIcon icon={faEye} class="absolute left-1 top-1 h-5 w-5 text-[#43766C]"/>
                        Vision -
                         </dt>
                        <dd class="inline text-sm md:text-lg "> Revive the earth we live on through conservation, preservation & restoration of the natural & cultural heritage. </dd>
                     </div>
                       <div class="relative pl-9">
                        <dt class="inline font-semibold text-stone-900 text-sm md:text-lg">
                          <FontAwesomeIcon icon={faBullseye} class="absolute left-1 top-1 h-5 w-5 text-[#43766C]"/>
                         Mission -
                        </dt>
                       <dd class="inline text-sm md:text-lg"> Travel & lifestyle interventions to create awareness, respect and a sense of responsibility towards the importance and impact of Micro regional conservation in revival of the earth we live on. </dd>
                       </div>
                </dl>
                <p class="mt-2 text-xl font-bold tracking-tight text-stone-900 sm:text-2xl flex justify-center items-center ">Our Logo</p>

                <p class="mt-6 md:text-md leading-2 text-[#2C3134] px-10 lg:w-[60%] mx-auto  text-center">DHARINNI: "The Earth", in vernacular Indian Languages
                          ധരണി, in Malayalam, Kerala being the soil for our idea germination.
                          <br></br>
                          The Mango Abstract: "Mango Mania" by Ar.Laurie Baker, whose philosophies have laid our foundation. 
                          <br></br>
                          The Circle: abstract depiction of the Earth.
                </p>
                
              </Reveal>
            </div>
            
            <div className="lg:w-1/4 bg-stone-800 relative flex justify-center items-center p-10 lg:p-0">
            
              <img src={Image} alt="Product screenshot" class="lg:absolute -left-1/3 w-[15rem] xs:w-[20rem] mx-auto max-w-none  sm:w-[25rem]  rounded-full lg:border-[20px] lg:border-[#F8FAE5] bg-white "/>
            </div>
          </div>

    )

}


            // {
            //     loading ? <Reveal>
            //         <div className="flex  justify-center items-center w-1/2 py-10 mx-auto">
            //             <h2 className=" mt-6 text-lg leading-8 text-gray-600">DHARINNI: "The Earth", in vernacular Indian Languages
            //                 ധരണി, in Malayalam, Kerala being the soil for our idea germination.
            //                 The Mango Abstract: "Mango Mania" by Ar.Laurie Baker, whose philosophies have laid our foundation. 
            //                 The Circle: abstract depiction of the Earth.
            //             </h2>
            //         </div>
            //     </Reveal>:<Reveal>
            //         <div className="flex  justify-center items-center w-3/4 py-10 mx-auto">
            //             <img src={Image} alt="dharinni" className="w-80 h-80 rounded-full"/>
            //         </div>
            //     </Reveal>
            // }