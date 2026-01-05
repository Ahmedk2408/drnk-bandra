import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import locationImg from '../assets/store_exterior_interior.jpg';

const Location = () => {
    return (
        <section id="visit" className="bg-white text-black">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent-terra uppercase tracking-widest text-sm font-semibold mb-4 block">Visit Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">drnk. Bandra</h2>

                        <div className="space-y-10">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 flex-shrink-0 bg-black text-white flex items-center justify-center mt-1">
                                    <MapPin size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Location</h4>
                                    <p className="text-gray-600 leading-relaxed font-light">
                                        Shop 4, Pali Hill, <br />
                                        Bandra West, Mumbai, <br />
                                        Maharashtra 400050
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 flex-shrink-0 bg-black text-white flex items-center justify-center mt-1">
                                    <Clock size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Hours</h4>
                                    <p className="text-gray-600 leading-relaxed font-light">
                                        Monday – Friday: 08:00 – 22:00 <br />
                                        Saturday – Sunday: 09:00 – 23:00
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 flex-shrink-0 bg-black text-white flex items-center justify-center mt-1">
                                    <Phone size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Contact</h4>
                                    <p className="text-gray-600 leading-relaxed font-light">
                                        +91 98765 43210 <br />
                                        hello@getdrnk.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-12 bg-black text-white px-10 py-4 font-bold uppercase tracking-widest text-sm transition-all"
                        >
                            Get Directions
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="aspect-square bg-gray-100 overflow-hidden shadow-2xl"
                    >
                        <img
                            src={locationImg}
                            alt="drnk Store"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Location;
