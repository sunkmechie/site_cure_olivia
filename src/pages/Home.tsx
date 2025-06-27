import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Activity, Users, Award, Clock, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Activity,
      title: 'Comprehensive Rehabilitation',
      description: 'Advanced physical and occupational therapy services for optimal recovery.',
      color: 'text-primary'
    },
    {
      icon: Heart,
      title: 'Women\'s Health & Aesthetics',
      description: 'Complete gynecological care and aesthetic treatments in a comfortable environment.',
      color: 'text-secondary'
    },
    {
      icon: Users,
      title: 'Expert Medical Team',
      description: 'Board-certified specialists committed to your health and wellness journey.',
      color: 'text-accent'
    },
    {
      icon: Award,
      title: 'Excellence in Care',
      description: 'Recognized for outstanding patient outcomes and satisfaction.',
      color: 'text-warning'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Patients Served' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-br from-base-200 to-base-300">
        <div className="hero-content text-center">
          <div className="max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Your Journey to
                  <span className="text-primary"> Wellness</span> &
                  <span className="text-secondary"> Beauty</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed opacity-80">
                  Experience comprehensive care that combines advanced rehabilitation services with specialized women's health and aesthetic treatments—all under one roof.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn btn-primary btn-lg">
                    Book Appointment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link to="/about" className="btn btn-outline btn-lg">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="mockup-window border bg-base-300">
                  <div className="flex justify-center bg-base-200">
                    <img
                      src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Medical professional consulting with patient"
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6">
                  <div className="card bg-base-100 shadow-xl">
                    <div className="card-body p-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-8 w-8 text-success" />
                        <div>
                          <p className="font-semibold">Trusted Care</p>
                          <p className="text-sm opacity-70">Since 2010</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
            {stats.map((stat, index) => (
              <div key={index} className="stat">
                <div className="stat-value text-primary">{stat.number}</div>
                <div className="stat-desc">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Comprehensive Care for Your Complete Well-being
            </h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Our integrated approach combines medical expertise with compassionate care to address all aspects of your health journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="card-body">
                  <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                  <h3 className="card-title text-2xl mb-4">
                    {feature.title}
                  </h3>
                  <p className="opacity-80">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Rehabilitation */}
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Physical therapy session"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-3xl mb-4">
                  Rehabilitation Services
                </h3>
                <p className="mb-6 opacity-80">
                  Recover stronger with our comprehensive rehabilitation programs. Our expert therapists use evidence-based treatments to help you regain function and improve quality of life.
                </p>
                <div className="card-actions">
                  <Link to="/rehabilitation" className="btn btn-primary">
                    Explore Rehabilitation Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Gynecology & Aesthetics */}
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Medical consultation"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-3xl mb-4">
                  Gynecology & Aesthetics
                </h3>
                <p className="mb-6 opacity-80">
                  Comprehensive women's health care and aesthetic treatments in a comfortable, private setting. Feel confident in your health and beauty with our specialized services.
                </p>
                <div className="card-actions">
                  <Link to="/gynecology-aesthetics" className="btn btn-secondary">
                    Explore Women's Health Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="hero-content text-center text-primary-content">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step towards better health and renewed confidence. Our team is here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-neutral btn-lg">
                <Clock className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Link>
              <Link to="/testimonials" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
                Read Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;