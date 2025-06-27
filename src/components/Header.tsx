import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Heart, Activity } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Rehabilitation', href: '/rehabilitation' },
    { name: 'Gynecology & Aesthetics', href: '/gynecology-aesthetics' },
    { name: 'About Us', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="navbar bg-base-100/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </div>
          {isMenuOpen && (
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={location.pathname === item.href ? 'active' : ''}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn btn-primary btn-sm mt-2"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          )}
        </div>
        
        <Link to="/" className="btn btn-ghost text-xl">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-primary" />
            <Heart className="h-6 w-6 text-secondary -ml-1" />
          </div>
          <div className="font-bold">
            <span className="text-primary">Vita</span>
            <span className="text-secondary">Care</span>
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={location.pathname === item.href ? 'active' : ''}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </button>

        <Link
          to="/contact"
          className="btn btn-primary hidden lg:inline-flex"
        >
          Book Appointment
        </Link>
      </div>
    </header>
  );
};

export default Header;