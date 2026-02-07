import PageWrapper from '@/components/PageWrapper';
import NavigationButtons from '@/components/NavigationButtons';
import { Heart } from 'lucide-react';

const LetterPage = () => {
  return (
    <PageWrapper>
      <div className="max-w-2xl mx-auto w-full">
        <div className="text-center mb-8 animate-fade-in-up">
          <Heart className="w-12 h-12 mx-auto text-primary fill-primary/30 mb-4 animate-pulse-heart" />
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            A Letter For You 💌
          </h2>
        </div>

        <div className="love-letter opacity-0 animate-fade-in-up animation-delay-200">
          <div className="font-body text-foreground/90 leading-relaxed space-y-4">
            <p className="font-display text-xl text-primary">My Dearest Zenya,</p>
            
            <p>
              From the moment you came into my life, everything changed. 
              You brought colors to my world that I never knew existed, 
              and gave meaning to days that used to feel ordinary.
            </p>
            
            <p>
              I know the distance between us can feel overwhelming sometimes. 
              There are days when I wish I could just reach out and hold your hand, 
              or see your smile in person instead of through a screen. 
              But you know what? Every mile between us only makes my love for you stronger.
            </p>
            
            <p>
              You are my first thought when I wake up, and the last before I sleep. 
              Your laugh is my favorite melody, your happiness is my greatest joy, 
              and your love is the most precious gift I've ever received.
            </p>
            
            <p>
              Thank you for choosing me. Thank you for being patient. 
              Thank you for loving me across the miles. 
              I promise to cherish every moment we share, 
              whether we're together or apart.
            </p>
            
            <p className="font-display text-lg text-primary pt-4">
              Forever and always yours,
              <br />
              <span className="text-xl">With all my love 💗</span>
            </p>
          </div>
        </div>

        <NavigationButtons 
          backPath="/video-2" 
          nextPath="/valentine" 
          nextLabel="One last thing..." 
        />
      </div>
    </PageWrapper>
  );
};

export default LetterPage;
