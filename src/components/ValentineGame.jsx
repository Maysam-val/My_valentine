import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ValentineGame = ({ onAccept }) => {
    const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState(1);
    const [isAccepted, setIsAccepted] = useState(false);

    const moveNoButton = () => {
        const range = 300;
        const newX = (Math.random() - 0.5) * range;
        const newY = (Math.random() - 0.5) * range;
        setNoButtonPos({ x: newX, y: newY });
        setScale(prev => Math.min(prev + 0.15, 2.5));
    };

    const handleYes = () => {
        setIsAccepted(true);
        setTimeout(onAccept, 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border-4 border-valentine-200 text-center max-w-lg w-full z-20 overflow-visible"
        >
            <AnimatePresence mode="wait">
                {!isAccepted ? (
                    <motion.div
                        key="question"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="text-7xl mb-6"
                        >
                            💝
                        </motion.div>

                        <h2 className="text-4xl font-script text-valentine-700 mb-6">Maysam, will you be my Valentine?</h2>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 relative min-h-[150px]">
                            <motion.button
                                style={{ scale }}
                                whileHover={{ scale: scale * 1.05 }}
                                whileTap={{ scale: scale * 0.95 }}
                                onClick={handleYes}
                                className="bg-valentine-500 hover:bg-valentine-600 text-white px-12 py-4 rounded-full text-2xl font-bold shadow-xl transition-colors z-30"
                            >
                                Yes! 💖
                            </motion.button>

                            <motion.button
                                animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                                onMouseEnter={moveNoButton}
                                onClick={moveNoButton}
                                className="bg-gray-100 text-gray-500 px-8 py-3 rounded-full text-xl font-medium shadow-md border border-gray-200 z-20"
                            >
                                No 🥺
                            </motion.button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-10"
                    >
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 0.5 }}
                            className="text-8xl mb-6"
                        >
                            🎉❤️
                        </motion.div>
                        <h2 className="text-4xl font-script text-valentine-600">I Knew It!</h2>
                        <p className="text-2xl font-script text-valentine-500 mt-2">Love you, Maysam!</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ValentineGame;
