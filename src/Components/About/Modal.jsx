import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

export default function Modal({ details,setOpen }){
    return (
        <div className="w-screen h-screen bg-[#2C3134] bg-opacity-70 z-40 flex justify-center items-center fixed inset-0">
            <div className="sm:w-1/2 h-full w-full sm:h-fit bg-[#F8FAE5] relative rounded-md">
                <FontAwesomeIcon icon={faXmark} className="w-8 h-8 absolute right-5 top-5 cursor-pointer" onClick={()=>{setOpen(false)}}/>
                <div>
                    <img src={details.imageUrl} className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56 mt-10"/>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="my-6 text-xs md:text-lg font-semibold leading-7 tracking-tight ">{details.name}</h1>
                        <p className="px-10 mb-10 text-xs md:text-base">{details.comment}</p>
                    </div>
                </div>
            </div>
        </div>
        )
}