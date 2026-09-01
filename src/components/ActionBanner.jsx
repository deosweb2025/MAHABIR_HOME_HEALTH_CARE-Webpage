import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Heart } from 'lucide-react';

const ActionBanner = () => {
  return (
    <section className="bg-brand-ivory dark:bg-slate-900 py-10 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          
          {/* Premium Floating Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-center gap-6 w-full px-4 flex-wrap"
          >
            {/* Card 1 */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden bg-white dark:bg-slate-800 p-5 rounded-2xl flex items-center gap-5 text-slate-800 w-full md:flex-1 lg:max-w-[340px] border border-teal-100 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(13,148,136,0.15)] transition-all cursor-default"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-teal-50/50 dark:via-teal-900/20 to-transparent animate-[shimmer_3s_infinite]"></div>
              
              <div className="relative z-10 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-700 dark:to-slate-700 p-4 rounded-xl text-primary dark:text-teal-400 shadow-sm">
                <Clock size={28} className="animate-pulse" />
              </div>
              <div className="relative z-10">
                <h3 className="font-bold text-xl text-primary dark:text-white mb-0.5">24/7 Service</h3>
                <p className="text-sm font-medium text-secondary dark:text-slate-400">Round the clock care</p>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden bg-white dark:bg-slate-800 p-5 rounded-2xl flex items-center gap-5 text-slate-800 w-full md:flex-1 lg:max-w-[340px] border border-teal-100 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(13,148,136,0.15)] transition-all cursor-default"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-teal-50/50 dark:via-teal-900/20 to-transparent animate-[shimmer_3s_infinite]" style={{ animationDelay: '1.5s' }}></div>
              
              <div className="relative z-10 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-700 dark:to-slate-700 p-4 rounded-xl text-primary dark:text-teal-400 shadow-sm">
                <ShieldCheck size={28} className="animate-pulse" />
              </div>
              <div className="relative z-10">
                <h3 className="font-bold text-xl text-primary dark:text-white mb-0.5">Certified Staff</h3>
                <p className="text-sm font-medium text-secondary dark:text-slate-400">Professional nurses</p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden bg-white dark:bg-slate-800 p-5 rounded-2xl flex items-center gap-5 text-slate-800 w-full md:flex-1 lg:max-w-[340px] border border-teal-100 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(13,148,136,0.15)] transition-all cursor-default"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-teal-50/50 dark:via-teal-900/20 to-transparent animate-[shimmer_3s_infinite]" style={{ animationDelay: '2.5s' }}></div>
              
              <div className="relative z-10 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-700 dark:to-slate-700 p-4 rounded-xl text-primary dark:text-teal-400 shadow-sm">
                <Heart size={28} className="animate-pulse" />
              </div>
              <div className="relative z-10">
                <h3 className="font-bold text-xl text-primary dark:text-white mb-0.5">Compassionate</h3>
                <p className="text-sm font-medium text-secondary dark:text-slate-400">Care that feels close</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ActionBanner;
