import React, { useState } from 'react'
import { Nav, NavItem } from 'UI'
import {
  ShoppingIcon,
  ProfileIcon,
  CartIcon,
  BurgerIcon
  //SignUpIcon
} from 'UI/Icons'
import { Link } from 'react-router-dom'

const Header = () => {
  const [navToggle, setNavToggle] = useState(false)

  const navLinks = (
    <>
      <Link to={'/'}>
        <NavItem className="cursor-pointer hover:bg-neutral-100 rounded-lg transition-colors ease-in-out duration-150">
          Home
        </NavItem>
      </Link>
      <Link to={'/products'}>
        <NavItem className="cursor-pointer hover:bg-neutral-100 rounded-lg transition-colors ease-in-out duration-150 ">
          Products
        </NavItem>
      </Link>
      <Link to={'/how-to'}>
        <NavItem className="cursor-pointer hover:bg-neutral-100 rounded-lg transition-colors ease-in-out duration-150 ">
          How it works
        </NavItem>
      </Link>
    </>
  )

  const toggleNav = () => {
    setNavToggle(!navToggle)
  }

  const navMenuClass =
    'w-full fixed t-0 l-0 sm:hidden flex overflow-hidden bg-white mt-16 px-12 shadow-lg'

  return (
    <div className="w-full flex flex-col bg-white">
      <div className="w-full flex justify-center max-w-screen-xl mx-auto ">
        <Nav>
          <NavItem brand brandIcon={ShoppingIcon} />
          <div className="h-full hidden sm:flex flex-grow justify-center items-center">
            {navLinks}
          </div>
          <Link to="/cart">
            <NavItem
              className="bg-neutral-300 cursor-pointer"
              brand
              brandIcon={CartIcon}
            />
          </Link>
          <Link to="./profile">
            <NavItem
              className="bg-neutral-300 cursor-pointer"
              brand
              brandIcon={ProfileIcon}
            />
          </Link>
          {/* <NavItem
            className="bg-neutral-300 cursor-pointer"
            brand
            brandIcon={SignUpIcon}
          /> */}
          <NavItem
            className="flex sm:hidden ml-auto text-neutral-100 cursor-pointer"
            onClick={toggleNav}
          >
            <BurgerIcon className="fill-current w-6 h-6" />
          </NavItem>
        </Nav>
        <div className={`${navMenuClass} ${navToggle ? 'h-50' : 'h-0'}`}>
          <div className="w-full flex flex-col my-4">{navLinks}</div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-primary-800">
        <div className="w-full flex flex-col max-w-screen-md py-8 px-5  space-y-4">
          <h1 className="text-white text-center text-2xl font-bold">
            e-Market is the place for purchasing from everywhere
          </h1>
          <p className="text-primary-100 text-lg text-center">
            The platform is for making convenient purchasing of electronic goods
            as well as the simplifying the transportation with for distribution
            system of each product with great care.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
