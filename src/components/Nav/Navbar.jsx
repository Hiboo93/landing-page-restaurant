
import { Link } from 'react-router-dom'
import { DropdownLinks, NavLinks } from '../../constants/index.js'
import { FaCaretDown } from "react-icons/fa"
import { FaUser } from "react-icons/fa"

const Navbar = () => {
  return (
    <>
      <div className='bg-white shadow-md'>
        <div className='container flex justify-between py-4 sm:py-3'>
          {/* logo section */}
          <div className='font-bold text-3xl'>Logo</div>
          {/* Navlinks section */}
          <div>
            <ul className='flex items-center gap-10'>
              {
                NavLinks.map((link) => (
                  <li key={link.id}>
                    <Link className='inline-block hover:text-primary text-xl  font-roboto' to={link.link}>{link.name}</Link>
                  </li>
                ))
              }
              {/* simple dropdown and links */}
              <li className='cursor-pointer group '>
              <Link className='inline-block hover:text-primary text-xl  font-roboto' to="/#">
                <div className='flex items-center gap-[2px] py-2'>
                  Dropdown
                  <span>
                    <FaCaretDown className=' transition duration-300 group-hover:rotate-180' />
                  </span>
                </div>
              </Link>

              {/* Dropdown section */}
              <div className='absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2'>
                <ul>
                  {
                    DropdownLinks.map(({id, name, link}) => (
                      <li key={id}>
                    <Link className='text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20 ' to={link}>{name}</Link>
                  </li>
                    ))
                  }
                </ul>
              </div>
              </li>

              {/* Login button section */}
              <li>
                <button className='flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 transition duration-300 border-0'>
                  <FaUser />
                  My Account
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
