import Reveal from '../../Animations/Reveal'
import Image from '../../Images/Kerala-banner.jpg'

export default function Banner(){
    return(
        <div class="carousel h-screen relative isolate overflow-hidden bg-stone-800 px-6 py-24 sm:py-32 lg:px-8 flex justify-center items-center">
            <div className=''>
                <img src={Image} alt="" class="absolute inset-0 -z-10 h-full w-full object-cover parallax-bg " />
            </div>
            
                <div class="mx-auto w-1/2  md:absolute md:left-5 md:bottom-5 lg:left-10 lg:bottom-10">
                    <Reveal delay={0.5}>
                        <h2 class="sm:text-6xl md:text-8xl lg:text-8xl font-medium tracking-widest text-white text-4xl shadow-xl ">DHARINNI</h2>
                    </Reveal>
                    <Reveal delay={0.5}>
                        <p className='text-white text-md  mt-10 font-semibold shadow-xl text-justify italic'>“Be the change you want to see in the world” - Mahatma Gandhi </p>
                    </Reveal>
                </div>
           
        </div>

    )
}