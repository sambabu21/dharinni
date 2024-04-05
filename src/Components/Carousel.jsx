import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Image1 from "../Images/Carousel-images/image-4.jpg"
import Image2 from "../Images/Carousel-images/image-5.jpg"
import Image3 from "../Images/Carousel-images/image-6.jpg"
import Image4 from "../Images/Carousel-images/image-7.jpg"
import Reveal from "../Animations/Reveal"

export default function Carousel(){
    const [imageIndex,setImageIndex] = useState(0)

    const photos=[
        Image3,Image1,Image2,Image4
    ]

    function showNextImage(){
        setImageIndex(prevIndex=>{
            if(prevIndex===photos.length-1) return 0
            return prevIndex+1
        })
    }
    function showPrevImage(){
        setImageIndex(prevIndex=>{
            if(prevIndex===0) return photos.length -1
            return prevIndex-1
        })
    }

    useEffect(()=>{
        const timer=setTimeout(()=>{
            setImageIndex(prevIndex=>{
                if(prevIndex===photos.length-1) return 0
                return prevIndex+1
            })
        },3000)
        
    },[imageIndex])


    return (
        <div className=" bg-gradient-to-t from-[#505043bb] via-[#505043bb] to-[#505043bb]">
            <div className="flex h-full relative transition duration-400 ease-in">
                {
                    photos.map((url,i)=>{
                        return <img 
                                    key={i} 
                                    src={url} 
                                    className={imageIndex===i?"min-w-full object-cover block opacity-70 select-none":"min-w-full object-cover block hidden"}
                                    alt={i} />
                    })
                }
                {/* <div className="absolute top-1/2 ">
                    <Reveal delay={0.5}>
                        <h1 className="text-[#315C62] text-9xl font-extrabold">DHARINNI</h1>
                    </Reveal>
                </div> */}

                <FontAwesomeIcon icon={faArrowRight} className="icon top-1/2 right-0 text-white" onClick={showNextImage}/>
                <FontAwesomeIcon icon={faArrowLeft} className="icon top-1/2 left-0 text-white" onClick={showPrevImage}/>
            </div>
            
            
            
        </div>
    )
}