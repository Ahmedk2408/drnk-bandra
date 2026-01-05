import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/store_exterior_interior.jpg';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.7 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={heroImage}
                    alt="drnk Bandra Store"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black"></div>
            </div>

            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <h2 className="text-accent-sage font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-4">
                        Established in Bandra
                    </h2>
                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold tracking-tighter leading-none mb-8">
                        drnk<span className="text-accent-sage">.</span>
                    </h1>
                    <p className="max-w-md mx-auto text-accent-gray-400 text-lg md:text-xl font-light mb-12">
                        Elevating urban beverage culture. Sophisticated sips, curated vibes, and a taste of Bandra.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary w-full md:w-auto"
                        >
                            Explore Menu
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-secondary w-full md:w-auto"
                        >
                            Shop Merch
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-accent-sage to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
