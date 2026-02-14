import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Envelope = ({ onOpen }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        if (!isOpen) {
            setIsOpen(true);
            setTimeout(onOpen, 800);
        }
    };

    return (
        <div className="relative w-64 h-48 cursor-pointer perspective-1000 group" onClick={handleOpen}>
            {/* Envelope Body */}
            <div className="absolute inset-0 bg-valentine-600 rounded-b-xl z-10 shadow-lg flex items-end justify-center pb-4">
                <span className="text-white font-script text-2xl opacity-80 group-hover:opacity-100 transition-opacity">
                    Open Me
                </span>
            </div>

            {/* Flap */}
            <motion.div
                className="absolute top-0 left-0 w-full h-1/2 bg-valentine-700 origin-top z-20 rounded-t-xl"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                animate={{ rotateX: isOpen ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {/* Letter Preview */}
            <motion.div
                className="absolute bottom-0 left-2 right-2 bg-white h-40 z-0 rounded-t-md shadow-sm flex items-center justify-center"
                initial={{ y: 0 }}
                animate={{ y: isOpen ? -60 : 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <span className="font-script text-valentine-500 text-xl font-bold">Maysam</span>
            </motion.div>

            {/* Background (Inside of Envelope) */}
            <div className="absolute inset-0 bg-valentine-800 rounded-b-xl z-0 mt-1"></div>
        </div>
    );
};

export default Envelope;
