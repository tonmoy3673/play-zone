"use client";

import Card from "@/components/ui/Card";
import { SectionHeader } from "@/components/shared/SectionHeader";
import GalleryCard, { GalleryProp } from "@/components/shared/GalleryCard";

const galleryData: GalleryProp[] = [
  {
    id: "1",
    title: "vs. Roosevelt Highlights",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
    postedTime: "Posted 3 days ago",
  },
  {
    id: "2",
    title: "Official College Visit",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    postedTime: "1 Week Ago",
  },
  {
    id: "3",
    title: "Hawaiian Islands 7v7 QB Camp Photo",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
    postedTime: "2 Week Ago",
  },
  {
    id: "4",
    title: "vs. Saint Peters",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    postedTime: "3 Week Ago",
  },
];

export default function GalleryHighlights() {
  return (
    <Card>
      <SectionHeader href="/gallery-highlights" title="Gallery & Highlights" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {galleryData.map((gallery) => (
          <GalleryCard key={gallery.id} gallery={gallery} />
        ))}
      </div>
    </Card>
  );
}
