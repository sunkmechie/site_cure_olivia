import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Sparkles, Users, CheckCircle, Clock, ArrowRight, Star } from 'lucide-react';

const DentistryAesthetics: React.FC = () => {
  const denServices = [
    {
      title: 'Routine Dental Care',
      description: 'Comprehensive women\'s health exams and preventive care.',
      features: ['Annual wellness exams', 'Pap smears', 'Birth control counseling', 'STD testing']
    },
    {
      title: 'Minimally Invasive Procedures',
      description: 'Advanced surgical techniques for various conditions.',
      features: ['Laparoscopic surgery', 'Hysteroscopy', 'Endometrial ablation', 'Fibroid treatment']
    }
  ];

  const aestheticServices = [
    {
      title: 'Anti-Aging Treatments',
      description: 'Restore youthful appearance with proven treatments.',
      features: ['Botox & fillers', 'Chemical peels', 'Microdermabrasion', 'LED light therapy']
    },
    {
      title: 'Body Contouring',
      description: 'Non-surgical solutions for body sculpting.',
      features: ['CoolSculpting', 'Radiofrequency therapy', 'Ultrasound cavitation', 'Cellulite reduction']
    },
    {
      title: 'Skin Rejuvenation',
      description: 'Comprehensive skin care and treatment options.',
      features: ['Laser treatments', 'IPL photofacials', 'Microneedling', 'Medical-grade skincare']
    }
  ];

  const whyChooseUs = [
    'Board-certified physicians',
    'State-of-the-art technology',
    'Personalized treatment plans',
    'Comfortable, private environment',
    'Comprehensive aftercare',
    'Flexible scheduling options'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-[70vh] bg-gradient-to-br from-secondary/10 to-accent/10">
        <div className="hero-content text-center">
          <div className="max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="text-5xl font-bold leading-tight mb-6">
                  Women's Health &
                  <span className="text-secondary"> Aesthetic</span> Excellence
                </h1>
                <p className="text-xl mb-8 leading-relaxed opacity-80">
                  Comprehensive dental care and advanced aesthetic treatments designed to help you feel confident, healthy, and beautiful at every stage of life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn btn-secondary btn-lg">
                    Book Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link to="/about" className="btn btn-outline btn-lg">
                    Meet Our Specialists
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="mockup-window border bg-base-300">
                  <div className="flex justify-center bg-base-200">
                    <img
                      src="https://images.pexels.com/photos/4098369/pexels-photo-4098369.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Medical consultation"
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6">
                  <div className="card bg-base-100 shadow-xl">
                    <div className="card-body p-4">
                      <div className="flex items-center space-x-3">
                        <Shield className="h-8 w-8 text-secondary" />
                        <div>
                          <p className="font-semibold">Safe & Trusted</p>
                          <p className="text-sm opacity-70">FDA Approved</p>
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

      {/* Dental Services */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">
              Comprehensive Dental Care
            </h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Complete health services in a comfortable, private environment with compassionate care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {denServices.map((service, index) => (
              <div key={index} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="card-body">
                  <h3 className="card-title text-2xl mb-4">
                    {service.title}
                  </h3>
                  <p className="mb-6 opacity-80">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center opacity-80">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
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

      {/* Aesthetic Services */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Sparkles className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">
              Advanced Aesthetic Treatments
            </h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              State-of-the-art aesthetic procedures to enhance your natural beauty and boost your confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aestheticServices.map((service, index) => (
              <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="card-body">
                  <h3 className="card-title text-2xl mb-4">
                    {service.title}
                  </h3>
                  <p className="mb-6 opacity-80">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center opacity-80">
                        <Star className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
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

      {/* Why Choose Us */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mockup-window border bg-base-300">
                <div className="flex justify-center bg-base-200">
                  <img
                    src="https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Modern medical facility"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Choose Olivia Clinic?
              </h2>
              <p className="text-xl mb-8 opacity-80">
                Experience the highest standard of care with our team of specialists dedicated to your health and well-being.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-center opacity-80">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                    {reason}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-20 bg-base-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="card bg-base-100 shadow-2xl">
            <div className="card-body p-12">
              <div className="rating mb-6">
                {[...Array(5)].map((_, i) => (
                  <input key={i} type="radio" name="rating-2" className="mask mask-star-2 bg-warning" defaultChecked />
                ))}
              </div>
              <blockquote className="text-2xl mb-6 italic opacity-80">
                "The care I received was exceptional. The staff made me feel comfortable throughout my treatment, and the results exceeded my expectations. I feel more confident than ever."
              </blockquote>
              <div className="flex items-center justify-center space-x-3">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Patient testimonial" />
                  </div>
                </div>
                <div className="text-left">
                  <p className="font-semibold">Sarah M.</p>
                  <p className="text-sm opacity-70">Aesthetic Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero py-20 bg-gradient-to-r from-secondary to-accent text-secondary-content">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Prioritize Your Health & Beauty?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a consultation with our specialists to discuss your health goals and aesthetic aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-neutral btn-lg">
                <Clock className="mr-2 h-5 w-5" />
                Book Consultation
              </Link>
              <Link to="/testimonials" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-secondary">
                Read Patient Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DentistryAesthetics;
