import React from 'react'


const Navbar = () => {
    const navItems = [
      {
        title: "Home",
      },
      {
        title: "About",
      },
      {
        title: "Skills",
      },
      {
        title: "Projects",
      },
      {
        title: "Contact",
      },
    ];
  return (
    <div className='flex h-20 gap-5 items-center p-5 '>
        {
            navItems.map( (navItem,index) => (
                <h1
                    className='cursor-pointer' 
                    key={index}>
                        {navItem.title}
                </h1>
            ))
        }
    </div>
  )
}

export default Navbar