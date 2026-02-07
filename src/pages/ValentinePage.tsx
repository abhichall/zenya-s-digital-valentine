import { useState, useRef } from 'react';
import PageWrapper from '@/components/PageWrapper';
import NavigationButtons from '@/components/NavigationButtons';
import valentineImage from '@/assets/valentine-final.jpg';
import photo1 from '@/assets/photo-1.jpg';
import photo2 from '@/assets/photo-2.jpg';
import photo3 from '@/assets/photo-3.jpg';
import photo4 from '@/assets/photo-4.jpg';
import photo5 from '@/assets/photo-5.jpg';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';

// Card deck photos - replace with your couple photos
const deckPhotos = [
  { src: photo1, rotation: -12, offset: { x: -20, y: 10 } },
  { src: photo2, rotation: -6, offset: { x: -10, y: -5 } },
  { src: photo3, rotation: 0, offset: { x: 0, y: 0 } },
  { src: photo4, rotation: 6, offset: { x: 10, y: -5 } },
  { src: photo5, rotation: 12, offset: { x: 20, y: 10 } },
];

const ValentinePage = () => {
  const [answered, setAnswered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noClickCount, setNoClickCount] = useState(0);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const noTexts = [
    "No 😶",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You're breaking my heart 💔",
    "I'm gonna cry...",
    "Okay fine, YES it is! 💕"
  ];

  const handleYesClick = () => {
    setAnswered(true);
    
    // Trigger confetti celebration
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ff69b4', '#ff1493', '#ffb6c1', '#ffc0cb', '#ff85a2'],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ff69b4', '#ff1493', '#ffb6c1', '#ffc0cb', '#ff85a2'],
      });
    }, 250);
  };

  const handleNoHover = () => {
    if (!containerRef.current || !noButtonRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();
    
    const maxX = container.width - button.width - 20;
    const maxY = container.height - button.height - 20;
    
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;
    
    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleNoClick = () => {
    setNoClickCount(prev => {
      const next = prev + 1;
      if (next >= noTexts.length - 1) {
        handleYesClick();
      }
      return next;
    });
    handleNoHover();
  };

  return (
    <PageWrapper>
      <div ref={containerRef} className="max-w-5xl mx-auto w-full relative min-h-[600px]">
        {!answered ? (
          <>
            <div className="text-center mb-8 animate-fade-in-up">
              <div className="w-64 h-64 mx-auto mb-8 rounded-3xl overflow-hidden shadow-romantic">
                <img
                  src={valentineImage}
                  alt="Valentine"
                  className="w-full h-full object-cover"
                />
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-4">
                Will you be my Valentine, Zenya? 💘
              </h1>
              <p className="text-muted-foreground font-body mb-8">
                I've been waiting to ask you this...
              </p>
            </div>

            <div className="flex justify-center gap-8 items-center opacity-0 animate-fade-in-up animation-delay-300 relative h-24">
              <button
                onClick={handleYesClick}
                className="romantic-button text-xl px-12 py-5 animate-pulse-heart"
              >
                Yes 💞
              </button>

              <button
                ref={noButtonRef}
                onMouseEnter={handleNoHover}
                onClick={handleNoClick}
                className="romantic-button-outline text-xl px-8 py-4 transition-all duration-300"
                style={{
                  transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                }}
              >
                {noTexts[Math.min(noClickCount, noTexts.length - 1)]}
              </button>
            </div>

            <div className="mt-8">
              <NavigationButtons backPath="/letter" />
            </div>
          </>
        ) : (
          <div className="animate-fade-in-up">
            {/* Header */}
            <div className="text-center mb-8">
              <Heart className="w-16 h-16 mx-auto text-primary fill-primary animate-pulse-heart mb-4" />
              <h1 className="text-4xl md:text-6xl font-display font-semibold text-foreground">
                Yay! 🎉💕
              </h1>
            </div>

            {/* Two column layout */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Message */}
              <div className="romantic-card">
                <p className="text-xl md:text-2xl text-foreground font-body leading-relaxed">
                  You just made me the happiest person in the world! 
                  I can't wait to celebrate this Valentine's Day with you, 
                  even if it's from miles away.
                </p>
                <p className="text-lg text-primary font-display mt-6">
                  I love you, Zenya! 💗
                </p>
                <p className="text-muted-foreground font-body italic mt-4">
                  Forever yours ∞
                </p>
              </div>

              {/* Right side - Card deck photos */}
              <div className="relative h-80 md:h-96 flex items-center justify-center">
                <div className="relative w-48 h-64 md:w-56 md:h-72">
                  {deckPhotos.map((photo, index) => (
                    <div
                      key={index}
                      className="absolute inset-0 rounded-xl overflow-hidden shadow-romantic transition-all duration-500 hover:scale-105 hover:z-50 cursor-pointer"
                      style={{
                        transform: `rotate(${photo.rotation}deg) translate(${photo.offset.x}px, ${photo.offset.y}px)`,
                        zIndex: index,
                        border: '4px solid white',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                      }}
                    >
                      <img
                        src={photo.src}
                        alt={`Memory ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Playing card corner decoration */}
                      <div className="absolute top-2 left-2 text-primary text-lg font-display">
                        ♥
                      </div>
                      <div className="absolute bottom-2 right-2 text-primary text-lg font-display rotate-180">
                        ♥
                      </div>
                    </div>
                  ))}
                </div>
                <p className="absolute -bottom-4 text-center text-sm text-muted-foreground font-body w-full">
                  💕 Our memories together
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default ValentinePage;
