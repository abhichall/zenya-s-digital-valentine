import PageWrapper from '@/components/PageWrapper';
import NavigationButtons from '@/components/NavigationButtons';
import { Play } from 'lucide-react';

const VideoPage2 = () => {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto w-full">
        <div className="text-center mb-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            And this one always makes me smile 😊
          </h2>
          <p className="text-muted-foreground font-body">
            Your laugh is my favorite sound in the world
          </p>
        </div>

        <div className="romantic-card opacity-0 animate-fade-in-up animation-delay-200">
          {/* Video placeholder - replace with actual video */}
          <div className="aspect-video rounded-2xl bg-secondary flex items-center justify-center overflow-hidden">
            {/* Replace the comment below with your actual video */}
            {/* <video src="/your-video-2.mp4" controls className="w-full h-full object-cover rounded-2xl" /> */}
            
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-full bg-accent/30 flex items-center justify-center mx-auto mb-4">
                <Play className="w-10 h-10 text-primary ml-1" />
              </div>
              <p className="text-muted-foreground font-body">
                Your second video goes here 💕
              </p>
              <p className="text-sm text-muted-foreground/70 mt-2 font-body">
                Add another special memory
              </p>
            </div>
          </div>
        </div>

        <NavigationButtons backPath="/video-1" nextPath="/letter" />
      </div>
    </PageWrapper>
  );
};

export default VideoPage2;
