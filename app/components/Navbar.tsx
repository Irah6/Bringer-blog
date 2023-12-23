import Link from "next/link";
import Image from 'next/image';
import bringer from '../../public/bringer.svg';
export default function Navbar() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src={bringer} alt="Bringer logo" className="mr-2" priority/>
          </Link>
          <h1 className="text-2xl font-medium">
            <span className="text-[#000000] font-bold">Bringer</span> <span className="text-[#080808]">Blog</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
