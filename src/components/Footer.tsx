import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Heart, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="footer p-10 max-w-7xl mx-auto">
        {/* Brand */}
        <aside>
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-primary" />
              <Heart className="h-6 w-6 text-secondary -ml-1" />
            </div>
            <div className="text-xl font-bold">
              <span className="text-primary">Vita</span>
              <span className="text-secondary">Care</span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Comprehensive rehabilitation services and women's health care in one trusted location.
          </p>
        </aside>

        {/* Services */}
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link to="/rehabilitation" className="link link-hover">Physical Therapy</Link>
          <Link to="/rehabilitation" className="link link-hover">Occupational Therapy</Link>
          <Link to="/gynecology-aesthetics" className="link link-hover">Gynecology</Link>
          <Link to="/gynecology-aesthetics" className="link link-hover">Aesthetic Treatments</Link>
        </nav>

        {/* Quick Links */}
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <Link to="/about" className="link link-hover">About Us</Link>
          <Link to="/testimonials" className="link link-hover">Testimonials</Link>
          <Link to="/faqs" className="link link-hover">FAQs</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
        </nav>

        {/* Contact Info */}
        <nav>
          <h6 className="footer-title">Contact Info</h6>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>info@vitacare.com</span>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin className="h-4 w-4 text-primary mt-0.5" />
              <span>123 Wellness Drive<br />Health City, HC 12345</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Mon-Fri: 8AM-6PM</span>
            </div>
          </div>
        </nav>
      </div>

      <div className="footer footer-center p-4 border-t border-base-300">
        <aside>
          <p>© 2025 VitaCare Center. All rights reserved. | Privacy Policy | Terms of Service</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;