import { useRef, useState, useEffect } from 'react';
import './Highlights.css';

export function Highlights() {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const highlightsData = [
    {
      image: '/images/highlight1.jpeg',
      description: 'Finalist (Top 20 out of 104 teams) at Build for Bengaluru Hackathon',
    },
    {
      image: '/images/highlight2.jpeg',
      description:
        'Winner of Bashbandhu Ideathon (Powered by Microsoft) – secured 1st place at college level and progressed to prototype phase. Out of more than 1000 teams, only 100 got selected, and we are currently building the prototype.',
    },
    {
      image: '/images/highlight3.jpeg',
      description:
        'Attended an event at Microsoft office organized by OScode on open source - Exploring the Future of Open Source with OScode! 🚀',
    },
    {
      image: '/images/highlight4.png',
      description:
        'Working on Virtual Me Chatbot – A personal AI coach trained on my thoughts, goals, and journal entries to reflect my mindset and support my growth. Built using LLMs, RAG, and memory to create a dynamic, self-aware digital twin experience.',
    },
  ];

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Touch/Mouse drag handlers for mobile swipe
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('touchstart', handleTouchStart);
      carousel.addEventListener('touchmove', handleTouchMove);
      carousel.addEventListener('touchend', handleDragEnd);
      
      return () => {
        carousel.removeEventListener('touchstart', handleTouchStart);
        carousel.removeEventListener('touchmove', handleTouchMove);
        carousel.removeEventListener('touchend', handleDragEnd);
      };
    }
  }, [isDragging, startX, scrollLeft]);

  return (
    <section id="highlights" className="recent-highlights-section">
      <h2 className="highlights-title">
        <span className="gradient">Recent Highlights</span>
      </h2>
      <div className="underline"></div>

      <div className="carousel-container">
        <button className="carousel-btn left" onClick={() => scroll('left')} aria-label="Previous">
          <i className="bx bx-chevron-left"></i>
        </button>

        <div 
          className="carousel-track" 
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {highlightsData.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <img src={highlight.image} alt={`Highlight ${index + 1}`} />
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>

        <button className="carousel-btn right" onClick={() => scroll('right')} aria-label="Next">
          <i className="bx bx-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}
