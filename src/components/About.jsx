import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import aboutImg from '../assets/images/confident-female-doctor-with-reports-clipboard-standing-against-male-patient-hospital.jpg';

const About = () => {
  const benefits = [
    "Highly trained and certified nursing staff",
    "Personalized care plans for every patient",
    "Available 24 hours a day, 7 days a week",
    "Compassionate elder and child care",
    "Advanced physiotherapy at home",
    "Reliable and trustworthy service"
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src={aboutImg} 
                alt="Nurse caring for patient" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl">
                <p className="text-2xl font-bold text-primary mb-1">10+ Years</p>
                <p className="text-slate-700 font-medium">Of Excellence in Home Health Care</p>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -z-10 -top-8 -left-8 w-64 h-64 bg-teal-50 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase mb-3 text-sm">About Mahabir</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-800 mb-6 leading-tight">
              Dedicated to bringing <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">healing home.</span>
            </h3>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Mahabir Home Health Service, we understand that there is no place like home for recovery and care. We are committed to providing exceptional medical and non-medical assistance directly to your doorstep.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="tel:+919330391658"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary bg-teal-50 hover:bg-teal-100 rounded-full transition-colors"
            >
              Contact Us Today
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
