import { primaryServiceNames } from "@/lib/client-content";
import { clientImages, type ClientImageId } from "@/lib/client-images";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description?: string;
  image: string;
  alt: string;
  caption: string;
}

export interface ServiceGroup {
  id: string;
  chapter: string;
  range: string;
  dark: boolean;
  services: ServiceItem[];
}

// Exact supplied headings. Source-image descriptions are unavailable, so the
// earlier neutral summaries are omitted. All images are illustrative, not project
// records. Image 13 remains excluded pending publication approval.
const imageIds: ClientImageId[] = [8, 6, 14, 18, 10, 8, 17, 19, 10, 11, 10, 17, 15, 17, 21, 9, 20, 17, 24, 23];
const groupIds = ["redevelopment", "legal", "financial", "execution"];

export const serviceGroups: ServiceGroup[] = groupIds.map((id, groupIndex) => {
  const start = groupIndex * 5;
  return {
    id,
    chapter: String(groupIndex + 1).padStart(2, "0"),
    range: `${String(start + 1).padStart(2, "0")}–${String(start + 5).padStart(2, "0")}`,
    dark: groupIndex % 2 === 1,
    services: primaryServiceNames.slice(start, start + 5).map((title, index) => {
      const number = String(start + index + 1).padStart(2, "0");
      const imageId = imageIds[start + index];
      const image = clientImages[imageId];
      return {
        id: `service-${number}`, number, title,
        image: `/images/${imageId}.${imageId <= 4 ? "png" : "jpeg"}`,
        alt: image.alt,
        caption: image.caption,
      };
    }),
  };
});
