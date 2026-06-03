import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [isVisible, setIsVisible] = useState(() => {
    return sessionStorage.getItem("initialLoadDone") !== "true";
  });

  useEffect(() => {
    if (!isVisible) {
      if (onComplete) onComplete();
      return;
    }

    // The load screen stays visible while the sequence plays. 
    // R (0.2s) -> W (0.6s) -> S (1.0s) -> Customs (1.6s)
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("initialLoadDone", "true");
    }, 3800); // Slightly longer to enjoy the slow zoom effect
    
    const contentTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 4500); // Trigger content fade-in near the end of the load screen fade-out

    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loadscreen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center pointer-events-auto overflow-hidden"
        >
          {/* Subtle Background Glow/Radial Gradient */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 4, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-brand-grey/10 rounded-full blur-[120px]"></div>
          </motion.div>
          
          {/* Subtle Blueprint/Industrial Grid Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"
          ></motion.div>

          {/* Logo Container */}
          <motion.div 
            initial={{ scale: 1 }}
            animate={{ scale: 1.02 }}
            transition={{ duration: 5, ease: "easeOut" }}
            className="relative w-56 h-56 md:w-72 md:h-72 z-10"
          >
            
            {/* R (First) */}
            <motion.img 
              src="/loadscreen/R.png" 
              alt="R" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute inset-0 w-full h-full object-contain"
            />
            
            {/* W (Second) */}
            <motion.img 
              src="/loadscreen/W.png" 
              alt="W" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute inset-0 w-full h-full object-contain"
            />
            
            {/* S (Third) */}
            <motion.img 
              src="/loadscreen/S.png" 
              alt="S" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="absolute inset-0 w-full h-full object-contain"
            />
            
            {/* Customs (Continuous slow zoom) */}
            <motion.img 
              src="/loadscreen/Customs.png" 
              alt="Customs" 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1.05 }}
              transition={{ 
                opacity: { duration: 0.8, delay: 1.6, ease: "easeOut" },
                scale: { duration: 2.8, delay: 1.6, ease: "linear" } 
              }}
              className="absolute inset-0 w-full h-full object-contain origin-center"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
