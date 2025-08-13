import { useEffect, useRef, useState } from "react";

function Contact() {
  const heroRef = useRef();
  const sectionsRef = useRef([]);
  const cardsRef = useRef([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Interactive CSS-based animations with staggered effects
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Hero section with smooth entrance
    if (heroRef.current) {
      heroRef.current.style.opacity = '0';
      heroRef.current.style.transform = 'translateY(30px)';
      heroRef.current.style.transition = 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
      observer.observe(heroRef.current);
    }

    // Contact cards with staggered animations
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.95)';
        card.style.transition = `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`;
        observer.observe(card);
      }
    });

    // Other sections with smooth reveals
    sectionsRef.current.forEach((section) => {
      if (section) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    }, 3000);
  };

  const services = [
    "Interior Design Consultation",
    "Full Home Renovation",
    "Room Makeover",
    "Space Planning",
    "Color Consultation",
    "Furniture Selection",
    "Custom Design Solutions",
    "Other"
  ];

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Our Showroom",
      details: ["123 Design Street", "Creative District, CD 12345"],
      action: "Get Directions"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: ["+1 (555) 123-4567", "Mon-Fri: 9AM-6PM"],
      action: "Call Now"
    },
    {
      icon: "✉️",
      title: "Email Us",
      details: ["hello@decore.com", "We reply within 24 hours"],
      action: "Send Email"
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Lead Interior Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=400&q=80",
      experience: "10+ years"
    },
    {
      name: "Michael Chen",
      role: "Space Planning Expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      experience: "8+ years"
    },
    {
      name: "Emily Rodriguez",
      role: "Color & Styling Consultant",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
      experience: "6+ years"
    }
  ];

  const setRefs = (el, i) => {
    sectionsRef.current[i] = el;
  };

  const setCardRefs = (el, i) => {
    cardsRef.current[i] = el;
  };

  return (
    <div className="bg-[#F8F5F0] min-h-screen">
      {/* Interactive Hero Section - Enhanced with animations */}
      <section 
        ref={heroRef}
        className="relative h-[75vh] bg-gradient-to-br from-[#2E2E2E] via-[#8B5E3C] to-[#C19A6B] flex items-center justify-center text-white overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 border-4 border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/15 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-white/30 rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Floating particles */}
          <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white/50 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-3/4 right-1/3 w-4 h-4 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Dark gradient overlay to ensure text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/30"></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight tracking-tight text-white drop-shadow-2xl">
              Let's Create
            </h1>
            <h2 className="text-4xl md:text-6xl font-light mb-6 text-[#F8F5F0] drop-shadow-lg">
              Something Amazing
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white/95 max-w-3xl mx-auto drop-shadow-lg">
            Transform your vision into reality with our award-winning design team. 
            Every space tells a story – let's write yours together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden bg-white text-[#8B5E3C] px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl"
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#C19A6B] to-[#8B5E3C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                Start Your Journey
              </span>
            </button>
            
            <button className="group border-3 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#8B5E3C] transition-all duration-500 transform hover:scale-110 relative overflow-hidden shadow-lg">
              <span className="flex items-center gap-2">
                📞 Schedule Call
              </span>
            </button>
          </div>

          {/* Stats or highlights */}
          <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 text-center">
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold group-hover:scale-110 transition-transform duration-300 text-white drop-shadow-md">500+</div>
              <div className="text-sm text-white/80 drop-shadow-sm">Projects Completed</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30"></div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold group-hover:scale-110 transition-transform duration-300 text-white drop-shadow-md">15+</div>
              <div className="text-sm text-white/80 drop-shadow-sm">Years Experience</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30"></div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold group-hover:scale-110 transition-transform duration-300 text-white drop-shadow-md">98%</div>
              <div className="text-sm text-white/80 drop-shadow-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Bottom wave transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z" 
                  fill="#F8F5F0" className="animate-pulse" style={{ animationDuration: '4s' }}></path>
          </svg>
        </div>
      </section>

      {/* Contact Info Cards - More compact */}
      <section ref={(el) => setRefs(el, 0)} className="px-6 md:px-12 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2E2E2E] mb-8 text-center">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center group cursor-pointer"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2E2E2E] mb-3 group-hover:text-[#8B5E3C] transition-colors">
                  {info.title}
                </h3>
                <div className="text-gray-600 mb-4 space-y-1 text-sm">
                  {info.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
                <button className="bg-[#8B5E3C] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#C19A6B] transition-all duration-300 transform hover:scale-105">
                  {info.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={(el) => setRefs(el, 1)} id="contact-form" className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2E2E2E] mb-4">
              Start Your Project
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-700">Your message has been sent successfully. We'll be in touch soon!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#2E2E2E] font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#8B5E3C] focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-[#2E2E2E] font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#8B5E3C] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#2E2E2E] font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#8B5E3C] focus:outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-[#2E2E2E] font-semibold mb-2">
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#8B5E3C] focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#2E2E2E] font-semibold mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#8B5E3C] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project, budget, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 transform ${
                    isSubmitting
                      ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#8B5E3C] to-[#C19A6B] text-white hover:from-[#C19A6B] hover:to-[#8B5E3C] hover:scale-105"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Meet The Team */}
      <section ref={(el) => setRefs(el, 2)} className="px-6 md:px-12 py-20 bg-[#F8F5F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2E2E2E] mb-4">
              Meet Our Design Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our passionate team of experts brings years of experience and creative vision to every project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8B5E3C]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-2 group-hover:text-[#8B5E3C] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#8B5E3C] font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.experience} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={(el) => setRefs(el, 3)} className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2E2E2E] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How long does a typical interior design project take?",
                answer: "Project timelines vary based on scope and complexity. A single room makeover typically takes 4-6 weeks, while full home renovations can take 3-6 months."
              },
              {
                question: "Do you work within specific budget ranges?",
                answer: "We work with various budget ranges and will provide transparent pricing during our initial consultation. We believe great design should be accessible to everyone."
              },
              {
                question: "Can you work with my existing furniture?",
                answer: "Absolutely! We love incorporating cherished pieces into new designs. We'll assess your existing items and suggest how to best integrate them into your new space."
              },
              {
                question: "Do you offer virtual consultations?",
                answer: "Yes, we offer both in-person and virtual consultations to accommodate your preferences and schedule. Virtual consultations are perfect for initial planning and ongoing project updates."
              }
            ].map((faq, index) => (
              <details key={index} className="group border-b border-gray-200 pb-4">
                <summary className="cursor-pointer text-lg font-semibold text-[#2E2E2E] group-hover:text-[#8B5E3C] transition-colors py-2">
                  {faq.question}
                </summary>
                <p className="text-gray-600 mt-2 pl-4 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={(el) => setRefs(el, 4)} className="px-6 md:px-12 py-20 bg-gradient-to-r from-[#8B5E3C] to-[#C19A6B]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait to create the home of your dreams. Book your free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#8B5E3C] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Book Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#8B5E3C] transition-all duration-300">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;