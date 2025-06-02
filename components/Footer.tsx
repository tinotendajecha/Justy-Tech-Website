import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="bg-[#00324D] text-white pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-300 mb-6">
              Your one-stop shop for premium designs, printing, and branding solutions in Chitungwiza and beyond.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-yellow-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-yellow-400 transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-4 font-poppins">Services</h3>
            <ul className="space-y-2">
              {['Printing Services', 'Logo Designing', 'Business Cards', 'Picture Framing', 'Online Marketing'].map((service) => (
                <li key={service}>
                  <Link 
                    href="#services" 
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-4 font-poppins">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Sajojo Complex, Zengeza 5<br />
                  Chitungwiza, Zimbabwe
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">0776 464 163</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">071 864 0002</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">info@justytech.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6 text-center text-gray-400 text-sm">
          <p>&copy; {year} Justy Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}