import Card from "@/components/ui/Card";
import BackBtn from "@/components/shared/BackBtn";
import GalleryCard, { GalleryProp } from "@/components/shared/GalleryCard";

const galleryData: GalleryProp[] = [
  {
    id: "1",
    title: "vs. Roosevelt Highlights",
    image:
      "https://images.unsplash.com/photo-1733648203550-0cacea85fa35?w=600&h=400&fit=crop",
    postedTime: "Posted 3 days ago",
  },
  {
    id: "2",
    title: "Official College Visit",
    image:
      "https://images.unsplash.com/photo-1720716428816-4c42d9c0cbd2?w=600&h=400&fit=crop",
    postedTime: "1 Week Ago",
  },
  {
    id: "3",
    title: "Hawaiian Islands 7v7 QB Camp Photo",
    image:
      "https://images.unsplash.com/photo-1720716429002-cf8206d582b5?w=600&h=400&fit=crop",
    postedTime: "2 Week Ago",
  },
  {
    id: "4",
    title: "vs. Saint Peters",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    postedTime: "3 Week Ago",
  },
  {
    id: "5",
    title: "vs. Roosevelt Highlights",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
    postedTime: "Posted 3 days ago",
  },
  {
    id: "6",
    title: "Official College Visit",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    postedTime: "1 Week Ago",
  },
  {
    id: "7",
    title: "Hawaiian Islands 7v7 QB Camp Photo",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
    postedTime: "2 Week Ago",
  },
  {
    id: "8",
    title: "vs. Saint Peters",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    postedTime: "3 Week Ago",
  },
  {
    id: "9",
    title: "vs. Saint Peters",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    postedTime: "3 Week Ago",
  },
];

const GalleryHighLightsPage = () => {
  return (
    <Card className="md:p-8 after:absolute after:size-48 after:bg-gradient-to-tr after:blur-3xl after:from-blue-400 after:to-transparent after:bottom-0 after:left-0 after:z-[-1]">
      <BackBtn title="Gallery & Highlights" href="/explore-athletes" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryData.map((gallery) => (
          <GalleryCard key={gallery.id} gallery={gallery} />
        ))}
      </div>
    </Card>
  );
};

export default GalleryHighLightsPage;
