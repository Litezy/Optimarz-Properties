import land1 from "@/assets/land-1.jpg";
import land2 from "@/assets/land-2.jpg";
import land3 from "@/assets/land-3.jpg";
import land4 from "@/assets/land-4.jpg";

export interface LandHolding {
  id: string;
  title: string;
  acreage: string;
  location: string;
  features: string[];
  image: string;
  url: string;
  status: "available" | "sold" | "pending";
}

export const landHoldings: LandHolding[] = [
  {
    id: "1",
    title: "Heritage Bloom",
    acreage: "11 - 15 Acres",
    location: "Gainsville, TX",
    features: ["Utilities Available", "Paved Road Access", "Gated Community", "Clear Title"],
    image: land1,
    status: "available",
    url: '/projects/heritage-bloom',
  },
  {
    id: "2",
    title: "Tranquill Retreat",
    acreage: "11 - 13 Acres",
    location: "HoneyGrove, TX",
    url: '/projects/tranquil-retreat',
    features: ["Highway Frontage", "Commercial Zoning", "Infrastructure Ready", "High Traffic"],
    image: land2,
    status: "available",
  },
  {
    id: "3",
    title: "Bonham Renaissance",
    acreage: "11 - 14 Acres",
    url: '/projects/bonham-renaissance',
    location: "Bonham, TX",
    features: ["Water Wells", "Fencing", "Barn Structures", "Mineral Rights"],
    image: land3,
    status: "pending",
  },
  {
    id: "4",
    title: "Small Town Charm",
    acreage: "11 - 15 Acres",
    url: '/projects/small-town-charm',
    location: "Wolfe City, TX",
    features: ["Waterfront Access", "Private Dock", "Scenic Views", "Fish & Wildlife"],
    image: land4,
    status: "available",
  },
];
