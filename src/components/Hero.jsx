import assets from "../assets/assets";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full"
      >
        <img className="w-20" src={assets.group_profile} alt="group-profile" />
        <p className="text-xs font-medium">Trusted by 10k+ people</p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl"
      >
        AI Voice Agents & Chatbots That Never Miss a Lead
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3"
      >
        Continuous workflows. Flawless communication. Bringing the universe of conversational AI to your business. Never miss a call. Never lose a lead.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="https://wa.me/14169104547?text=Hi%2C%20I%20want%20a%20free%20consultation%20for%20AI%20automation."
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-105"
        >
          Book Free Consultation
        </a>
        <a
          href="#our-work"
          className="rounded-full border border-gray-300 bg-white/80 px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:scale-105 dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-100"
        >
          Watch Demo
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-3 text-sm"
      >
        {[
          "24/7 AI Receptionist",
          "WhatsApp Automation",
          "Website Chatbots",
          "AI Phone Calls",
          "CRM Integrations",
        ].map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-100"
          >
            {badge}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img src={assets.hero_img} alt="hero" className="w-full max-w-6xl" />
        <img
          src={assets.bgImage1}
          alt="gradient-bg"
          className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
