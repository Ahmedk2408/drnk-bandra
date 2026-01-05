import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/5 pt-24 pb-12">
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    <div className="col-span-1 lg:col-span-1">
                        <h2 className="text-3xl font-display font-bold mb-6 tracking-tighter">drnk.</h2>
                        <p className="text-accent-gray-400 font-light leading-relaxed mb-8">
                            Bandra's finest beverage ritual. Curated for the urban soul.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-accent-sage transition-colors">
                                <Instagram size={18} strokeWidth={1.5} />
                            </a>
                            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-accent-sage transition-colors">
                                <Twitter size={18} strokeWidth={1.5} />
                            </a>
                            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-accent-sage transition-colors">
                                <Facebook size={18} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-accent-sage">Explore</h4>
                        <ul className="space-y-4 text-accent-gray-400 font-light">
                            <li><a href="#story" className="hover:text-white transition-colors">Our Story</a></li>
                            <li><a href="#gallery" className="hover:text-white transition-colors">Visuals</a></li>

                            <li><a href="#visit" className="hover:text-white transition-colors">Visit Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-accent-sage">Legal</h4>
                        <ul className="space-y-4 text-accent-gray-400 font-light">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-accent-sage">Newsletter</h4>
                        <p className="text-accent-gray-400 font-light mb-6">Stay updated with our latest drops.</p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-accent-charcoal border-none px-6 py-4 focus:ring-1 focus:ring-accent-sage transition-all outline-none"
                            />
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-accent-sage font-bold text-xs uppercase tracking-widest">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-accent-gray-400 text-[10px] uppercase tracking-widest font-light">
                        © 2026 drnk. All rights reserved.
                    </p>
                    <p className="text-accent-gray-400 text-[10px] uppercase tracking-widest font-light italic">
                        Developed for the urban sophisticated.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
