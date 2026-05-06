/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  History, 
  Home, 
  Wrench, 
  Zap, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram,
  Menu,
  X,
  ChevronRight,
  MessageSquare
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Home className="w-10 h-10 text-brand-orange" />,
      title: "Roof Replacement",
      description: "Premium asphalt shingles and metal roofing installed with precision for long-term durability and curb appeal."
    },
    {
      icon: <Wrench className="w-10 h-10 text-brand-orange" />,
      title: "Roof Repairs",
      description: "Stopping leaks and replacing shingles to extend the life of your current roof and prevent interior damage."
    },
    {
      icon: <Zap className="w-10 h-10 text-brand-orange" />,
      title: "Emergency Service",
      description: "Rapid response for storm damage and ice damming issues across the Ottawa region when you need us most."
    }
  ];

  const testimonials = [
    {
      quote: "1-800-NEW-ROOF delivered on all details as promised and went above and beyond with the cleanup. Highly recommend!",
      author: "Jason Baillargeon",
      location: "Ottawa Resident"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white border-b border-slate-200 shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex flex-col group cursor-pointer transition-transform active:scale-95 leading-none">
            <span className={`text-2xl font-black tracking-tighter transition-colors leading-none ${scrolled ? 'text-brand-blue' : 'text-white'}`}>
              1-800-NEW-ROOF
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {['Services', 'About', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-semibold transition-colors hover:text-brand-orange ${
                  scrolled ? 'text-slate-600' : 'text-white/80 hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
            <div className="flex items-center gap-6 pl-4 border-l border-white/20">
              <a href="tel:6136272100" className={`flex flex-col items-end transition-colors ${scrolled ? 'text-brand-blue' : 'text-white'}`}>
                <span className={`text-[10px] uppercase font-bold ${scrolled ? 'text-slate-400' : 'text-white/50'}`}>Emergency 24/7</span>
                <span className="text-lg font-bold tracking-tight">(613) 627-2100</span>
              </a>
              <a 
                href="#contact" 
                className="bg-brand-orange text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-orange-200/50 hover:bg-orange-700 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Get Free Quote
              </a>
            </div>
          </nav>

          <button 
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-brand-blue' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-blue pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {['Services', 'About', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold text-white border-b border-white/10 pb-4"
                >
                  {item}
                </a>
              ))}
              <a 
                href="tel:6136272100" 
                className="flex items-center justify-center gap-3 bg-brand-orange text-white py-4 rounded-xl font-bold text-xl"
              >
                <Phone />
                (613) 627-2100
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-[90dvh] min-h-[700px] flex items-center overflow-hidden bg-brand-blue">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1635424710928-0544e8512eea?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover grayscale opacity-40"
            alt="Roofing"
          />
          <div className="absolute inset-0 hero-overlay-sleek" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-orange mr-2 animate-pulse"></span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">Ottawa Local Experts</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-display font-extrabold text-white leading-[0.95] mb-8 tracking-tighter">
                Reliable Roofing <br />
                <span className="text-brand-orange">Built to Last.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl font-medium leading-relaxed">
                Premium residential roofing services protecting Ottawa homes since 2012. 
                Quality solutions with lifetime warranty options.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mb-12">
                <div className="flex items-center bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 text-brand-orange font-black text-xl">4.8</div>
                  <div>
                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Google Rating</div>
                    <div className="text-white font-bold">130+ Verified Reviews</div>
                  </div>
                </div>
                <div className="flex items-center bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 text-brand-orange">
                    <Star className="fill-current w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">BBB Status</div>
                    <div className="text-white font-bold">A+ Accredited Expert</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <a 
                  href="#contact" 
                  className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-orange-700 transition-all shadow-2xl shadow-orange-600/30 flex items-center justify-center gap-3 hover:-translate-y-1"
                >
                  Get a Free Quote
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Line */}
      <div className="bg-slate-50 py-10 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-around items-center gap-8 md:gap-4">
            <div className="flex items-center gap-3 text-slate-600 font-bold group">
              <CheckCircle2 className="text-green-600 w-6 h-6 transition-transform group-hover:scale-110" />
              <span>BBB Accredited (A+)</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 font-bold group">
              <ShieldCheck className="text-brand-orange w-6 h-6 transition-transform group-hover:scale-110" />
              <span>Fully Insured & Licensed</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 font-bold group">
              <History className="text-brand-blue w-6 h-6 transition-transform group-hover:scale-110" />
              <span>Ottawa's Choice Since 2012</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <section id="services" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-orange-50 border border-orange-100 rounded-full mb-4">
              <span className="text-[10px] font-black text-orange-700 uppercase tracking-[0.2em]">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-brand-blue mb-6 tracking-tight">Our Core Services</h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl">Premium solutions for Ottawa's unique climate challenges.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 card-sleek text-left group"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:rotate-6 group-hover:bg-brand-orange-light">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4 tracking-tight">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-brand-blue text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-brand-orange font-bold tracking-widest uppercase mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8">Expertise Driven by Experience</h2>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>Founded by Brad De Fazio in 2012, 1-800-NEW-ROOF has spent over a decade protecting Ottawa families from the elements.</p>
                <p>We specialize in residential roofing, ensuring every project meets the highest safety and quality standards required for our harsh Canadian winters.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                {[
                  "A+ Rating with the BBB",
                  "Local Wellington St. Office",
                  "Transparent Pricing",
                  "Certified Installers"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 font-semibold">
                    <div className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-orange/20 rounded-3xl blur-2xl" />
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 p-12 rounded-3xl shadow-2xl">
                  <div className="text-brand-orange mb-6">
                    <MessageSquare className="w-12 h-12" />
                  </div>
                  <blockquote className="text-2xl md:text-3xl font-display font-bold italic mb-8 leading-snug">
                    "1-800-NEW-ROOF delivered on all details as promised and went above and beyond. Truly the best in Ottawa."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center font-bold text-xl">
                      J
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">Jason Baillargeon</p>
                      <p className="text-brand-orange font-medium">Ottawa Resident</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Form Side */}
              <div className="lg:w-3/5 p-8 md:p-16">
                <h2 className="text-4xl font-display font-extrabold text-brand-blue mb-4">Get Your Free Estimate</h2>
                <p className="text-slate-600 mb-10 text-lg">Send us your project details and we'll get back to you within 24 hours.</p>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="(613) 000-0000" 
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Project Details</label>
                    <textarea 
                      placeholder="Tell us about your roof..." 
                      rows={4} 
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all shadow-sm"
                    ></textarea>
                  </div>
                  <button className="w-full bg-brand-orange text-white font-black py-5 rounded-2xl hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 text-lg uppercase tracking-widest active:scale-[0.98]">
                    Request Free Quote Now
                  </button>
                </form>
              </div>

              {/* Info Side */}
              <div className="lg:w-2/5 bg-brand-blue p-8 md:p-16 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center">
                      <MapPin className="text-brand-orange w-6 h-6" />
                    </div>
                    Location & Hours
                  </h3>
                  
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <MapPin className="text-brand-orange shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-lg mb-1">Office Address</p>
                        <p className="text-slate-300">Suite 208, 1355 Wellington St. W<br />Ottawa, ON K1Y 3C2</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Clock className="text-brand-orange shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-lg mb-1">Business Hours</p>
                        <p className="text-slate-300">
                          <span className="font-bold text-white">Mon-Fri:</span> 7:00 AM – 11:00 PM<br />
                          <span className="font-bold text-white">Sat-Sun:</span> 8:00 AM – 9:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <div className="rounded-2xl overflow-hidden grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-500 h-48 sm:h-64 shadow-2xl">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.7602334814884!2d-75.7337!3d45.401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce043657788331%3A0x600f68d904f6479e!2s1355%20Wellington%20St%20W%20%23208%2C%20Ottawa%2C%20ON%20K1Y%203C2!5e0!3m2!1sen!2sca!4v1715600000000!5m2!1sen!2sca" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-slate-500 py-12 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-xl font-black text-brand-blue tracking-tighter mb-1">1-800-NEW-ROOF</span>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">© {new Date().getFullYear()} Canada Inc. | Fully Insured & Licensed</p>
            </div>
            
            <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                1355 Wellington St. W, Ottawa
              </div>
              <div className="hidden md:block">Mon-Fri: 7am – 11pm</div>
            </div>

            <div className="flex gap-4">
              {[Facebook, Instagram].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-brand-orange hover:text-white transition-all flex items-center justify-center text-slate-400 border border-slate-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Floating CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50 flex shadow-2xl">
        <a 
          href="tel:6136272100" 
          className="flex-1 bg-brand-orange text-white text-center py-4 font-black rounded-l-2xl border-r border-orange-700/30 flex items-center justify-center gap-2"
        >
          <Phone className="w-5 h-5" />
          Call
        </a>
        <a 
          href="#contact" 
          className="flex-1 bg-brand-blue text-white text-center py-4 font-black rounded-r-2xl flex items-center justify-center gap-2"
        >
          <Star className="w-5 h-5 text-brand-orange" />
          Quote
        </a>
      </div>

    </div>
  );
}
