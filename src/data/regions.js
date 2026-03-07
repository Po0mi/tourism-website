const regions = [
  {
    id: 1,
    number: "01",
    direction: "North",
    name: "Luzon",
    description:
      "The largest island group, home to Manila, the Cordillera mountains, and the world-famous rice terraces of Banaue.",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&q=80",
    url: "https://maps.google.com/?q=Luzon,Philippines",
    stats: [
      { value: "38", label: "Provinces" },
      { value: "2,500+", label: "Islands" },
    ],
  },
  {
    id: 2,
    number: "02",
    direction: "Central",
    name: "Visayas",
    description:
      "The heart of the archipelago, known for Boracay's white beaches, Cebu's vibrant city life, and Bohol's Chocolate Hills.",
    image:
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1200&q=80",
    url: "https://maps.google.com/?q=Visayas,Philippines",
    stats: [
      { value: "16", label: "Provinces" },
      { value: "4,000+", label: "Islands" },
    ],
  },
  {
    id: 3,
    number: "03",
    direction: "South",
    name: "Mindanao",
    description:
      "The land of promise — rich in culture, biodiversity, and adventure. Home to Mt. Apo, Siargao, and vibrant indigenous traditions.",
    image:
      "https://images.unsplash.com/photo-1661200796377-33feee6f4691?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://maps.google.com/?q=Mindanao,Philippines",
    stats: [
      { value: "27", label: "Provinces" },
      { value: "1,000+", label: "Islands" },
    ],
  },
];

export default regions;
