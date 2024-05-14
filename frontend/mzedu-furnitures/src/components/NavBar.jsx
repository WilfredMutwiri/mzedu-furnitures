"use client";
import logo from '../images/logo.webp'
import React from 'react'
import { Button, Navbar } from "flowbite-react";
export default function NavBar() {
  return (
    <Navbar fluid rounded>
    <Navbar.Brand gradientDuoTone="pinkToOrange">
      <span className="text-pink-800 self-center whitespace-nowrap text-xl font-semibold dark:text-white">Mzedu Furnitures</span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Button gradientDuoTone="pinkToOrange">Sign In</Button>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="#" active>
        Home
      </Navbar.Link>
      <Navbar.Link href="#">About</Navbar.Link>
      <Navbar.Link href="#">Services</Navbar.Link>
      <Navbar.Link href="#">Pricing</Navbar.Link>
      <Navbar.Link href="#">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  )
}
