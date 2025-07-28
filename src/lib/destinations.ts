
export type Destination = {
  id: string;
  name: string;
  continent: string;
  image: string;
  gallery: string[];
  description: string;
  details: string;
  attractions: { name: string; description: string }[];
  popular: boolean;
};

export const destinations: Destination[] = [
  {
    id: "sigiriya-matale",
    name: "Sigiriya, Matale",
    continent: "Asia",
    image: "https://placehold.co/600x800.png",
    gallery: [
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
    ],
    description: "An ancient rock fortress with breathtaking views and stunning frescoes.",
    details: "Sigiriya, or Lion Rock, is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. The name refers to a site of historical and archaeological significance that is dominated by a massive column of rock nearly 200 metres (660 ft) high.",
    attractions: [
      { name: "Lion Rock", description: "The iconic rock fortress itself." },
      { name: "Sigiriya Frescoes", description: "Ancient paintings of beautiful maidens." },
      { name: "Water Gardens", description: "Elaborate and ancient landscaped gardens." },
    ],
    popular: true,
  },
  {
    id: "ruwanvalisaya-anuradhapura",
    name: "Ruwanvalisaya, Anuradapura",
    continent: "Asia",
    image: "https://placehold.co/600x800.png",
    gallery: [
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
    ],
    description: "A sacred Buddhist stupa, radiating peace and historical grandeur.",
    details: "The Ruwanwelisaya is a stupa and a hemispherical structure containing relics, in Sri Lanka, considered sacred to many Buddhists all over the world. It was built by King Dutugemunu c. 140 B.C., who became King of all Sri Lanka after a war in which the Chola King Elara, was defeated.",
    attractions: [
      { name: "The Great Stupa", description: "One of the world's tallest monuments." },
      { name: "Vahalkada", description: "The gateways at the four cardinal points." },
      { name: "Elephant Wall", description: "A protective wall adorned with elephant figures." },
    ],
    popular: true,
  },
    {
    id: "galle-fort-galle",
    name: "Galle Fort, Galle",
    continent: "Asia",
    image: "https://placehold.co/600x800.png",
    gallery: [
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
    ],
    description: "A historic seaside fortress blending European architecture and Sri Lankan tradition.",
    details: "Galle Fort, in the Bay of Galle on the southwest coast of Sri Lanka, was built first in 1588 by the Portuguese, then extensively fortified by the Dutch during the 17th century from 1649 onwards. It is a historical, archaeological and architectural heritage monument, which even after more than 432 years maintains a polished appearance.",
    attractions: [
      { name: "Galle Lighthouse", description: "An iconic lighthouse with stunning ocean views." },
      { name: "Dutch Reformed Church", description: "A historic church with unique architecture." },
      { name: "Flag Rock", description: "A popular spot for watching sunsets." },
    ],
    popular: true,
  },
    {
    id: "yala-hambanthota",
    name: "Yala, Hambanthota",
    continent: "Asia",
    image: "https://placehold.co/600x800.png",
    gallery: [
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
    ],
    description: "A vast national park, famous for its leopard population and diverse wildlife.",
    details: "Yala National Park is the most visited and second largest national park in Sri Lanka, bordering the Indian Ocean. The park consists of five blocks, two of which are now open to the public, and also adjoining parks. The park is best known for its variety of wild animals. It is important for the conservation of Sri Lankan elephants, Sri Lankan leopards and aquatic birds.",
    attractions: [
      { name: "Leopard Safari", description: "Experience the thrill of spotting leopards in their natural habitat." },
      { name: "Block 1", description: "The most popular area for wildlife sightings." },
      { name: "Tsunami Memorial", description: "A monument dedicated to the victims of the 2004 tsunami." },
    ],
    popular: true,
  },
  {
    id: "paris-france",
    name: "Paris, France",
    continent: "Europe",
    image: "https://placehold.co/600x400.png",
    gallery: [
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
    ],
    description: "The city of love, lights, and art, offering iconic landmarks and charming streets.",
    details: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
    attractions: [
      { name: "Eiffel Tower", description: "Iconic wrought-iron lattice tower." },
      { name: "Louvre Museum", description: "Home to masterpieces like the Mona Lisa." },
      { name: "Notre-Dame Cathedral", description: "A masterpiece of French Gothic architecture." },
    ],
    popular: false,
  },
  {
    id: "kyoto-japan",
    name: "Kyoto, Japan",
    continent: "Asia",
    image: "https://placehold.co/600x400.png",
    gallery: [
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
    ],
    description: "Experience ancient temples, serene gardens, and traditional geishas.",
    details: "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses. It’s also known for formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes, and geisha, female entertainers often found in the Gion district.",
    attractions: [
      { name: "Kinkaku-ji (Golden Pavilion)", description: "A stunning Zen Buddhist temple." },
      { name: "Fushimi Inari-taisha", description: "Famous for its thousands of vermilion torii gates." },
      { name: "Arashiyama Bamboo Grove", description: "A magical, sprawling bamboo forest." },
    ],
    popular: false,
  },
  {
    id: "cairo-egypt",
    name: "Cairo, Egypt",
    continent: "Africa",
    image: "https://placehold.co/600x400.png",
    gallery: [
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
    ],
    description: "Discover the heart of ancient Egypt, from the Pyramids to bustling bazaars.",
    details: "Cairo, Egypt’s sprawling capital, is set on the Nile River. At its heart is Tahrir Square and the vast Egyptian Museum, a trove of antiquities including royal mummies and gilded King Tutankhamun artifacts. Nearby, Giza is the site of the iconic pyramids and Great Sphinx, dating to the 26th century BC. In Gezira Island’s leafy Zamalek district, 19th-century mansions house hotels and embassies.",
    attractions: [
      { name: "Pyramids of Giza", description: "The last of the Seven Wonders of the Ancient World." },
      { name: "Khan el-Khalili", description: "A famous bazaar and souq in the historic center." },
      { name: "The Egyptian Museum", description: "Home to an extensive collection of ancient Egyptian antiquities." },
    ],
    popular: false,
  },
  {
    id: "rio-de-janeiro-brazil",
    name: "Rio de Janeiro, Brazil",
    continent: "South America",
    image: "https://placehold.co/600x400.png",
    gallery: [
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
    ],
    description: "Famous for its carnival, beaches, and the Christ the Redeemer statue.",
    details: "Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain, a granite peak with cable cars to its summit. The city is also known for its sprawling favelas (shanty towns). Its raucous Carnival festival, featuring parade floats, flamboyant costumes and samba dancers, is considered the world’s largest.",
    attractions: [
      { name: "Christ the Redeemer", description: "An Art Deco statue of Jesus Christ." },
      { name: "Sugarloaf Mountain", description: "A peak situated at the mouth of Guanabara Bay." },
      { name: "Copacabana Beach", description: "One of the most famous beaches in the world." },
    ],
    popular: false,
  },
  {
    id: "sydney-australia",
    name: "Sydney, Australia",
    continent: "Australia",
    image: "https://placehold.co/600x400.png",
    gallery: [
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
    ],
    description: "Home to the iconic Opera House and beautiful Bondi Beach.",
    details: "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby. Sydney Tower’s outdoor platform, the Skywalk, offers 360-degree views of the city, harbour and suburbs.",
    attractions: [
      { name: "Sydney Opera House", description: "A multi-venue performing arts centre." },
      { name: "Sydney Harbour Bridge", description: "An iconic steel through arch bridge." },
      { name: "Bondi Beach", description: "A popular beach and the name of the surrounding suburb." },
    ],
    popular: false,
  },
];

    