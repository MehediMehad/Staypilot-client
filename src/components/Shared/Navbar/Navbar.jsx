import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
// import avatarImg from '../../../assets/images/placeholder.jpg'

const Navbar = () => {
  // const { user, logOut } = useAuth()
  const { logOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const user = {
    name: "MMM"
  }

  return (
    <div className='fixed w-full bg-white z-[110] shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <div className='flex flex-row container items-center justify-between gap-3 md:gap-0'>
          {/* Logo */}
          <div className="">
            <Link to='/' className='flex gap-x-2'>
              <img
                // className='hidden md:block'
                src='https://i.postimg.cc/WpX8Pmz8/key-card.png'
                alt='logo'
                width='40'
                height='30'
              />
              <span className="text-[#ff7e23] font-bold mt-2 text-3xl">
                Staypilot
              </span>
            </Link>
          </div>
          {/* Dropdown Menu */}
          <div className="relative">
            <div className="flex flex-row items-center gap-3">
              <div className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                onClick={() => setIsOpen(!isOpen)}>
                <AiOutlineMenu />
                <div className="hidden md:block">
                  <img
                    className="rounded-full"
                    src={user?.photoURL || "https://i.postimg.cc/k4Fw1xz3/user.png"}
                    alt="profile"
                    height="30"
                    width="30"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
