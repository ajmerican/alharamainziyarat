import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Plane, Hotel, Shield, Clock, Globe, CreditCard, Phone, MapPin } from 'lucide-react';
import ticketingHero from '../assets/Id6ENz4JoOd1.jpg';
import ticketingImage1 from '../assets/zdpYBaBoCz02.jpg';
import ticketingImage2 from '../assets/kfBrhNzHkUBa.jpg';
import destinationsImage from '../assets/3RuYaUeVJMKP.jpg';

const TicketingServices = () => {
  const services = [
    {
      icon: <Plane className="h-8 w-8" />,
      title: 'Flight Bookings',
      description: 'Domestic and international flight reservations with competitive prices',
      features: [
        'Best price guarantee',
        'Multiple airline options',
        'Flexible booking options',
        'Group discounts available'
      ]
    },
    {
      icon: <Hotel className="h-8 w-8" />,
      title: 'Hotel Reservations',
      description: 'Worldwide hotel bookings from budget to luxury accommodations',
      features: [
        'Wide range of hotels',
        'Instant confirmation',
        'Special rates',
        'Cancellation protection'
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Travel Insurance',
      description: 'Comprehensive travel insurance for peace of mind during your journey',
      features: [
        'Medical coverage',
        'Trip cancellation',
        'Baggage protection',
        '24/7 assistance'
      ]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Visa Services',
      description: 'Visa processing and documentation assistance for various countries',
      features: [
        'Document preparation',
        'Application processing',
        'Status tracking',
        'Expert guidance'
      ]
    }
  ];

  const destinations = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France',
    'Italy', 'Spain', 'Japan', 'South Korea', 'Thailand', 'Malaysia',
    'Singapore', 'UAE', 'Turkey', 'Egypt', 'India', 'Pakistan'
  ];

  const benefits = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Best Prices',
      description: 'Competitive rates and exclusive deals'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer assistance'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Secure Booking',
      description: 'Safe and secure payment processing'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Expert Advice',
      description: 'Professional travel consultation'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ticketingHero})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Ticketing Services</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Your gateway to worldwide destinations with professional travel services
          </p>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Travel Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive travel services to make your journey smooth and memorable, 
              from flight bookings to complete travel packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-orange-600 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Popular Destinations</h2>
              <p className="text-lg text-gray-600 mb-6">
                We offer ticketing services to destinations worldwide. Whether you're traveling for business, 
                leisure, or visiting family, we can help you find the best flights and accommodations.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {destinations.map((destination, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg text-center shadow-sm">
                    <span className="text-sm font-medium text-gray-700">{destination}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6">
                <strong>And many more destinations worldwide!</strong> Contact us for any specific destination requirements.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={destinationsImage} alt="Travel Destinations" className="rounded-lg shadow-lg" />
              <div className="space-y-4">
                <img src={ticketingImage1} alt="Travel Services" className="rounded-lg shadow-lg" />
                <img src={ticketingImage2} alt="Ticketing" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Ticketing Services?</h2>
            <p className="text-xl text-gray-600">We are committed to providing exceptional travel services with unmatched value</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div className="flex justify-center mb-4 text-orange-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Book</h2>
            <p className="text-xl text-gray-600">Simple steps to book your travel arrangements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-gray-600">
                Reach out to our travel experts via phone, email, or visit our office to discuss your travel requirements.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Quote</h3>
              <p className="text-gray-600">
                We'll provide you with the best available options and competitive quotes for your travel needs.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Confirm & Pay</h3>
              <p className="text-gray-600">
                Confirm your booking and make secure payment. We'll handle all the arrangements for your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Book Your Next Trip?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Contact our travel experts today to get the best deals on flights, hotels, and complete travel packages 
            for any destination worldwide.
          </p>
          <div className="space-x-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us Now
            </Link>
            <Link 
              to="/about" 
              className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Visit Our Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TicketingServices;

