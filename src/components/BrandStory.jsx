import React from 'react';
import { motion } from 'framer-motion';
import storyImage from '../assets/wall_logo_aesthetic.jpg';

const BrandStory = () => {
    return (
        <section id="story" className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-2 lg:order-1"
                >
                    <span className="text-accent-sage uppercase tracking-widest text-sm font-semibold mb-4 block">Our Story</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                        Minimalist approach, <br />
                        <span className="text-accent-gray-400">Maximalist flavor.</span>
                    </h2>
                    <div className="space-y-6 text-lg text-accent-gray-400 font-light leading-relaxed">
                        <p>
                            Born in the heart of Bandra, Mumbai, drnk is more than just a café—it's a celebration of urban culture and sophisticated simplicity.
                        </p>
                        <p>
                            We believe that the best things in life are simple. That's why we've stripped away the noise to focus on what truly matters: exceptional ingredients, meticulously crafted beverages, and a space that breathes.
                        </p>
                        <p>
                            From our signature interactive slushies to our curated coffee blends, every sip is a testament to our commitment to quality and "vibes".
                        </p>
                    </div>
                    <motion.button
                        whileHover={{ x: 10 }}
                        className="mt-10 flex items-center gap-4 text-white font-medium group"
                    >
                        Learn more about our ritual
                        <span className="w-10 h-[1px] bg-accent-sage group-hover:w-16 transition-all duration-300"></span>
                    </motion.button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative order-1 lg:order-2"
                >
                    <div className="aspect-[4/5] overflow-hidden">
                        <img
                            src={storyImage}
                            alt="drnk aesthetic"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-accent-sage/30"></div>
                    <div className="absolute -top-6 -left-6 w-32 h-32 border-l border-t border-accent-sage/30"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default BrandStory;
