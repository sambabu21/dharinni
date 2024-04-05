import Image from '../../Images/Carousel-images/image-1.jpg'

export default function Banner(){
    return(
        <div class="h-[70vh] relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 flex justify-center items-center">
            <div className='bg-gradient-to-tr from-[#8aeeeef3] to-[#edfa7c] opacity-20'>
                <img src={Image} alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
            </div>
            <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#8aeeeef3] to-[#edfa7c] opacity-20" ></div>
            </div>
            <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#8aeeeef3] to-[#edfa7c] opacity-20" ></div>
            </div>
            <div class="mx-auto max-w-2xl text-center">
                <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl ">About Us</h2>
                {/* <p class="mt-6 text-lg leading-8 text-gray-300">Dharinni {'>'} About Us</p> */}
            </div>
        </div>

    )
}