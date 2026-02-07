import PageWrapper from '@/components/PageWrapper';
import NavigationButtons from '@/components/NavigationButtons';
import { Play } from 'lucide-react';

const VideoPage1 = () => {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto w-full">
        <div className="text-center mb-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            One of my favorite videos of us 🎬
          </h2>
          <p className="text-muted-foreground font-body">
            Every moment with you is worth replaying
          </p>
        </div>

        <div className="romantic-card opacity-0 animate-fade-in-up animation-delay-200">
          {/* Video placeholder - replace with actual video */}
          <div className="aspect-video rounded-2xl bg-secondary flex items-center justify-center overflow-hidden">
            {/* Replace the comment below with your actual video */}
            {/* <video src="/your-video.mp4" controls className="w-full h-full object-cover rounded-2xl" /> */}
            
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Play className="w-10 h-10 text-primary ml-1" />
              </div>
              <p className="text-muted-foreground font-body">
                Your first video goes here ✨
              </p>
              <p className="text-sm text-muted-foreground/70 mt-2 font-body">
                Replace this with a video URL or upload
              </p>
            </div>
          </div>
        </div>

        <NavigationButtons backPath="/photos" nextPath="/video-2" />
      </div>
    </PageWrapper>
  );
};

export default VideoPage1;
