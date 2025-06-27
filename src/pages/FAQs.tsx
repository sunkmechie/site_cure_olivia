import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle, Activity, Heart, Phone, ArrowRight } from 'lucide-react';

const FAQs: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const generalFAQs = [
    {
      question: "What services does VitaCare offer?",
      answer: "VitaCare provides comprehensive rehabilitation services including physical therapy, occupational therapy, and neurological rehabilitation, as well as complete women's health services including gynecology and aesthetic treatments. Our integrated approach allows us to address all aspects of your health and wellness in one convenient location."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major insurance plans including Medicare and Medicaid. Our staff will verify your benefits and help you understand your coverage before your first appointment. We also offer flexible payment options for services not covered by insurance."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment by calling our office at (555) 123-4567, using our online booking system, or visiting us in person. For urgent matters, we offer same-day appointments when available."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring a valid photo ID, your insurance card, a list of current medications, any relevant medical records or imaging studies, and a form of payment for any copays or deductibles. Arrive 15 minutes early to complete any necessary paperwork."
    },
    {
      question: "Do you offer telehealth services?",
      answer: "Yes, we offer telehealth consultations for appropriate services including follow-up appointments, medication management, and certain types of counseling. Not all services can be provided via telehealth, and we'll let you know if an in-person visit is necessary."
    }
  ];

  const rehabFAQs = [
    {
      question: "How long does physical therapy take?",
      answer: "The duration of physical therapy varies depending on your condition, goals, and response to treatment. Most patients see improvement within 2-4 weeks, with full programs typically lasting 6-12 weeks. Your therapist will provide a personalized timeline based on your specific needs."
    },
    {
      question: "Do I need a referral for physical therapy?",
      answer: "In most cases, you can receive physical therapy without a referral thanks to direct access laws. However, some insurance plans may require a physician's referral for coverage. We recommend checking with your insurance provider or calling us to verify your specific requirements."
    },
    {
      question: "What conditions do you treat?",
      answer: "We treat a wide range of conditions including orthopedic injuries, neurological conditions, balance disorders, chronic pain, sports injuries, work-related injuries, and post-surgical rehabilitation. Our specialized programs address stroke recovery, spinal cord injuries, and degenerative conditions."
    },
    {
      question: "What should I wear to therapy sessions?",
      answer: "Wear comfortable, loose-fitting clothing that allows easy movement and access to the area being treated. Athletic wear is ideal. Avoid jeans or restrictive clothing. We'll provide specific guidelines based on your treatment area during your initial evaluation."
    },
    {
      question: "Will therapy be painful?",
      answer: "While some discomfort during therapy is normal as you work to improve function, therapy should not cause severe pain. Our therapists use evidence-based techniques to minimize discomfort while maximizing results. Communication with your therapist about pain levels is essential for optimal outcomes."
    }
  ];

  const womensHealthFAQs = [
    {
      question: "How often should I have a gynecological exam?",
      answer: "Most women should have an annual gynecological exam, though the frequency may vary based on age, health history, and risk factors. Pap smears are typically recommended every 3 years for women ages 21-65, or every 5 years when combined with HPV testing. We'll create a personalized screening schedule for you."
    },
    {
      question: "Are aesthetic treatments safe?",
      answer: "Yes, when performed by qualified professionals using FDA-approved equipment and techniques. All our aesthetic treatments are performed by board-certified physicians or licensed practitioners under physician supervision. We prioritize safety and natural-looking results in all our procedures."
    },
    {
      question: "What aesthetic treatments do you offer?",
      answer: "We offer a comprehensive range of aesthetic treatments including Botox and dermal fillers, chemical peels, microdermabrasion, laser treatments, IPL photofacials, microneedling, CoolSculpting, and medical-grade skincare. During your consultation, we'll recommend the best treatments for your goals and skin type."
    },
    {
      question: "How long do aesthetic results last?",
      answer: "Results vary depending on the treatment. Botox typically lasts 3-4 months, dermal fillers 6-18 months, and chemical peels show results for several months. CoolSculpting provides permanent fat reduction, while laser treatments may require multiple sessions for optimal results. We'll discuss expected duration during your consultation."
    },
    {
      question: "Is there downtime after aesthetic treatments?",
      answer: "Downtime varies by treatment. Some procedures like Botox have minimal to no downtime, while others like deep chemical peels may require several days of recovery. We'll provide detailed post-treatment instructions and help you plan your treatments around your schedule."
    }
  ];

  const FAQSection: React.FC<{ title: string; icon: React.ComponentType<any>; faqs: any[]; startIndex: number }> = ({ title, icon: Icon, faqs, startIndex }) => (
    <div className="mb-12">
      <div className="flex items-center mb-8">
        <Icon className="h-8 w-8 text-primary mr-3" />
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const globalIndex = startIndex + index;
          return (
            <div key={index} className="collapse collapse-plus bg-base-200 shadow-lg">
              <input 
                type="checkbox" 
                checked={openItems.includes(globalIndex)}
                onChange={() => toggleItem(globalIndex)}
              />
              <div className="collapse-title text-lg font-semibold">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="opacity-80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-[50vh] bg-gradient-to-br from-base-200 to-base-300">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl mb-8 leading-relaxed opacity-80">
              Find answers to common questions about our services, procedures, and policies. If you don't see your question here, please don't hesitate to contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-base-100">
        <div className="max-w-4xl mx-auto px-4">
          <FAQSection title="General Questions" icon={HelpCircle} faqs={generalFAQs} startIndex={0} />
          <FAQSection title="Rehabilitation Services" icon={Activity} faqs={rehabFAQs} startIndex={generalFAQs.length} />
          <FAQSection title="Women's Health & Aesthetics" icon={Heart} faqs={womensHealthFAQs} startIndex={generalFAQs.length + rehabFAQs.length} />
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="card bg-primary text-primary-content shadow-2xl">
            <div className="card-body text-center">
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h2 className="card-title justify-center text-3xl mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Our friendly staff is here to help you with any questions or concerns.
              </p>
              <div className="card-actions justify-center">
                <Link to="/contact" className="btn btn-neutral btn-lg">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a href="tel:+15551234567" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Additional Resources
            </h2>
            <p className="text-xl opacity-80">
              Learn more about our services and prepare for your visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-xl text-center">
              <div className="card-body">
                <Activity className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="card-title justify-center text-xl mb-3">
                  Patient Forms
                </h3>
                <p className="opacity-80 mb-4">
                  Download and complete forms before your visit to save time.
                </p>
                <button className="btn btn-primary">
                  Download Forms →
                </button>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl text-center">
              <div className="card-body">
                <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="card-title justify-center text-xl mb-3">
                  Insurance Guide
                </h3>
                <p className="opacity-80 mb-4">
                  Understand your coverage and what to expect for costs.
                </p>
                <button className="btn btn-secondary">
                  View Guide →
                </button>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl text-center">
              <div className="card-body">
                <Phone className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="card-title justify-center text-xl mb-3">
                  24/7 Support
                </h3>
                <p className="opacity-80 mb-4">
                  Access to our support team whenever you need assistance.
                </p>
                <button className="btn btn-accent">
                  Get Support →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;