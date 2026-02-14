import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeartBackground = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        // Generate hearts periodically
        const interval = setInterval(() => {
            const newHeart = {
                id: Math.random(),
                left: Math.random() * 100,
                scale: Math.random() * 0.5 + 0.5,
                duration: Math.random() * 5 + 5,
                delay: Math.random() * 2
            };

            setHearts(prev => [...prev, newHeart]);

            // Cleanup old hearts
            setTimeout(() => {
                setHearts(prev => prev.filter(h => h.id !== newHeart.id));
            }, (newHeart.duration + newHeart.delay) * 1000);

        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <AnimatePresence>
                {hearts.map(heart => (
                    <motion.div
                        key={heart.id}
                        initial={{ opacity: 0, y: '110vh', x: `${heart.left}vw`, scale: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            y: '-10vh',
                            scale: heart.scale,
                            rotate: [0, 45, -45, 0]
                        }}
                        transition={{
                            duration: heart.duration,
                            ease: "linear",
                            delay: heart.delay
                        }}
                        className="absolute text-valentine-300"
                        style={{ fontSize: `${heart.scale * 2}rem` }}
                    >
                        ❤️
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default HeartBackground;
