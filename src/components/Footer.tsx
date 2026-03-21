import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-royal-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-10 w-10 text-white" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Nu Mu Sigma Chapter</span>
                <span className="text-sm text-royal-blue-100">Phi Beta Sigma Fraternity, Incorporated</span>
              </div>
            </div>
            <p className="text-royal-blue-100 mb-2">
              Fort Myers, Florida
            </p>
            <p className="text-royal-blue-100 max-w-md mb-4">
              Serving Southwest Florida with Brotherhood, Scholarship, Leadership, and Service.
            </p>
            <p className="text-white font-semibold italic mb-6">
              "Culture for Service and Service for Humanity"
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-royal-blue-200 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-royal-blue-200 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-royal-blue-200 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-royal-blue-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-royal-blue-100 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/programs" className="text-royal-blue-100 hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/events" className="text-royal-blue-100 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/gallery" className="text-royal-blue-100 hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link to="/support" className="text-royal-blue-100 hover:text-white transition-colors">Partner With Us</Link></li>
              <li><Link to="/support" className="text-royal-blue-100 hover:text-white transition-colors">Sponsorship</Link></li>
              <li><Link to="/contact" className="text-royal-blue-100 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-royal-blue-700 mt-12 pt-8 text-center text-royal-blue-100 text-sm">
          <p>&copy; {new Date().getFullYear()} Nu Mu Sigma Chapter, Phi Beta Sigma Fraternity, Incorporated. All rights reserved.</p>
          <p className="mt-2">Fort Myers, Florida | Serving Southwest Florida</p>
          <p className="mt-1 text-white italic">"Culture for Service and Service for Humanity"</p>
        </div>
      </div>
    </footer>
  );
}
