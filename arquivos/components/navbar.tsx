"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo-dark.svg" alt="LWL Solutions Logo" width={150} height={80} className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-gray-800 hover:text-gray-600 font-medium">
            Quem Somos
          </Link>
          <Link href="#projects" className="text-gray-800 hover:text-gray-600 font-medium">
            Projetos
          </Link>
          <Link href="#contact" className="text-gray-800 hover:text-gray-600 font-medium">
            Contato
          </Link>
          <Button className="bg-gray-900 hover:bg-gray-700">Fale Conosco</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-gray-800 hover:text-gray-600 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Quem Somos
            </Link>
            <Link
              href="#projects"
              className="text-gray-800 hover:text-gray-600 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projetos
            </Link>
            <Link
              href="#contact"
              className="text-gray-800 hover:text-gray-600 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </Link>
            <Button className="bg-gray-900 hover:bg-gray-700 w-full">Fale Conosco</Button>
          </div>
        </div>
      )}
    </header>
  )
}

