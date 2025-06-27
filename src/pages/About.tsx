import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Heart, Shield, Clock, CheckCircle, ArrowRight, Star } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, understanding, and respect throughout their journey to wellness.'
    },
    {
      icon: Shield,
      title: 'Clinical Excellence',
      description: 'Our commitment to the highest standards of medical care ensures optimal outcomes for all patients.'
    },
    {
      icon: Users,
      title: 'Patient-Centered Approach',
      description: 'We listen to your needs and customize treatment plans that align with your personal health goals.'
    },
    {
      icon: Award,
      title: 'Continuous Innovation',
      description: 'We stay at the forefront of medical advancements to provide the most effective treatments available.'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Medical Director & Gynecologist',
      specialty: 'Women\'s Health, Minimally Invasive Surgery',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
      credentials: 'MD, Board Certified OB/GYN'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Physical Medicine & Rehabilitation',
      specialty: 'Sports Medicine, Pain Management',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      credentials: 'MD, Board Certified PM&R'
    },
    {
      name: 'Lisa Rodriguez, PT',
      role: 'Lead Physical Therapist',
      specialty: 'Orthopedic Rehabilitation, Manual Therapy',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400',
      credentials: 'DPT, OCS, FAAOMPT'
    },
    {
      name: 'Dr. Amanda Foster',
      role: 'Aesthetic Medicine Specialist',
      specialty: 'Cosmetic Dermatology, Anti-Aging',
      image: 'https://images.pexels.com/photos/4098369/pexels-photo-4098369.jpeg?auto=compress&cs=tinysrgb&w=400',
      credentials: 'MD, Board Certified Dermatology'
    }
  ];

  const achievements = [
    'Joint Commission Accredited Facility',
    'Top 1% Patient Satisfaction Scores',
    'American Physical Therapy Association Recognition',
    'Women\'s Health Excellence Award 2023',
    'Green Practice Certification',
    'Community Health Champion Award'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-[70vh] bg-gradient-to-br from-base-200 to-base-300">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              About <span className="text-primary">Vita</span><span className="text-secondary">Care</span> Center
            </h1>
            <p className="text-xl mb-8 leading-relaxed opacity-80">
              Since 2010, we've been committed to providing exceptional healthcare that combines advanced medical expertise with compassionate, personalized care. Our integrated approach to rehabilitation and women's health sets us apart as a leader in comprehensive wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/testimonials" className="btn btn-outline btn-lg">
                Patient Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-4xl mb-6">Our Mission</h2>
                <p className="text-lg opacity-80 leading-relaxed mb-6">
                  To provide comprehensive, compassionate healthcare that empowers individuals to achieve their optimal health and wellness. We are dedicated to combining cutting-edge medical treatments with personalized care to help our patients live their best lives.
                </p>
                <p className="text-lg opacity-80 leading-relaxed">
                  Through our integrated approach to rehabilitation and women's health, we address the complete spectrum of our patients' needs, ensuring continuity of care and exceptional outcomes.
                </p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-4xl mb-6">Our Vision</h2>
                <p className="text-lg opacity-80 leading-relaxed mb-6">
                  To be the premier healthcare destination where advanced medical expertise meets personalized, compassionate care. We envision a future where every patient feels empowered, supported, and confident in their journey to wellness.
                </p>
                <p className="text-lg opacity-80 leading-relaxed">
                  We strive to set the standard for integrated healthcare, continuously advancing our services and expanding our impact in the communities we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every interaction we have with our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="card-body">
                  <value.icon className="h-12 w-12 text-primary mb-6" />
                  <h3 className="card-title text-2xl mb-4">
                    {value.title}
                  </h3>
                  <p className="opacity-80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Our experienced healthcare professionals are dedicated to providing you with the highest quality care and personalized attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <figure>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-xl mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm opacity-80 mb-3">
                    {member.specialty}
                  </p>
                  <p className="text-xs opacity-70">
                    {member.credentials}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Recognition & Achievements
              </h2>
              <p className="text-xl mb-8 opacity-80">
                Our commitment to excellence has been recognized by leading healthcare organizations and our community.
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center opacity-80">
                    <Award className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="stat bg-base-100 shadow-xl">
                <div className="stat-value text-primary">15+</div>
                <div className="stat-desc">Years of Excellence</div>
              </div>
              <div className="stat bg-base-100 shadow-xl">
                <div className="stat-value text-secondary">10k+</div>
                <div className="stat-desc">Lives Transformed</div>
              </div>
              <div className="stat bg-base-100 shadow-xl">
                <div className="stat-value text-accent">98%</div>
                <div className="stat-desc">Patient Satisfaction</div>
              </div>
              <div className="stat bg-base-100 shadow-xl">
                <div className="stat-value text-warning">24/7</div>
                <div className="stat-desc">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero py-20 bg-gradient-to-r from-primary to-secondary text-primary-content">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold mb-6">
              Experience the VitaCare Difference
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of patients who have trusted us with their health and wellness journey. Discover personalized care that puts you first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-neutral btn-lg">
                <Clock className="mr-2 h-5 w-5" />
                Schedule Your Visit
              </Link>
              <Link to="/testimonials" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
                Read Patient Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;