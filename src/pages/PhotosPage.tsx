import PageWrapper from "@/components/PageWrapper";
import NavigationButtons from "@/components/NavigationButtons";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import photo5 from "@/assets/photo-5.jpg";
import photo6 from "@/assets/photo-6.jpg";

const photos = [
  { src: photo1, alt: "Memory 1" },
  { src: photo2, alt: "Memory 2" },
  { src: photo3, alt: "Memory 3" },
  { src: photo4, alt: "Memory 4" },
  { src: photo5, alt: "Memory 5" },
  { src: photo6, alt: "Memory 6" },
];

const PhotosPage = () => {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            Some recent 📸 📸
          </h2>
          <p className="text-muted-foreground font-body"></p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`photo-card aspect-square opacity-0 animate-fade-in-up`}
              style={{
                animationDelay: `${index * 100 + 200}ms`,
                animationFillMode: "forwards",
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm italic mb-4 font-body"></p>

        <NavigationButtons backPath="/" nextPath="/video-1" />
      </div>
    </PageWrapper>
  );
};

export default PhotosPage;
