import land1 from "@/assets/land-1.jpg";
import land2 from "@/assets/land-2.jpg";
import land3 from "@/assets/land-3.jpg";
import land4 from "@/assets/land-4.jpg";

export interface LandHolding {
  id: string;
  title: string;
  acreage: string;
  location: string;
  description: string;
  price: string;
  features: string[];
  image: string;
  status: "available" | "sold" | "pending";
}

export const landHoldings: LandHolding[] = [
  {
    id: "1",
    title: "Heritage Estates",
    acreage: "11 - 15 Acres",
    location: "Greenfield Valley, TX",
    description: "Prime residential development opportunity in a rapidly growing area. Perfect for custom home builders or families seeking spacious estate lots.",
    price: "$85,000 - $125,000",
    features: ["Utilities Available", "Paved Road Access", "Gated Community", "Clear Title"],
    image: land1,
    status: "available",
  },
  {
    id: "2",
    title: "Commercial Crossroads",
    acreage: "20 - 25 Acres",
    location: "Highway 75 Corridor",
    description: "Strategic commercial land near major highway interchange. Ideal for retail, office, or mixed-use development with high traffic counts.",
    price: "$250,000 - $350,000",
    features: ["Highway Frontage", "Commercial Zoning", "Infrastructure Ready", "High Traffic"],
    image: land2,
    status: "available",
  },
  {
    id: "3",
    title: "Rolling Meadows Ranch",
    acreage: "50 - 100 Acres",
    location: "Liberty Hills, TX",
    description: "Expansive agricultural land with rolling hills and mature trees. Perfect for ranching, farming, or recreational use with potential for subdivision.",
    price: "$500,000 - $850,000",
    features: ["Water Wells", "Fencing", "Barn Structures", "Mineral Rights"],
    image: land3,
    status: "pending",
  },
  {
    id: "4",
    title: "Lakeside Retreat",
    acreage: "5 - 10 Acres",
    location: "Crystal Lake, TX",
    description: "Rare waterfront property with pristine lake access. Perfect for luxury homes or recreational development with breathtaking views.",
    price: "$150,000 - $225,000",
    features: ["Waterfront Access", "Private Dock", "Scenic Views", "Fish & Wildlife"],
    image: land4,
    status: "available",
  },
];
