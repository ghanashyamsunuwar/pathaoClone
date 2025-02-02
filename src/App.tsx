import { motion } from 'framer-motion';
import { Bike, Car, Package, Download, ChevronRight, Star, MapPin, Phone, Mail } from 'lucide-react';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    { icon: <Bike size={32} />, title: 'Bike', description: 'Quick rides across the city' },
    { icon: <Car size={32} />, title: 'Car', description: 'Comfortable car rides' },
    { icon: <Package size={32} />, title: 'Delivery', description: 'Fast & reliable delivery' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white text-2xl font-bold"
            >
              Pathao
            </motion.div>
            <div className="hidden md:flex space-x-8 text-white">
              <a href="#" className="hover:text-purple-200">Home</a>
              <a href="#" className="hover:text-purple-200">Services</a>
              <a href="#" className="hover:text-purple-200">About</a>
              <a href="#" className="hover:text-purple-200">Contact</a>
            </div>
          </div>
        </nav>

        <motion.div 
          className="container mx-auto px-6 py-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Kathmandu, Your Move
              </h1>
              <p className="text-purple-100 text-xl mb-8">
                Experience the fastest way to move around your city with Pathao's reliable services.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold flex items-center"
              >
                Download App <Download className="ml-2" size={20} />
              </motion.button>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <motion.img 
                src="https://images.unsplash.com/photo-1593765087302-d8418905c2e0?auto=format&fit=crop&w=800&q=80"
                alt="Delivery Hero"
                className="rounded-lg shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600">Choose from our wide range of services</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-purple-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="mt-4 text-purple-600 font-semibold flex items-center"
                >
                  Learn more <ChevronRight size={20} />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Pathao?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Star className="text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Best in Class Service</h3>
                    <p className="text-gray-600">Experience reliable and professional service every time.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-purple-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Wide Coverage</h3>
                    <p className="text-gray-600">Available across major cities and expanding.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Features"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Pathao Clone</h3>
              <p className="text-gray-400">Moving people and things that matter.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Ride</a></li>
                <li><a href="#" className="hover:text-white">Delivery</a></li>
                <li><a href="#" className="hover:text-white">Food</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><Phone size={16} className="mr-2" /> +977 1234567</li>
                <li className="flex items-center"><Mail size={16} className="mr-2" /> support@pathao.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Pathao. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;