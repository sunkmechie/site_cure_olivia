import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['(+91) 9494761413', 'Emergency: (+91) 9100317544'],
      color: 'text-primary'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['harsha.rahayp@gmail.com', 'appointments@cure.com'],
      color: 'text-secondary'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Opp Vishaka Diary Farm, Sarpavaram Junction', 'Kakinada, 533003'],
      color: 'text-accent'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      color: 'text-warning'
    }
  ];

  const services = [
    'Physical Therapy',
    'Occupational Therapy',
    'Neurological Rehabilitation',
    'Gynecological Care',
    'Aesthetic Treatments',
    'Women\'s Health Consultation',
    'General Inquiry'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-[50vh] bg-gradient-to-br from-base-200 to-base-300">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-xl mb-8 leading-relaxed opacity-80">
              Ready to start your journey to better health? We're here to help you every step of the way. Contact us to schedule your consultation or learn more about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="card bg-base-200 shadow-xl text-center">
                <div className="card-body">
                  <info.icon className={`h-12 w-12 ${info.color} mx-auto mb-4`} />
                  <h3 className="card-title justify-center text-xl mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="opacity-80">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Send Us a Message
              </h2>
              
              {isSubmitted ? (
                <div className="alert alert-success">
                  <CheckCircle className="h-6 w-6" />
                  <div>
                    <h3 className="font-bold">Message Sent Successfully!</h3>
                    <div className="text-xs">Thank you for contacting us. We'll get back to you within 24 hours.</div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">First Name *</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Last Name *</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="input input-bordered"
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email Address *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Service of Interest</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="select select-bordered"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Message *</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="textarea textarea-bordered"
                      placeholder="Tell us about your needs, questions, or how we can help you..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Visit Our Facility
              </h2>
              
              {/* Map Placeholder */}
              <div className="mockup-window border bg-base-300 mb-8">
                <div className="flex justify-center bg-base-200 h-64">
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="opacity-80">Interactive Map</p>
                      <p className="text-sm opacity-60">123 Wellness Drive, Health City, HC 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Directions & Parking */}
              <div className="card bg-base-100 shadow-xl mb-6">
                <div className="card-body">
                  <h3 className="card-title text-xl mb-4">
                    Directions & Parking
                  </h3>
                  <ul className="space-y-3 opacity-80">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                      Free parking available on-site
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                      Wheelchair accessible entrance and facilities
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                      Located near public transportation
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                      Easy access from major highways
                    </li>
                  </ul>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="alert alert-error">
                <div>
                  <h3 className="font-bold">Emergency Contact</h3>
                  <div className="text-xs">
                    For medical emergencies, please call 911 immediately.<br />
                    For urgent care needs: <span className="font-semibold">(555) 123-4568</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-16 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Other Ways to Connect
            </h2>
            <p className="text-xl opacity-80">
              Choose the communication method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-primary/10 shadow-xl text-center">
              <div className="card-body">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="card-title justify-center text-xl mb-3">
                  Call Us
                </h3>
                <p className="opacity-80 mb-4">
                  Speak directly with our staff to schedule appointments or ask questions.
                </p>
                <a href="tel:+15551234567" className="btn btn-primary">
                  (555) 123-4567
                </a>
              </div>
            </div>

            <div className="card bg-secondary/10 shadow-xl text-center">
              <div className="card-body">
                <Mail className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="card-title justify-center text-xl mb-3">
                  Email Us
                </h3>
                <p className="opacity-80 mb-4">
                  Send us a detailed message and we'll respond within 24 hours.
                </p>
                <a href="mailto:info@vitacare.com" className="btn btn-secondary">
                  info@vitacare.com
                </a>
              </div>
            </div>

            <div className="card bg-accent/10 shadow-xl text-center">
              <div className="card-body">
                <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="card-title justify-center text-xl mb-3">
                  Online Booking
                </h3>
                <p className="opacity-80 mb-4">
                  Schedule your appointment online at your convenience.
                </p>
                <button className="btn btn-accent">
                  Book Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
