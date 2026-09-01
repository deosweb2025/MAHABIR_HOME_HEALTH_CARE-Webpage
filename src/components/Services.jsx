import { motion } from 'framer-motion';
import { Stethoscope, User, Activity, BriefcaseMedical, HeartHandshake, BedDouble } from 'lucide-react';

const servicesList = [
  {
    title: "Nursing at Home",
    description: "Professional nursing care for post-operative recovery, medication management, and specialized treatments.",
    icon: Stethoscope,
    color: "from-blue-400 to-indigo-500"
  },
  {
    title: "Patient Attendant",
    description: "Dedicated caregivers providing a safe, nurturing, and engaging environment for your loved ones.",
    icon: User,
    color: "from-pink-400 to-rose-500"
  },
  {
    title: "Physiotherapy",
    description: "Expert physiotherapy at home to ensure smooth rehabilitation and mobility.",
    icon: Activity,
    color: "from-amber-400 to-orange-500"
  },
  {
    title: "Medical Equipment",
    description: "Access to necessary surgical instruments and medical equipment for home care.",
    icon: BriefcaseMedical,
    color: "from-purple-400 to-indigo-500"
  },
  {
    title: "Elder Care",
    description: "Compassionate assistance with daily living activities, ensuring dignity and comfort for seniors.",
    icon: HeartHandshake,
    color: "from-teal-400 to-emerald-500"
  },
  {
    title: "Post Hospital Recovery",
    description: "Specialized support and monitoring to ensure a safe transition from hospital to home.",
    icon: BedDouble,
    color: "from-cyan-400 to-blue-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-brand-ivory dark:bg-slate-900 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent dark:text-teal-400 font-semibold tracking-wider uppercase mb-3 text-sm">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-white mb-4">
            Comprehensive Care Solutions
          </h3>
          <p className="text-lg text-secondary dark:text-slate-300">
            We offer a wide range of specialized services designed to meet your family's unique health and caregiving needs.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index} 
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                className="group relative rounded-2xl overflow-hidden bg-brand-mint dark:bg-slate-800 p-[3px] shadow-sm hover:shadow-[0_20px_40px_rgba(13,148,136,0.15)] dark:hover:shadow-[0_20px_40px_rgba(13,148,136,0.3)] transition-shadow duration-300"
              >
                {/* Animated Border (Radar/Snake Glow) */}
                <div 
                  className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_280deg,rgba(13,148,136,0.8)_320deg,rgba(52,211,153,1)_360deg)] opacity-100 transition-opacity duration-500 animate-[spin_2s_linear_infinite]" 
                  style={{ width: '250%', height: '250%', top: '-75%', left: '-75%' }}
                ></div>
                
                {/* Card Inner Content */}
                <div className="relative h-full bg-white dark:bg-slate-900 rounded-xl p-8 flex flex-col items-center text-center z-10 transition-colors duration-300">
                  <div className={`relative z-10 w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  
                  <h4 className="relative z-10 text-xl font-bold text-primary dark:text-white mb-3 font-serif tracking-wide">{service.title}</h4>
                  <p className="relative z-10 text-secondary dark:text-slate-300 leading-relaxed font-medium text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
