import React, { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';

import logo from '../image/logo-music.svg'

import homeNav from '../image/Appnav/Home.svg'
import playlistNav from '../image/Appnav/music-library-2.svg'
import radioNav from '../image/Appnav/radio.svg'
import videosNav from '../image/Appnav/video-horizontal.svg'

import frameNav from '../image/Personal/frame.svg'
import logoutNav from '../image/Personal/Logout.svg'

// import { links } from '../assets/constants';

// const NavLinks = () => (
//     <div>
//       {links.map()}
//     </div>
// )

const Sidebar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

    return (
        <div className="left mx-5">
          <div className="flex justify-center my-4">
            <img src={logo} className="" alt="logo-icon"/>
          </div>
          <div className="wrapper flex justify-center w-[68px] h-[290px] rounded-full bg-dark-alt mt-16 mb-5">
              <nav className="app-nav grid py-6 gap-8">
                  <div>
                    <img src={homeNav} className='w-[25px] h-[25px] hover:brightness-50 cursor-pointer' alt="home-nav" />
                  </div>
                  <div>
                    <img src={playlistNav} className='w-[25px] h-[25px] hover:brightness-50 cursor-pointer' alt="playlist-nav" />
                  </div>
                  <div>
                    <img src={radioNav} className='w-[25px] h-[25px] hover:brightness-50 cursor-pointer' alt="radio-nav" />
                  </div>
                  <div>
                    <img src={videosNav} className='w-[25px] h-[25px] hover:brightness-50 cursor-pointer' alt="videos-nav" />
                  </div>
              </nav>
          </div>
          <div className="wrapper flex justify-center w-[68px] h-[150px] rounded-full bg-dark-alt">
              <nav className="app-nav py-6 grid gap-8">
                  <div className="flex align-center">
                    <img src={frameNav} className='w-[25px] h-[25px] hover:brightness-50 cursor-pointer' alt="frame-nav" />
                  </div>
                  <div className="flex align-center">
                    <img src={logoutNav} className='pl-1 w-[25px] h-[25px] hover:brightness-50 cursor-pointer' alt="logout-nav" />
                  </div>
              </nav>
          </div>
          {/* <div>
            {mobileMenuOpen ? (
                <RiCloseLine className="w-6 h-6 text-black mr-2" onClick={() => setMobileMenuOpen(false)} />
            ) : <HiOutlineMenu className="w-6 h-6 text-black mr-2" onClick={() => setMobileMenuOpen(true)} />} 
          </div> */}
        </div>
    )
}

export default Sidebar;
