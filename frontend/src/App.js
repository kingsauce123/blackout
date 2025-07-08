import React, { useState, useEffect } from 'react';
import './App.css';

const beverlyHillsCatfish = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('appetizers');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Menu data with editable prices
  const menuData = {
    appetizers: [
      { name: 'Catfish Bites', price: '$12.99', description: 'Golden fried catfish pieces with spicy remoulade' },
      { name: 'Catfish Cakes', price: '$14.99', description: 'Pan-seared catfish cakes with cajun aioli' },
      { name: 'Smoked Catfish Dip', price: '$11.99', description: 'Creamy smoked catfish dip with house chips' }
    ],
    mains: [
      { name: 'Grilled Catfish', price: '$18.99', description: 'Perfectly grilled catfish with lemon butter and herbs' },
      { name: 'Baked Catfish', price: '$17.99', description: 'Herb-crusted baked catfish with seasonal vegetables' },
      { name: 'Fried Catfish Platter', price: '$19.99', description: 'Classic southern fried catfish with coleslaw and fries' },
      { name: 'Blackened Catfish', price: '$20.99', description: 'Cajun-spiced blackened catfish with dirty rice' },
      { name: 'Catfish Po\' Boy', price: '$15.99', description: 'Fried catfish on French bread with lettuce, tomato, and mayo' },
      { name: 'Catfish Tacos', price: '$16.99', description: 'Grilled catfish tacos with mango salsa and cilantro lime crema' }
    ],
    sides: [
      { name: 'Hush Puppies', price: '$6.99', description: 'Traditional cornmeal fritters' },
      { name: 'Mac & Cheese', price: '$7.99', description: 'Creamy three-cheese macaroni' },
      { name: 'Coleslaw', price: '$5.99', description: 'Fresh cabbage slaw with tangy dressing' },
      { name: 'Cajun Fries', price: '$6.99', description: 'Seasoned fries with cajun spices' }
    ]
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('section[id]');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          // Add any scroll-based animations here
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🐟</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Beverly Hills Catfish
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-600 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')`,
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-red-900/80" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <span className="text-white text-4xl">🐟</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
              Beverly Hills Catfish
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Where Southern Comfort Meets California Style
            </p>
            <p className="text-lg md:text-xl mb-12 text-orange-200 max-w-2xl mx-auto">
              Experience the finest catfish dishes prepared with love, tradition, and a touch of Beverly Hills elegance
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('menu')}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              View Our Menu
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/30"
            >
              Make Reservation
            </button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gradient-to-b from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Our Catfish Menu
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover our signature catfish dishes, each prepared with the finest ingredients and authentic Southern flavors
            </p>
          </div>

          {/* Menu Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(menuData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveMenuItem(category)}
                className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                  activeMenuItem === category
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-orange-100 shadow-md'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuData[activeMenuItem].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-orange-400 to-red-400 relative overflow-hidden">
                  {index === 0 && activeMenuItem === 'mains' && (
                    <img 
                      src="https://images.unsplash.com/photo-1708388464725-5c62c6e4574d" 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {index === 1 && activeMenuItem === 'mains' && (
                    <img 
                      src="https://images.unsplash.com/photo-1602022131768-033a8796e78d" 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {index === 2 && activeMenuItem === 'mains' && (
                    <img 
                      src="https://images.unsplash.com/photo-1662041648634-684d7d09ebbf" 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {index === 3 && activeMenuItem === 'mains' && (
                    <img 
                      src="https://images.pexels.com/photos/29516766/pexels-photo-29516766.jpeg" 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-white font-bold text-xl">{item.name}</h3>
                      <span className="text-yellow-300 font-bold text-2xl">{item.price}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 text-white">
                Our Story
              </h2>
              <p className="text-xl text-orange-100 mb-6 leading-relaxed">
                Beverly Hills Catfish brings together the best of Southern comfort food with California's fresh, innovative approach to dining. Our skilled chefs transform humble catfish into extraordinary culinary experiences.
              </p>
              <p className="text-lg text-orange-200 mb-8 leading-relaxed">
                From our signature grilled catfish with herb butter to our famous fried catfish platter, every dish is crafted with passion and served with pride. We source only the freshest catfish and prepare each meal to order.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                  <h3 className="font-bold text-white mb-2">Fresh Daily</h3>
                  <p className="text-orange-100">Catfish delivered fresh every morning</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                  <h3 className="font-bold text-white mb-2">Expert Chefs</h3>
                  <p className="text-orange-100">Southern-trained culinary masters</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/3296394/pexels-photo-3296394.jpeg"
                  alt="Chef preparing catfish"
                  className="rounded-2xl shadow-2xl"
                />
                <img 
                  src="https://images.pexels.com/photos/3296392/pexels-photo-3296392.jpeg"
                  alt="Chef cutting fish"
                  className="rounded-2xl shadow-2xl mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Visit Us Today
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experience the finest catfish in Beverly Hills. Make a reservation or drop by for an unforgettable dining experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Restaurant Image */}
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg"
                alt="Restaurant interior"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Elegant Dining Experience</h3>
                <p className="text-orange-200">Comfortable seating in a warm, welcoming atmosphere</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Restaurant Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Address</h4>
                      <p className="text-gray-600">123 Beverly Hills Blvd, Beverly Hills, CA 90210</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Phone</h4>
                      <p className="text-gray-600">(310) 555-FISH</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🕐</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Hours</h4>
                      <p className="text-gray-600">Mon-Thu: 11am-10pm</p>
                      <p className="text-gray-600">Fri-Sat: 11am-11pm</p>
                      <p className="text-gray-600">Sun: 12pm-9pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Make a Reservation</h3>
                <p className="text-orange-100 mb-6">Call us or visit in person to reserve your table for the best catfish experience in Beverly Hills!</p>
                <button className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-orange-50 transition-colors duration-200">
                  Call Now: (310) 555-FISH
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🐟</span>
                </div>
                <h3 className="text-xl font-bold">Beverly Hills Catfish</h3>
              </div>
              <p className="text-gray-400">
                The finest catfish restaurant in Beverly Hills, serving Southern comfort food with California flair.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-orange-400">Home</button></li>
                <li><button onClick={() => scrollToSection('menu')} className="hover:text-orange-400">Menu</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-orange-400">About</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-orange-400">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 cursor-pointer">
                  <span className="text-white">📘</span>
                </div>
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 cursor-pointer">
                  <span className="text-white">📷</span>
                </div>
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 cursor-pointer">
                  <span className="text-white">🐦</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Beverly Hills Catfish. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default beverlyHillsCatfish;