import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Envelope from './components/Envelope';
import Letter from './components/Letter';
import HeartBackground from './components/HeartBackground';
import ValentineGame from './components/ValentineGame';

function App() {
    const [step, setStep] = useState('envelope'); // 'envelope', 'game', 'letter'

    return (
        <div className="min-h-screen bg-gradient-to-br from-valentine-50 to-valentine-200 flex items-center justify-center p-4 overflow-hidden relative">
            <HeartBackground />

            <AnimatePresence mode="wait">
                {step === 'envelope' && (
                    <motion.div
                        key="envelope"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
                        transition={{ duration: 0.5 }}
                        className="z-10"
                    >
                        <Envelope onOpen={() => setStep('game')} />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="text-center mt-8 font-script text-valentine-800 text-2xl"
                        >
                            Click to open
                        </motion.p>
                    </motion.div>
                )}

                {step === 'game' && (
                    <ValentineGame key="game" onAccept={() => setStep('letter')} />
                )}

                {step === 'letter' && (
                    <Letter key="letter" />
                )}
            </AnimatePresence>

            <div className="absolute bottom-4 right-4 text-valentine-300 text-xs opacity-50">
                Design by Antigravity
            </div>
        </div>
    );
}

export default App;
