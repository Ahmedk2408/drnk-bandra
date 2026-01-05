import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main>
                <Hero />
                <BrandStory />
                <Gallery />
                <Location />
            </main>
            <Footer />
            <Analytics />
        </div>
    );
}

export default App;
