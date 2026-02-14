import React from 'react';
import { motion } from 'framer-motion';

const Letter = () => {
    const message = `My Dearest Maysam,

Happy Valentine's Day to the most amazing person in the world. 
Every moment with you is a gift, and I'm so lucky to have you.

You make my world brighter and my heart fuller.
I love you more than words can say.

Forever Yours ❤️`;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-md w-full bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-2xl relative z-20 border border-valentine-100"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-valentine-500 rounded-full p-2 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5 4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
            </div>

            <h1 className="text-4xl font-script text-valentine-700 text-center mb-6 mt-2">
                Happy Valentine's Day
            </h1>

            <div className="prose prose-pink prose-lg mx-auto font-sans text-lg leading-relaxed text-gray-700 text-center whitespace-pre-line">
                {message}
            </div>

            <div className="mt-8 flex justify-center">
                <div className="text-sm font-script text-valentine-400">
                    Made for Maysam with Love
                </div>
            </div>
        </motion.div>
    );
};

export default Letter;
