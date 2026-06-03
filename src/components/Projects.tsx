import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Projects() {
  const reels = [
    { src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1742270996938691%2F&show_text=false&width=267&t=0" },
    { src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1615514826495413%2F&show_text=false&width=267&t=0" },
    { src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1961081524450168%2F&show_text=false&width=267&t=0" },
    { src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1874842989779086%2F&show_text=false&width=267&t=0" },
    { src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1253472486607830%2F&show_text=false&width=267&t=0" }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // True Infinite Carousel Handlers
  const nextSlide = () => setActiveIndex((prev) => prev + 1);
  const prevSlide = () => setActiveIndex((prev) => prev - 1);

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = activeIndex - 4; i <= activeIndex + 4; i++) {
      const realIndex = ((i % reels.length) + reels.length) % reels.length;
      slides.push({ 
        ...reels[realIndex], 
        realIndex, 
        absoluteIndex: i, 
        offset: i - activeIndex 
      });
    }
    return slides;
  };

  return (
    <section id="projects" className="bg-black text-white pt-16 lg:pt-32 pb-24 lg:pb-32 relative overflow-hidden flex flex-col">
      
      {/* Header Container */}
      <div className="relative w-full flex flex-col items-center justify-center mb-4 lg:mb-8 pt-8">
        {/* Background Faded Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <h2 
            className="font-heading text-[22vw] md:text-[18vw] font-bold text-transparent leading-[1.2] whitespace-nowrap tracking-tight py-12" 
            style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.10)" }}
          >
            GALLERY
          </h2>
        </div>
        
        {/* Centered Title Header */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-4 md:mt-8">
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] uppercase text-white drop-shadow-2xl">
            OUR <span className="text-brand-grey">WORK</span>
          </h2>
        </div>
      </div>

      <div className="relative z-10 w-full">
        {/* Center-Mode Infinite Carousel for Reels */}
        <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden mt-2 md:mt-8">
          
          {/* Navigation Arrows on Top of Carousel */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-8 z-50 w-12 h-12 md:w-16 md:h-16 bg-white text-black flex items-center justify-center hover:bg-brand-grey hover:scale-105 transition-all"
            aria-label="Previous reel"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-8 z-50 w-12 h-12 md:w-16 md:h-16 bg-white text-black flex items-center justify-center hover:bg-brand-grey hover:scale-105 transition-all"
            aria-label="Next reel"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {getVisibleSlides().map((slide) => {
            const isCenter = slide.offset === 0;
            const zIndex = 20 - Math.abs(slide.offset);
            
            const opacity = Math.abs(slide.offset) >= 3 ? 0 : 1;
            const scale = 1;
            const pointerEvents = Math.abs(slide.offset) >= 3 ? 'none' : 'auto';
            const translatePercent = slide.offset * 110;

            return (
              <div 
                key={slide.absoluteIndex} 
                className="absolute w-[267px] h-[476px] bg-[#111] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group rounded-xl border border-white/10 flex items-center justify-center shadow-2xl"
                style={{
                  transform: `translateX(${translatePercent}%) scale(${scale})`,
                  zIndex,
                  opacity,
                  pointerEvents
                }}
              >
                <iframe 
                  src={slide.src}
                  width="267" 
                  height="476" 
                  style={{ border: "none", overflow: "hidden" }} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="rounded-lg"
                  title={`Facebook Reel ${slide.realIndex + 1}`}
                ></iframe>
                
                {/* Overlay to intercept clicks if NOT the center slide */}
                {!isCenter && (
                  <div 
                    className="absolute inset-0 bg-black/60 cursor-pointer z-10 rounded-lg" 
                    onClick={() => setActiveIndex(slide.absoluteIndex)}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-4 md:mt-6 flex justify-center w-full px-6 relative z-10">
        <Link 
          to="/gallery" 
          className="group relative inline-flex items-center justify-center overflow-hidden bg-white text-black px-10 py-5 font-sans font-bold tracking-widest uppercase text-sm border border-transparent hover:border-white transition-colors"
        >
          <span className="absolute inset-0 w-full h-full bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-out">
            View Full Gallery
          </span>
        </Link>
      </div>

    </section>
  );
}
