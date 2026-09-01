import { motion } from 'framer-motion';
import { HeartPulse, Clock, ShieldCheck, Award } from 'lucide-react';

const reasons = [
  {
    title: "24/7 Availability",
    description: "Our dedicated team is always on standby to provide round-the-clock nursing and support whenever you need it.",
    icon: <Clock size={32} className="text-primary" />
  },
  {
    title: "Certified Professionals",
    description: "We employ highly trained, certified, and experienced nurses and caregivers to ensure hospital-quality care.",
    icon: <Award size={32} className="text-primary" />
  },
  {
    title: "Compassionate Care",
    description: "We treat your loved ones like family, prioritizing emotional well-being alongside physical health recovery.",
    icon: <HeartPulse size={32} className="text-primary" />
  },
  {
    title: "Trusted & Reliable",
    description: "Years of experience and countless satisfied families make us a leading choice for home health care in Kolkata.",
    icon: <ShieldCheck size={32} className="text-primary" />
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-brand-ivory dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent dark:text-teal-400 font-semibold tracking-wider uppercase mb-3 text-sm">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-white mb-4">
            Committed to Excellence in Care
          </h3>
          <p className="text-lg text-secondary dark:text-slate-300">
            We understand that choosing a health care provider for your family is a major decision. Here is why families trust us with their loved ones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-brand-mint dark:bg-slate-800 p-[3px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(13,148,136,0.15)] dark:hover:shadow-[0_8px_30px_rgba(13,148,136,0.3)] transition-shadow duration-300"
            >
              {/* Animated Border (Radar/Snake Glow) */}
              <div 
                className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_280deg,rgba(13,148,136,0.8)_320deg,rgba(52,211,153,1)_360deg)] opacity-100 transition-opacity duration-500 animate-[spin_2s_linear_infinite]" 
                style={{ width: '250%', height: '250%', top: '-75%', left: '-75%' }}
              ></div>
              
              {/* Card Inner Content */}
              <div className="relative h-full bg-white dark:bg-slate-900 rounded-xl p-8 flex flex-col z-10 transition-colors duration-300">
                <div className="w-16 h-16 rounded-xl bg-teal-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <h4 className="text-xl font-bold text-primary dark:text-white mb-3">{reason.title}</h4>
                <p className="text-secondary dark:text-slate-300 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
