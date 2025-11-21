
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleNotImplemented = () => {
    toast({
      title: "Coming Soon!",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <footer className="bg-brand-header-footer-bg text-brand-text font-minion-pro">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 flex flex-col items-start">
            <Link to="/" className="flex items-center mb-2">
              <img src="https://horizons-cdn.hostinger.com/2159b5b2-c5e9-475c-b436-56f7fa5f20f0/mah-logo-cream-png-T0ute.png" alt="Minnetonka Animal Hospital Logo" className="h-48 object-contain" />
            </Link>
            <p className="text-sm text-brand-text">Personalized, compassionate veterinary care.</p>
          </div>

          <div>
            <p className="font-semibold text-brand-text mb-4">Quick Links</p>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-brand-highlight transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-highlight transition-colors">Services</Link></li>
              <li><Link to="/about/meet-the-team" className="hover:text-brand-highlight transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-brand-highlight transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-brand-text mb-4">Contact Us</p>
            <ul className="space-y-2 text-sm">
              <li>17408 Minnetonka Blvd, Minnetonka, MN 55345</li>
              <li><a href="tel:+19524731239" className="hover:text-brand-highlight transition-colors">952.473.1239</a></li>
              <li><a href="mailto:info@minnetonkaanimal.com" className="hover:text-brand-highlight transition-colors">info@minnetonkaanimal.com</a></li>
              <li className="pt-2 font-semibold">Hours:</li>
              <li>Monday – Friday: 8 a.m. – 5 p.m.</li>
              <li>Saturday: Closed</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-brand-text mb-4">Follow Us</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/MinnetonkaAnimalHospital/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-highlight transition-colors">
                <Facebook size={24} className="text-brand-text" />
              </a>
              <a href="https://www.instagram.com/minnetonkaah/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-highlight transition-colors">
                <Instagram size={24} className="text-brand-text" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-accent flex flex-wrap justify-center items-center gap-6">
          <img src="https://horizons-cdn.hostinger.com/2159b5b2-c5e9-475c-b436-56f7fa5f20f0/9d35ace9afa4d44c640d13efcb447d93.png" alt="Cat Friendly Practice certification" className="h-11 sm:h-16 object-contain" />
          <img src="https://horizons-cdn.hostinger.com/2159b5b2-c5e9-475c-b436-56f7fa5f20f0/31c82991dd040c99b5d5abc8d02fcdbe.png" alt="Lake Minnetonka Magazine Best of 2025 Winner" className="h-20 sm:h-28 object-contain" />
          <img alt="American Association of Feline Practitioners logo" className="h-11 sm:h-16 object-contain" src="https://horizons-cdn.hostinger.com/2159b5b2-c5e9-475c-b436-56f7fa5f20f0/aafp-logo-55PIU.png" />
        </div>

        <div className="mt-8 border-t border-brand-accent pt-8 text-center text-sm text-brand-text">
          <p>&copy; {new Date().getFullYear()} Minnetonka Animal Hospital. All Rights Reserved.</p>
          <p className="mt-2">
            Made with ❤️ by <a href="https://marketingcar.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-highlight transition-colors underline">Marketing Car</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
