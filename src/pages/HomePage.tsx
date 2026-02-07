import { useNavigate } from 'react-router-dom';
import PageWrapper from '@/components/PageWrapper';
import { Heart, ChevronRight } from 'lucide-react';
import heroImage from '@/assets/romantic-hero.jpg';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
        {/* Background image with overlay */}
        <div className="fixed inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Romantic background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="mb-8 animate-float">
            <Heart className="w-16 h-16 mx-auto text-primary fill-primary/30" />
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-semibold text-foreground mb-6">
            Hi Zenya 💗
          </h1>

          <div className="romantic-card mb-8 opacity-0 animate-fade-in-up animation-delay-200">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-body">
              Even though miles separate us, my heart beats for you every single day. 
              I made this little corner of the internet just for you, 
              because you deserve to know how special you are to me.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-body mt-4">
              Take a walk with me through our memories... 💕
            </p>
          </div>

          <button
            onClick={() => navigate('/photos')}
            className="romantic-button text-lg opacity-0 animate-fade-in-up animation-delay-400"
          >
            Begin Our Journey
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default HomePage;
