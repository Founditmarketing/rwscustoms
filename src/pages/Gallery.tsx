import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const reels = [
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1742270996938691%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1615514826495413%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1961081524450168%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1874842989779086%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1253472486607830%2F&show_text=false&width=267&t=0"
  ];

  const photos = [
    "/rwsimage1.jpg",
    "/rwsimage2.jpg",
    "/rwsimage3.jpg",
    "/rwsimage4.jpg",
    "/rwsimage5.jpg"
  ];

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? photos.length - 1 : lightboxIndex - 1);
    }
  };
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === photos.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") setLightboxIndex(prev => prev === 0 ? photos.length - 1 : (prev as number) - 1);
      if (e.key === "ArrowRight") setLightboxIndex(prev => prev === photos.length - 1 ? 0 : (prev as number) + 1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lightboxIndex]);

  return (
    <main className="bg-black text-white min-h-screen pt-16 lg:pt-24 font-sans">
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 flex justify-center overflow-hidden border-b border-white/10">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105" 
          style={{ backgroundImage: "url(/services/RWSlandclearing.jpeg)" }}
        />
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        {/* Background Faded Text */}
        <div className="absolute inset-y-0 left-0 w-full flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          <h1 
            className="font-heading text-[18vw] lg:text-[14vw] font-bold text-transparent leading-none whitespace-nowrap tracking-tight opacity-50" 
            style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.10)" }}
          >
            PORTFOLIO
          </h1>
        </div>

        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] uppercase drop-shadow-2xl mb-6">
            OUR <span className="text-brand-grey">WORK</span>
          </h1>
          <div className="w-24 h-[3px] bg-brand-grey mb-6"></div>
          <p className="text-gray-400 font-sans text-lg md:text-xl leading-relaxed max-w-2xl">
            A visual record of our industrial-grade land clearing, custom welding, and precise excavation projects across East Texas. We let our results speak for themselves.
          </p>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="px-4 lg:px-8 py-24 lg:py-32">
        <div className="max-w-[100rem] mx-auto">
          {/* Flex Layout for Reels (Single Row on Desktop) */}
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 lg:gap-8">
            {reels.map((src, idx) => (
              <div 
                key={idx} 
                className="bg-[#111] p-2 rounded-xl border border-white/10 shadow-2xl hover:border-brand-grey/50 transition-colors duration-300 flex justify-center items-center w-fit"
              >
                <iframe 
                  src={src}
                  width="267" 
                  height="476" 
                  style={{ border: "none", overflow: "hidden" }} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="rounded-lg"
                  title={`Facebook Reel ${idx + 1}`}
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="px-4 lg:px-8 py-16 lg:py-24 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {photos.map((src, idx) => (
              <div 
                key={idx} 
                onClick={() => openLightbox(idx)}
                className="relative aspect-square group overflow-hidden border border-white/10 rounded-xl shadow-2xl bg-[#111] cursor-pointer"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${src})` }}
                />
                {/* 
                  Instead of a dull dark overlay, we keep it fully visible and colorful by default.
                  We add a subtle zoom icon on hover to indicate it's clickable.
                */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100 drop-shadow-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-brand-grey transition-colors z-[110]"
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8 md:w-12 md:h-12" />
            </button>
            
            {/* Previous Button */}
            <button 
              className="absolute left-2 md:left-8 text-white hover:text-brand-grey transition-colors z-[110]"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10 md:w-16 md:h-16 drop-shadow-xl" />
            </button>
            
            {/* Main Image */}
            <motion.img 
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={photos[lightboxIndex]} 
              alt={`Project Gallery Image ${lightboxIndex + 1}`} 
              className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />

            {/* Next Button */}
            <button 
              className="absolute right-2 md:right-8 text-white hover:text-brand-grey transition-colors z-[110]"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10 md:w-16 md:h-16 drop-shadow-xl" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
