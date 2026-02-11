import PageWrapper from "@/components/PageWrapper";
import NavigationButtons from "@/components/NavigationButtons";
import { Play } from "lucide-react";
import video from "@/assets/finalfinal.mp4";

const VideoPage2 = () => {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto w-full">
        <div className="text-center mb-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            play it bud
          </h2>
          <p className="text-muted-foreground font-body">
            unfortunately the software became pricey, and the idea became dicey
          </p>
        </div>

        <div className="romantic-card opacity-0 animate-fade-in-up animation-delay-200">
          <div className="aspect-video rounded-2xl bg-secondary overflow-hidden">
            <video src={video} controls className="w-full h-full" />
          </div>
        </div>

        <NavigationButtons backPath="/video-1" nextPath="/letter" />
      </div>
    </PageWrapper>
  );
};

export default VideoPage2;
