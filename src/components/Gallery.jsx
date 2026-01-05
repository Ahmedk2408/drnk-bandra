import React from 'react';
import { motion } from 'framer-motion';

// Import images
import img1 from '../assets/aesthetic_setup.jpg';
import img2 from '../assets/branded_cup_drink.jpg';
import img3 from '../assets/food_and_matcha.jpg';
import img4 from '../assets/menu_board.jpg';

const images = [
    { src: img1, alt: 'drnk Interior', size: 'md:col-span-2' },
    { src: img2, alt: 'Signature drnk', size: '' },
    { src: img3, alt: 'Matcha & Bites', size: '' },
    { src: img4, alt: 'Our Menu', size: 'md:col-span-2' },
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-accent-charcoal">
            <div className="section-container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Curated Visuals
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-accent-gray-400 uppercase tracking-[0.2em] text-sm"
                    >
                        Captured in the heart of Pali Hill
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative overflow-hidden group ${image.size}`}
                        >
                            <div className="aspect-[16/9] md:aspect-auto md:h-80 lg:h-[400px]">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white px-6 py-2 border border-white/30 backdrop-blur-sm text-sm uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    View Detail
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
