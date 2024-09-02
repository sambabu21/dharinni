import { people } from "../../Data"
import Reveal from "../../Animations/Reveal"
import { useState } from "react"  
import Modal from "./Modal"
import { Link } from "react-router-dom"

export default function Example() {

  const [open,setOpen] =  useState(false)
  const [details,setDetails] = useState({})

  const openModal=(person)=>{
    setDetails({...person})
    setOpen(true)
  }

  

  return (
      <div className="bg-stone-950 py-24 sm:py-32 relative">
      <Reveal>
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl ">Official Humans of DHARINNI</h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            We’re a dynamic group of individuals who are passionate about what we do.
          </p>
        </div>
        <h2 className="text-xl font-bold mt-6 tracking-tight text-yellow-200 sm:text-2xl">Core Team</h2>
        <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {people.map((person) => (
            <li key={person.name} className="rounded-2xl bg-stone-800 px-8 py-10 cursor-pointer" onClick={()=>openModal(person)}>
              <img className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-[#F8FAE5]">{person.name}</h3>
              <p className="text-sm leading-6 text-[#F8FAE5]">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a href={person.xUrl} className="text-[#F8FAE5] hover:text-gray-300">
                    <span className="sr-only">X</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={person.linkedinUrl} className="text-[#F8FAE5] hover:text-gray-300">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-bold mt-20 tracking-tight text-yellow-200 sm:text-2xl">Collaborators</h2>
        <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {people.map((person) => (
            <li key={person.name} className="rounded-2xl bg-stone-800 px-8 py-10 cursor-pointer" onClick={()=>openModal(person)}>
              <img className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-[#F8FAE5]">{person.name}</h3>
              <p className="text-sm leading-6 text-[#F8FAE5]">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a href={person.xUrl} className="text-[#F8FAE5] hover:text-gray-300">
                    <span className="sr-only">X</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={person.linkedinUrl} className="text-[#F8FAE5] hover:text-gray-300">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
      </Reveal>
     { open ? <Modal details={details} setOpen={setOpen} />: null }
      <div className="w-full flex justify-center items-center mt-20 sm:gap-10 px-10 smg:px-0">
        <h2 className="text-[#F8FAE5] text-lg">Want to be a part of DHARINNI ?</h2>
        <Link
             to="/contact"
        >
              <button className="btn-hover p-5 sm:p-8 text-[#F8FAE5] bg-[#43766C]   hover:bg-[#2a4943] hover:text-[#F8FAE5] text-xs md:text-lg rounded-md shadow-md font-semibold ">JOIN US →</button>
        </Link> 
      </div>  
    </div> 
  )
}
