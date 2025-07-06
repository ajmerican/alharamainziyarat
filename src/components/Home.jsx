import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Shield, Clock } from 'lucide-react';
import heroImage from '../assets/heIQu9UfjUdU.webp';
import umrahImage from '../assets/86G9hmH3Bdsr.jpg';
import hajjImage from '../assets/ajwT4Ib58wTz.jpg';
import ticketingImage from '../assets/Id6ENz4JoOd1.jpg';

const Home = () => {
  const services = [
    {
      title: 'Umrah Services',
      description: 'Complete Umrah packages with accommodation, transportation, and guidance.',
      image: umrahImage,
      link: '/umrah',
      features: ['Visa Processing', 'Hotel Booking', 'Transportation', 'Guided Tours']
    },
    {
      title: 'Hajj Services',
      description: 'Comprehensive Hajj packages for the sacred pilgrimage journey.',
      image: hajjImage,
      link: '/hajj',
      features: ['Full Package', 'Expert Guidance', 'Group Support', 'Documentation']
    },
    {
      title: 'Ticketing Services',
      description: 'Flight bookings and travel arrangements for all destinations worldwide.',
      image: ticketingImage,
      link: '/ticketing',
      features: ['Flight Booking', 'Hotel Reservations', 'Travel Insurance', 'Best Prices']
    }
  ];

  const whyChooseUs = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Experienced Team',
      description: 'Years of experience in organizing spiritual journeys and travel services.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Trusted Service',
      description: 'Reliable and trustworthy service with thousands of satisfied customers.'
    },
    {
      icon: <Star className="h-8 w-8 text-blue-600" />,
      title: 'Quality Packages',
      description: 'Carefully curated packages to ensure comfort and spiritual fulfillment.'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your travel needs.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Al Haramain Ziyarat
          </h1>
          <p className="text-xl md:text-2xl mb-4 animate-fade-in-delay-1">
            Your Trusted Partner for Sacred Journeys
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fade-in-delay-2">
            Umrah • Hajj • Ticketing Services for All Destinations
          </p>
          <div className="space-x-4 animate-fade-in-delay-3">
            <Link 
              to="/umrah" 
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Explore Umrah Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive travel services for spiritual journeys and worldwide destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Star className="h-4 w-4 text-yellow-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Al Haramain Ziyarat?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing exceptional service and ensuring your journey is memorable and comfortable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your travel needs and let us help you plan the perfect spiritual journey or travel experience.
          </p>
          <div className="space-x-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/about" 
              className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

