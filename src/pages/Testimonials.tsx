import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, Heart, Activity, Users, ArrowRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      age: 34,
      service: 'Physical Therapy',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'After my knee surgery, I was worried about my recovery. The team at VitaCare not only helped me regain full mobility but also gave me the confidence to return to my active lifestyle. The personalized care and expertise made all the difference.',
      result: 'Returned to marathon running within 6 months'
    },
    {
      name: 'Maria Rodriguez',
      age: 42,
      service: 'Gynecology & Aesthetics',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'The comprehensive women\'s health care I received was outstanding. Dr. Mitchell and her team made me feel comfortable and heard. The aesthetic treatments have boosted my confidence tremendously.',
      result: 'Improved health and renewed confidence'
    },
    {
      name: 'Robert Chen',
      age: 58,
      service: 'Rehabilitation',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'Following my stroke, I thought my independence was gone forever. The neurological rehabilitation program at VitaCare helped me regain function I never thought possible. The staff\'s dedication and encouragement kept me motivated every step of the way.',
      result: 'Regained 90% of pre-stroke functionality'
    },
    {
      name: 'Jennifer Thompson',
      age: 29,
      service: 'Aesthetic Treatments',
      rating: 5,
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'I was hesitant about aesthetic treatments, but the team at VitaCare made me feel so comfortable. The results are natural and exactly what I wanted. I feel more confident than ever, and the experience was wonderful.',
      result: 'Natural-looking results exceeded expectations'
    },
    {
      name: 'David Martinez',
      age: 45,
      service: 'Physical Therapy',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'As a construction worker, my back injury was devastating. The physical therapy program not only eliminated my pain but also taught me how to prevent future injuries. I\'m back to work and stronger than before.',
      result: 'Pain-free and returned to full-time work'
    },
    {
      name: 'Lisa Park',
      age: 39,
      service: 'Women\'s Health',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'The care I received during my fertility journey was exceptional. The team was supportive, knowledgeable, and gave me hope when I needed it most. I\'m now a proud mother thanks to their expertise and compassion.',
      result: 'Successfully conceived after 3 years of trying'
    }
  ];

  const stats = [
    { number: '98%', label: 'Patient Satisfaction', icon: Heart },
    { number: '95%', label: 'Would Recommend', icon: Users },
    { number: '4.9/5', label: 'Average Rating', icon: Star },
    { number: '10,000+', label: 'Happy Patients', icon: Activity }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-[50vh] bg-gradient-to-br from-base-200 to-base-300">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Patient Success Stories
            </h1>
            <p className="text-xl mb-8 leading-relaxed opacity-80">
              Hear from our patients about their transformative experiences at VitaCare. These stories represent the heart of what we do—helping people reclaim their health, confidence, and quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
            {stats.map((stat, index) => (
              <div key={index} className="stat">
                <div className="stat-figure">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="stat-value text-primary">{stat.number}</div>
                <div className="stat-desc">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="card-body">
                  <div className="flex items-center mb-6">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="card-title text-xl">
                        {testimonial.name}
                      </h3>
                      <p className="opacity-70">
                        Age {testimonial.age} • {testimonial.service}
                      </p>
                    </div>
                  </div>

                  <div className="rating mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <input key={i} type="radio" name={`rating-${index}`} className="mask mask-star-2 bg-warning" defaultChecked />
                    ))}
                  </div>

                  <Quote className="h-8 w-8 text-primary mb-4" />
                  
                  <blockquote className="opacity-80 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="divider"></div>
                  
                  <div className="badge badge-success badge-outline">
                    Result: {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl opacity-80">
              Watch our patients share their stories in their own words.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card bg-base-200 shadow-xl">
              <figure className="bg-gradient-to-br from-primary to-primary-focus aspect-video flex items-center justify-center">
                <div className="text-center text-primary-content">
                  <div className="btn btn-circle btn-lg bg-white/20 border-none mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.84A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.27l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sarah's Recovery Journey</h3>
                  <p className="opacity-90">Physical Therapy Success Story</p>
                </div>
              </figure>
              <div className="card-body">
                <p className="opacity-80">
                  Watch Sarah share how physical therapy at VitaCare helped her return to competitive running after a serious injury.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl">
              <figure className="bg-gradient-to-br from-secondary to-secondary-focus aspect-video flex items-center justify-center">
                <div className="text-center text-secondary-content">
                  <div className="btn btn-circle btn-lg bg-white/20 border-none mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.84A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.27l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Maria's Transformation</h3>
                  <p className="opacity-90">Women's Health & Aesthetics</p>
                </div>
              </figure>
              <div className="card-body">
                <p className="opacity-80">
                  Maria discusses her comprehensive care experience and how it improved both her health and confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Transformation Gallery
            </h2>
            <p className="text-xl opacity-80">
              See the remarkable results our patients have achieved through our comprehensive care programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stat bg-base-100 shadow-xl">
              <div className="stat-figure text-primary">
                <Activity className="h-10 w-10" />
              </div>
              <div className="stat-title">Mobility Restored</div>
              <div className="stat-value text-primary">90%</div>
              <div className="stat-desc">Function Recovered</div>
            </div>

            <div className="stat bg-base-100 shadow-xl">
              <div className="stat-figure text-secondary">
                <Heart className="h-10 w-10" />
              </div>
              <div className="stat-title">Confidence Renewed</div>
              <div className="stat-value text-secondary">100%</div>
              <div className="stat-desc">Satisfaction Rate</div>
            </div>

            <div className="stat bg-base-100 shadow-xl">
              <div className="stat-figure text-accent">
                <Users className="h-10 w-10" />
              </div>
              <div className="stat-title">Lives Changed</div>
              <div className="stat-value text-accent">10,000+</div>
              <div className="stat-desc">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero py-20 bg-gradient-to-r from-primary to-secondary text-primary-content">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of patients who have transformed their lives with VitaCare. Your journey to better health and renewed confidence starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-neutral btn-lg">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/faqs" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
                Common Questions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;