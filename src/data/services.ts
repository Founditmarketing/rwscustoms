export interface ServiceData {
  slug: string;
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: "custom-welding",
    title: "Custom Welding Services",
    image: "/services/RWScustomwelding.jpeg",
    shortDescription: "Precision fabrication, structural repairs, and heavy equipment metalwork built to withstand immense pressure.",
    fullDescription: "Our custom welding services are the backbone of RWS Customs. We provide heavy-duty, industrial-grade fabrication and structural repairs for both commercial and residential needs. From repairing heavy equipment and reinforcing structures to custom metal fabrication, our certified welders ensure every joint is built to withstand extreme pressure and wear."
  },
  {
    slug: "land-clearing",
    title: "Land Clearing",
    image: "/services/RWSlandclearing.jpeg",
    shortDescription: "Full acreage clearing, dense brush removal, and comprehensive site prep for new construction.",
    fullDescription: "Before you can build, you need a blank canvas. Our heavy-duty land clearing services tackle the densest brush, overgrown acreage, and challenging terrain. We utilize state-of-the-art machinery to swiftly and safely clear your property, preparing it for new construction, agricultural use, or expansive landscaping projects."
  },
  {
    slug: "dirt-spreading",
    title: "Dirt Spreading & Leveling",
    image: "/services/RWSdirtspreading.jpeg",
    shortDescription: "Professional grading and leveling services to ensure a solid, flat foundation for your project.",
    fullDescription: "A project is only as strong as its foundation. Our precision dirt spreading and grading services ensure your site is perfectly leveled and structurally sound. Whether you need a pad prepped for a new building, a driveway graded, or drainage issues resolved through strategic sloping, our operators deliver exacting results."
  },
  {
    slug: "stump-grinding",
    title: "Stump Grinding",
    image: "/services/RWSstumpgrinding.jpeg",
    shortDescription: "Efficient and thorough stump removal to clear your land completely and prevent future regrowth.",
    fullDescription: "Don't let leftover stumps become hazards or eyesores. Our commercial-grade stump grinding services completely eradicate stumps well below the surface level. This not only clears the way for seamless landscaping or construction but also prevents pest infestations and fungal growth often associated with rotting wood."
  },
  {
    slug: "trenching",
    title: "Trenching Services",
    image: "/services/RWStrenching.jpeg",
    shortDescription: "Precise trenching for utilities, drainage, and foundational work using top-tier excavation equipment.",
    fullDescription: "We provide highly accurate trenching services for all utility, plumbing, and electrical installations. Our experienced operators can navigate tight spaces and tough soil conditions, ensuring trenches are dug exactly to spec for pipelines, drainage systems, or foundational footings."
  },
  {
    slug: "trailer-rentals",
    title: "Trailer Rentals",
    image: "/services/RWStrailerrentals.jpeg",
    shortDescription: "Heavy-duty trailer rentals available for hauling equipment, materials, and machinery securely.",
    fullDescription: "When you need to move serious weight, our fleet of heavy-duty trailers is at your disposal. RWS Customs offers reliable, well-maintained trailer rentals perfect for hauling construction materials, heavy machinery, or agricultural equipment safely and securely across East Texas."
  }
];
