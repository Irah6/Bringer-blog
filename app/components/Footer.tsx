import Image from 'next/image'
import bringer from '../../public/bringer.svg'
import instagram from '../../public/LogoInstagram.svg'
import linkedin from '../../public/LogoLinkedIn.svg'
function Footer() {
  return (
    <div className="flex  items-center bg-black text-center py-5 mt-2">
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
            <Image src={bringer} alt="Instagram Icon" className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com/bringer.ai/" >
            <Image src={instagram} alt="Instagram Icon" className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/company/bringer-ai/" >
            <Image src={linkedin} alt="LinkedIn Icon" className="h-5 w-5" />
          </a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer