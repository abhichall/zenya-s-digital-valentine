import { useState, useRef, useEffect } from 'react';
import PageWrapper from '@/components/PageWrapper';
import NavigationButtons from '@/components/NavigationButtons';
import valentineImage from '@/assets/valentine-final.jpg';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';

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
      <div ref={containerRef} className="max-w-2xl mx-auto w-full relative min-h-[600px]">
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
          </>
        ) : (
          <div className="text-center animate-fade-in-up">
            <div className="mb-8">
              <Heart className="w-24 h-24 mx-auto text-primary fill-primary animate-pulse-heart" />
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-semibold text-foreground mb-6">
              Yay! 🎉💕
            </h1>

            <div className="romantic-card mb-8">
              <p className="text-xl md:text-2xl text-foreground font-body leading-relaxed">
                You just made me the happiest person in the world! 
                I can't wait to celebrate this Valentine's Day with you, 
                even if it's from miles away.
              </p>
              <p className="text-lg text-primary font-display mt-6">
                I love you, Zenya! 💗
              </p>
            </div>

            <p className="text-muted-foreground font-body italic">
              Forever yours ∞
            </p>
          </div>
        )}

        {!answered && (
          <div className="mt-8">
            <NavigationButtons backPath="/letter" />
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default ValentinePage;
