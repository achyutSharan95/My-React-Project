import { useState } from 'react'
import Images from '../../assets/Media'
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className='p-3 bg-[#F7EFE3] h-screen w-60 sideBar'>
        <div className={`sideBar_header flex justify-between items-center px-3 py-2 ${isOpen ? 'show' : 'hide'}`}>
          <img src={Images.PiLogo} alt="Logo"  />
          <button className='cursor-pointer' onClick={handleToggle}>
          <img src={Images.SideBarToggle} alt="sideBar Toggle" />
          </button>
        </div>
      </div>
    </>
  )
}

export default SideBar
