import { Link } from 'react-router-dom';
import { FiMail, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-accent-500 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🌍</span>
              <span className="text-xl font-bold">RootFinder</span>
            </div>
            <p className="text-gray-300 text-sm">
              Find hotels, cafes & restaurants owned by your community worldwide.
            </p>
          </div>

          {/* Directory */}
          <div>
            <h3 className="font-semibold mb-4">Directory</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/directory?category=hotel" className="hover:text-white">
                  Hotels
                </Link>
              </li>
              <li>
                <Link to="/directory?category=cafe" className="hover:text-white">
                  Cafes
                </Link>
              </li>
              <li>
                <Link to="/directory?category=restaurant" className="hover:text-white">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link to="/directory" className="hover:text-white">
                  All Businesses
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-white">
                  List Your Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-300 mb-3">
              Get notified when we launch in your city
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-l-lg text-gray-900 text-sm"
              />
              <button className="bg-secondary-500 px-4 py-2 rounded-r-lg hover:bg-secondary-600">
                <FiMail />
              </button>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-300"><FiFacebook size={20} /></a>
              <a href="#" className="hover:text-gray-300"><FiTwitter size={20} /></a>
              <a href="#" className="hover:text-gray-300"><FiInstagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} RootFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
