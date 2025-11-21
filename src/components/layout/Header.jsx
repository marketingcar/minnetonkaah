import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
const navLinks = [{
  name: 'Home',
  path: '/'
}, {
  name: 'About Us',
  path: '/about',
  subLinks: [{
    name: 'About Minnetonka Animal Hospital',
    path: '/about'
  }, {
    name: 'Meet the Team',
    path: '/about/meet-the-team'
  }, {
    name: 'Pet Resources',
    path: '/about/pet-resources'
  }]
}, {
  name: 'Services',
  path: '/services',
  subLinks: [{
    name: 'All Services',
    path: '/services'
  }, {
    name: 'Integrative Medicine',
    path: '/services/integrative-medicine'
  }]
}, {
  name: 'New Clients',
  path: '/new-clients'
},
{
    name: 'Contact',
    path: '/contact'
}];
const NavItem = ({
  link,
  closeMobileMenu
}) => {
  if (link.subLinks) {
    return <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="flex items-center text-sm font-semibold transition-colors text-brand-text hover:text-brand-accent focus:outline-none">
                        {link.name}
                        <ChevronDown className="relative top-[1px] ml-1 h-4 w-4 transition duration-200" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {link.subLinks.map(subLink => <DropdownMenuItem key={subLink.name} asChild>
                            <Link to={subLink.path}>{subLink.name}</Link>
                        </DropdownMenuItem>)}
                </DropdownMenuContent>
            </DropdownMenu>;
  }
  return <NavLink to={link.path} className={({
    isActive
  }) => `text-sm font-semibold transition-colors hover:text-brand-accent ${isActive ? 'text-brand-accent font-semibold' : 'text-brand-text'}`}>
            {link.name}
        </NavLink>;
};
const MobileNavItem = ({
  link,
  closeMobileMenu
}) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const handleLinkClick = e => {
    if (link.subLinks) {
      e.preventDefault();
      setIsSubMenuOpen(!isSubMenuOpen);
    } else {
      closeMobileMenu();
    }
  };
  return <div className="w-full text-center">
             <NavLink to={link.path} onClick={handleLinkClick} className="flex justify-center items-center text-lg font-semibold transition-colors hover:text-brand-accent text-brand-text w-full">
                {link.name}
                {link.subLinks && <ChevronDown className={`ml-1 h-5 w-5 transition-transform ${isSubMenuOpen ? 'rotate-180' : ''}`} />}
            </NavLink>
            <AnimatePresence>
            {isSubMenuOpen && link.subLinks && <motion.div initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} className="overflow-hidden flex flex-col items-center space-y-2 mt-2">
                    <nav className="flex flex-col items-center space-y-4 p-6 font-minion-pro">
                    {link.subLinks.map(subLink => <Link key={subLink.name} to={subLink.path} onClick={closeMobileMenu} className="text-md text-brand-text/80 hover:text-brand-accent">
                            {subLink.name}
                        </Link>)}
                    </nav>
                </motion.div>}
            </AnimatePresence>
        </div>;
};
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: "-100%"
    },
    open: {
      opacity: 1,
      y: "0%"
    }
  };
  return <header className="bg-brand-background sticky top-0 z-50 shadow-md font-minion-pro">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center space-x-1 text-brand-text hover:text-brand-text/80 transition-colors">
                        <img src="https://horizons-cdn.hostinger.com/2159b5b2-c5e9-475c-b436-56f7fa5f20f0/fe20fe76ef6589bc7043484a2ba96eb9.png" alt="Minnetonka Animal Hospital Paw Print Logo" className="h-10 w-10 object-contain" />
                        <span className="font-semibold text-xl">MINNETONKA ANIMAL HOSPITAL</span>
                    </Link>

                    <nav className="hidden lg:flex items-center space-x-6">
                        {navLinks.map(link => <NavItem key={link.name} link={link} />)}
                    </nav>

                    <div className="hidden lg:flex items-center">
                        <Button asChild>
                            <a href="https://olsr3.covetrus.com/#?AID=wwiFdl240LCLEGaU8EtCKNBCK&cl=1" target="_blank" rel="noopener noreferrer">Make an Appointment</a>
                        </Button>
                    </div>

                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-brand-text">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && <motion.div variants={mobileMenuVariants} initial="closed" animate="open" exit="closed" transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30
      }} className="lg:hidden absolute top-full left-0 w-full bg-brand-background shadow-lg">
                        <nav className="flex flex-col items-center space-y-4 p-6">
                            {navLinks.map(link => <MobileNavItem key={link.name} link={link} closeMobileMenu={() => setIsOpen(false)} />)}
                            <Button asChild size="lg" className="w-full mt-4">
                                <a href="https://olsr3.covetrus.com/#?AID=wwiFdl240LCLEGaU8EtCKNBCK&cl=1" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Make an Appointment</a>
                            </Button>
                        </nav>
                    </motion.div>}
            </AnimatePresence>
        </header>;
};
export default Header;