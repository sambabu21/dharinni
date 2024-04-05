import { useRef,useState } from "react";


export default function Form(){
    const form = useRef();
    

    return (
        <div className="pb-20 w-full bg-[#F8FAE5] flex justify-center items-center flex-col">
            <h1 className=" pt-10 text-stone-900 font-bold text-lg md:text-2xl helvetica">Make a Difference</h1>
            <p className="text-sm text-stone-900  pt-5 pb-10 mx-auto md:text-lg md:pb-0">Donate to our cause or make a difference by being a part of us. Fill in the form below and we'll reach out to you.</p>
            <form action="#" ref={form} method="POST" className="mx-auto  max-w-xl sm:mt-10" >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-stone-800 ">
                    First name
                    </label>
                    <div className="mt-2.5">
                    <input
                        type="text"
                        name="firstName"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full bg-[#F8FAE5] rounded-md border border-stone-700 px-3.5 py-2 text-stone-800  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#474033] sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-stone-800 ">
                    Last name
                    </label>
                    <div className="mt-2.5">
                    <input
                        type="text"
                        name="lastName"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full bg-[#F8FAE5] rounded-md border border-stone-700 px-3.5 py-2 text-stone-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#474033] sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                
                <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-stone-800 ">
                    Email
                    </label>
                    <div className="mt-2.5">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full bg-[#F8FAE5] rounded-md border border-stone-700 px-3.5 py-2 text-stone-800  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#474033] sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="country" className="block text-sm font-semibold leading-6 text-stone-800 ">
                        Donate/Be a part
                    </label>
                    <div className="mt-2">
                        <select
                        id="country"
                        name="country"
                        
                        autoComplete="country-name"
                        className="block w-full bg-[#F8FAE5] rounded-md border border-stone-700 px-3.5 py-2 text-stone-800  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#474033] sm:text-sm sm:leading-6"
                        >
                        <option>Donate</option>
                        <option>Join Us</option>
                        
                        </select>
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="country" className="block text-sm font-semibold leading-6 text-stone-800 ">
                        Role (if you selected join us)
                    </label>
                    <div className="mt-2">
                        <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="block w-full bg-[#F8FAE5] rounded-md border border-stone-700 px-3.5 py-2 text-stone-800  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#474033] sm:text-sm sm:leading-6"
                        >
                        <option>Core Member</option>
                        <option>Collaborator</option>
                        
                        </select>
                    </div>
                </div>
                
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-stone-800 ">
                    Message
                    </label>
                    <div className="mt-2.5">
                    <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full bg-[#F8FAE5] rounded-md border border-stone-700 px-3.5 py-2 text-stone-800  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#474033] sm:text-sm sm:leading-6"
                        placeholder=""
                    />
                    </div>
                </div>
                
                </div>
                <div className="mt-10">
                <button
                    type="submit"
                    className="block w-full rounded-md bg-[#43766C] px-3.5 py-2.5 text-center text-sm font-semibold text-[#F8FAE5]  shadow-sm hover:bg-[#2b4944] hover:text-[#f4f8cd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#474033]"
                >
                    Let's chat
                </button>
                </div>
            </form>
        </div>
    )
}