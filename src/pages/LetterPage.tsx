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
            <p className="font-display text-xl text-primary">Hey Zenya,</p>

            <p>
              Hope you enjoyed this little thing I put together. I know this
              year’s valentines day is not ideal. Each year for us has been
              pretty different, and let’s hope this is the one and only year
              when we are so far away from each other.
            </p>

            <p>
              The past couple months have definitely been a bit tough. We only
              got to see each other for a couple of hours since last semester,
              and having to adapt to going through college and not seeing you
              everyday or at least knowing that you were around, has definitely
              been a challenge. I think within those couple of months, we’ve had
              to adapt, work on ourselves, and also work on our communication a
              lot which I think is beneficial for us, but definitely was a
              challenge. I think the biggest thing that helped me kind of get
              over the hump, has genuinely been knowing that you are having fun
              and studying abroad is something that you have been talking about
              for so long. Knowing that you are able to live that out is great,
              and honestly just makes me happy about our situation right now
              even though you are so far away. Plus, it gives me a chance to
              explore Europe as well.
            </p>

            <p>
              There is not much more that I can say in this that I haven’t said
              in any previous letters, or said before in general, but I do
              really value our relationship and everything that we have been
              through thus far. I feel like we are progressing at a state where
              each year we are able to make some crazy new memories and
              experience crazy new things that always seem to top each other.
            </p>

            <p>
              You make me want to always do better, and push myself in many
              aspects. I cannot wait for our time together in Europe and also
              when you are back at college.
            </p>

            <p>Here’s to more memories and years ahead. See you very soon!</p>

            <p className="font-display text-lg text-primary pt-4">
              ---
              <br />
              <span className="text-xl">abhi </span>
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
