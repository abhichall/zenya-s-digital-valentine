import PageWrapper from "@/components/PageWrapper";
import NavigationButtons from "@/components/NavigationButtons";
import { Heart } from "lucide-react";

const LetterPage = () => {
  return (
    <PageWrapper>
      <div className="max-w-2xl mx-auto w-full">
        <div className="text-center mb-8 animate-fade-in-up">
          <Heart className="w-12 h-12 mx-auto text-primary fill-primary/30 mb-4 animate-pulse-heart" />
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            letter 💌
          </h2>
        </div>

        <div className="love-letter opacity-0 animate-fade-in-up animation-delay-200">
          <div className="font-body text-foreground/90 leading-relaxed space-y-4">
            <p className="font-display text-xl text-primary">Zenya,</p>

            <p>say smt here</p>

            <p>more here</p>

            <p>more</p>

            <p>more</p>

            <p className="font-display text-lg text-primary pt-4">
              signature
              <br />
              <span className="text-xl">signature </span>
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
