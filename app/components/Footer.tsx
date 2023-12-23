import React from 'react'

function Footer() {
  return (
    <div className="flex  items-center bg-black text-center py-5">
      <div className="w-full pt-9">
        <div className='mb-9 flex items-center justify-around gap:4 '>
        <div className='text-2xl  font-Figtree font-bold  text-white '>
            <a href="https://bringerapp.com">Bringer</a>
        </div>
        <div className='text-lg hidden sm:block font-Figtree  text-white '>
            The Professional&apos; Choice
        </div>
        <div className=" flex gap-3 ">
        <a href="https://bringerapp.com" >
            <img src="./bringer.svg" alt="Instagram Icon" className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com/bringer.ai/" >
            <img src="./LogoInstagram.svg" alt="Instagram Icon" className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/company/bringer-ai/" >
            <img src="./LogoLinkedIn.svg" alt="LinkedIn Icon" className="h-5 w-5" />
          </a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer