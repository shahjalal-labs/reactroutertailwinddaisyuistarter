import { motion } from "framer-motion";

const trendingSpots = [
  {
    name: "🌊 Saint Martin",
    image:
      "https://images.deepai.org/art-image/6d1242776af24b29989fcb1f05e2a9f7/colorful-paddle-boat-floating-on-small-forest-lake-in.jpg",
    description:
      "A serene island in the Bay of Bengal, famous for crystal clear water, coral reefs, and calm vibes.",
  },
  {
    name: "🏞️ Sajek Valley",
    image:
      "https://images.deepai.org/art-image/3be7075b97b143d19ca910a9c7621cac/aerial-view-of-saint-martins-turquoise-coast-with-cor.jpg",
    description:
      "A dreamy mountain valley in Rangamati with endless green, cloud-kissed mornings, and cottage.",
  },
  {
    name: "🏖️ Cox’s Bazar",
    image:
      "https://images.deepai.org/art-image/72bca9114b0941e89cdb0ea0a22f5553/cox-s-bazar-sea-beach-during-sunset-with-silhouettes-.jpg",
    description:
      "Home to the world’s longest sea beach, perfect for beach lovers, surfers, and seafood enthusiasts.",
  },
  {
    name: "🌲 Bandarban",
    image:
      "https://images.deepai.org/art-image/b34dc26354ae436595ba69b3a982f9c5/a-river-and-forest-scenic-beauty-with-the-sunset-thum.jpg",
    description:
      "Adventure-packed hills, waterfalls, tribal villages, and peaceful trekking through nature’s best.",
  },
];

const TrendingDestinations = () => {
  return (
    <section className="bg-[#0b1120] py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-fuchsia-400 via-sky-400 to-purple-500 bg-clip-text text-transparent animate-pulse drop-shadow-lg"
        >
          🔥 Trending Destinations
        </motion.h2>
        <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
          Discover the most loved destinations by our travelers this week.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {trendingSpots.map((spot, i) => (
            <div data-aos="flip-left" key={spot.name}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative overflow-hidden group rounded-2xl border border-sky-700 bg-gradient-to-br from-[#111827] to-[#0f172a] shadow-[0_0_30px_#0ea5e944] hover:shadow-[0_0_40px_#38bdf8aa] transition-all duration-300"
              >
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
                <div className="absolute top-3 left-3 bg-sky-700/90 px-3 py-1 text-xs rounded-full font-semibold shadow shadow-cyan-800">
                  🚀 Hot Spot
                </div>
                <div className="relative z-10 p-4 bg-black/60 backdrop-blur-md">
                  <h3 className="text-lg font-bold text-sky-300">
                    {spot.name}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    {spot.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;
