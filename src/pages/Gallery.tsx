import { motion } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    caption: "Visual Study 01",
    description: "Circuit board abstraction"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
    caption: "Matrix Frame",
    description: "Digital rain visualization"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
    caption: "Code Poetry",
    description: "Syntax as art"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop",
    caption: "Experimental Frame",
    description: "Light and innovation"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    caption: "Digital Workspace",
    description: "The modern creator's environment"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
    caption: "Nature's Architecture",
    description: "Organic systems and structures"
  }
];

const Gallery = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text">
              Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Curated aesthetic images and visual experiments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display font-bold text-lg mb-1">
                      {item.caption}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;