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

            {isOpen && (
              <div className="absolute rounded-xl shadow-md w-[350px] z-50 bg-[#f2f2f2] overflow-hidden right-0 top-12 text-sm text-gray-700">
                {user ? (
                  <>
                    <div className="flex flex-col p-4 items-center">
                      <img
                        className="rounded-full w-12 h-12 mb-2"
                        src={user.photoURL || "https://i.postimg.cc/k4Fw1xz3/user.png"}
                        alt="User Avatar"
                      />
                      <div className="text-center font-semibold">
                        {user.name || "User Name"}
                      </div>
                      <Link
                        to="/profile"
                        className="mt-2 bg-gradient-to-r from-[#ff7e23] to-secondary px-4 py-1 text-center rounded-full text-white font-medium"
                      >
                        Host User
                      </Link>
                    </div>

                    <div className="flex flex-col py-2 border-t border-[#ff7e23]">
                      <Link to="/my-classes" className="px-4 py-2 hover:bg-primary/50 duration-150">My Classes</Link>
                      <Link to="/bookmark" className="px-4 py-2 hover:bg-primary/50 duration-150">Bookmark</Link>
                      <Link to="/helpdesk" className="px-4 py-2 hover:bg-primary/50 duration-150">Helpdesk <span className="text-pink-400">New*</span></Link>
                      <Link to="/chat-assistant" className="px-4 py-2 hover:bg-primary/50 duration-150">Ersa Chat Assistant <span className="text-pink-400">New*</span></Link>
                      <Link to="/dashboard" className="px-4 py-2 hover:bg-primary/50 duration-150">Actionable Dashboard <span className="text-purple-400">Beta*</span></Link>
                      <Link to="/leaderboard" className="px-4 py-2 hover:bg-primary/50 duration-150">Leaderboard</Link>
                      <Link to="/announcement" className="px-4 py-2 hover:bg-primary/50 duration-150">Announcement</Link>
                      <Link to="/conceptual-sessions" className="px-4 py-2 hover:bg-primary/50 duration-150">Conceptual Sessions</Link>
                      <Link to="/settings" className="px-4 py-2 hover:bg-primary/50 duration-150">Settings</Link>
                    </div>

                    <div className="py-2 border-t border-[#ff7e23]">
                      <div onClick={logOut} className="px-4 py-2 text-pink-500 hover:bg-primary/50 duration-150 cursor-pointer">
                        Logout
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col py-2">
                    <Link to="/login" className="px-4 py-2 hover:bg-primary/50 duration-150">Login</Link>
                    <Link to="/signup" className="px-4 py-2 hover:bg-primary/50 duration-150">Sign Up</Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
