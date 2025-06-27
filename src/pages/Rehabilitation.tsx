import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Heart, Brain, Zap, Target, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const Rehabilitation: React.FC = () => {
  const services = [
    {
      icon: Activity,
      title: 'Physical Therapy',
      description: 'Restore movement and function through personalized exercise programs and manual therapy techniques.',
      features: ['Orthopedic rehabilitation', 'Sports injury recovery', 'Post-surgical therapy', 'Pain management']
    },
    {
      icon: Brain,
      title: 'Occupational Therapy',
      description: 'Regain independence in daily activities through adaptive strategies and skill development.',
      features: ['Activities of daily living', 'Cognitive rehabilitation', 'Hand therapy', 'Workplace ergonomics']
    },
    {
      icon: Zap,
      title: 'Neurological Rehabilitation',
      description: 'Specialized care for neurological conditions to optimize function and quality of life.',
      features: ['Stroke recovery', 'Spinal cord injury', 'Traumatic brain injury', 'Multiple sclerosis']
    },
    {
      icon: Target,
      title: 'Balance & Fall Prevention',
      description: 'Comprehensive programs to improve stability and reduce fall risk.',
      features: ['Balance assessment', 'Vestibular therapy', 'Strength training', 'Home safety evaluation']
    }
  ];

  const conditions = [
    'Arthritis & Joint Pain',
    'Back & Neck Injuries',
    'Sports Injuries',
    'Post-Surgical Recovery',
    'Stroke Recovery',
    'Parkinson\'s Disease',
    'Multiple Sclerosis',
    'Chronic Pain',
    'Balance Disorders',
    'Work-Related Injuries'
  ];

  const benefits = [
    'Reduced pain and inflammation',
    'Improved mobility and strength',
    'Enhanced balance and coordination',
    'Faster recovery times',
    'Prevention of future injuries',
    'Increased independence'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-[70vh] bg-gradient-to-br from-primary/10 to-primary/20">
        <div className="hero-content text-center">
          <div className="max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="text-5xl font-bold leading-tight mb-6">
                  Comprehensive
                  <span className="text-primary"> Rehabilitation</span> Services
                </h1>
                <p className="text-xl mb-8 leading-relaxed opacity-80">
                  Recover stronger with evidence-based rehabilitation programs designed to restore function, reduce pain, and improve your quality of life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn btn-primary btn-lg">
                    Schedule Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link to="/about" className="btn btn-outline btn-lg">
                    Meet Our Team
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="mockup-window border bg-base-300">
                  <div className="flex justify-center bg-base-200">
                    <img
                      src="https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Physical therapy session"
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6">
                  <div className="card bg-base-100 shadow-xl">
                    <div className="card-body p-4">
                      <div className="flex items-center space-x-3">
                        <Heart className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-semibold">Expert Care</p>
                          <p className="text-sm opacity-70">Licensed Therapists</p>
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

      {/* Services Section */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Rehabilitation Services
            </h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Personalized treatment plans tailored to your specific needs and recovery goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="card-body">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="card-title text-2xl mb-4">
                    {service.title}
                  </h3>
                  <p className="mb-6 opacity-80">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center opacity-80">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Conditions We Treat
              </h2>
              <p className="text-xl mb-8 opacity-80">
                Our experienced team provides specialized care for a wide range of conditions, helping you return to the activities you love.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-center opacity-80">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    {condition}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="mockup-window border bg-base-300">
                <div className="flex justify-center bg-base-200">
                  <img
                    src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Rehabilitation equipment"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Benefits of Our Rehabilitation Programs
            </h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Experience the difference comprehensive rehabilitation can make in your recovery journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card bg-base-200 shadow-lg text-center">
                <div className="card-body">
                  <div className="avatar">
                    <div className="w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="card-title justify-center text-lg">
                    {benefit}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero py-20 bg-primary text-primary-content">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Begin Your Recovery?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step towards renewed strength and mobility. Our rehabilitation specialists are here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-neutral btn-lg">
                <Clock className="mr-2 h-5 w-5" />
                Schedule Assessment
              </Link>
              <Link to="/testimonials" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
                Patient Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rehabilitation;