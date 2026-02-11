import PageWrapper from "@/components/PageWrapper";
import NavigationButtons from "@/components/NavigationButtons";
import { Play } from "lucide-react";
import video from "@/assets/final.mp4";

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
          <div className="aspect-video rounded-2xl bg-secondary flex items-center justify-center overflow-hidden">
            <video
              src={video}
              controls
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        <NavigationButtons backPath="/photos" nextPath="/video-2" />
      </div>
    </PageWrapper>
  );
};

export default VideoPage1;
