import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Calendar, Users, Plane, Hotel, MapPin, FileText } from 'lucide-react';
import umrahHero from '../assets/86G9hmH3Bdsr.jpg';
import umrahImage1 from '../assets/0JFBqoFeQbK5.webp';
import umrahImage2 from '../assets/TqGwtKqyf9uc.jpg';

const UmrahServices = () => {
  const packages = [
    {
      name: 'Umrah with Turkey Side Tour (Toronto)',
      price: '$2,989*', // Per person, quad occupancy
      duration: 'Oct 8 - Oct 20, 2025 (13 Days)',
      image: umrahImage1,
      features: [
        'Insha Allah 1 Jumah in Makkah and 1 Jumah in Madinah',
        'International airfare & Ground transportation',
        'Guided Ziyarat tours',
        'Complimentary daily breakfast',
        'Istanbul: Hotel accommodation & airport transfer',
        'Price Excludes: Saudi Visa Fee ($199 extra for Canadian passport holders without existing visa)'
      ],
      popular: true
    },
    {
      name: 'Umrah with Turkey Side Tour (Edmonton)',
      price: '$2,989*', // Per person, quad occupancy
      duration: 'Oct 8 - Oct 20, 2025 (13 Days)',
      image: umrahImage2,
      features: [
        'Insha Allah 1 Jumah in Makkah and 1 Jumah in Madinah',
        'International airfare & Ground transportation',
        'Guided Ziyarat tours',
        'Complimentary daily breakfast',
        'Istanbul: Hotel accommodation & airport transfer',
        'Price Excludes: Saudi Visa Fee ($199 extra for Canadian passport holders without existing visa)',
        'Price from Edmonton: $300 to $600 extra (depends on booking/airline)'
      ],
      popular: false
    },
    {
      name: 'Economy Package',
      price: '$1,999',
      duration: '7 Days',
      image: umrahImage1,
      features: [
        'Round-trip flights',
        '3-star hotel accommodation',
        'Visa processing',
        'Airport transfers',
        'Basic guidance',
        'Group transportation'
      ],
      popular: false
    },
    {
      name: 'Deluxe Package',
      price: '$2,999',
      duration: '10 Days',
      image: umrahImage2,
      features: [
        'Round-trip flights',
        '4-star hotel accommodation',
        'Visa processing',
        'Airport transfers',
        'Expert guidance',
        'Private transportation',
        'Ziyarat tours',
        'Meals included'
      ],
      popular: false
    },
    {
      name: 'Premium Package',
      price: '$4,499',
      duration: '14 Days',
      image: umrahHero,
      features: [
        'Round-trip flights',
        '5-star hotel accommodation',
        'Visa processing',
        'Airport transfers',
        'Personal guide',
        'Private transportation',
        'Extended Ziyarat tours',
        'All meals included',
        'VIP services'
      ],
      popular: false
    }
  ];

  const inclusions = [
    {
      icon: <Plane className="h-6 w-6" />,
      title: 'Flight Arrangements',
      description: 'Round-trip flights with reputable airlines'
    },
    {
      icon: <Hotel className="h-6 w-6" />,
      title: 'Accommodation',
      description: 'Comfortable hotels near Haram'
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Visa Processing',
      description: 'Complete visa documentation and processing'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Transportation',
      description: 'Airport transfers and local transportation'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Expert Guidance',
      description: 'Experienced guides for spiritual journey'
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Flexible Dates',
      description: 'Multiple departure dates available'
    }
  ];

  const requirements = [
    'Valid passport with at least 6 months validity',
    'Passport-sized photographs',
    'Vaccination certificates (if required)',
    'Completed application forms',
    'Proof of relationship for Mahram (for women)',
    'Travel insurance documentation'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${umrahHero})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Umrah Services</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Experience the spiritual journey of a lifetime with our comprehensive Umrah packages
          </p>
        </div>
      </section>

      {/* About Umrah Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Umrah</h2>
              <p className="text-lg text-gray-600 mb-6">
                Umrah is a pilgrimage to Mecca, Saudi Arabia, that can be undertaken at any time of the year. 
                Unlike Hajj, which has specific dates, Umrah offers flexibility and is often called the "lesser pilgrimage."
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our comprehensive Umrah packages are designed to provide you with a spiritually enriching experience 
                while ensuring comfort and convenience throughout your journey.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-gray-600">Pilgrims Served</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={umrahImage1} alt="Umrah" className="rounded-lg shadow-lg" />
              <img src={umrahImage2} alt="Umrah" className="rounded-lg shadow-lg mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Umrah Packages</h2>
            <p className="text-xl text-gray-600">Choose the package that best suits your needs and budget</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden ${pkg.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {pkg.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{pkg.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-blue-600">{pkg.price}</span>
                    <span className="text-gray-600">{pkg.duration}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-center block"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Included</h2>
            <p className="text-xl text-gray-600">Our comprehensive packages include everything you need for a comfortable journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inclusions.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div className="flex justify-center mb-4 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Required Documents</h2>
              <p className="text-lg text-gray-600 mb-6">
                Please ensure you have the following documents ready for your Umrah application:
              </p>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-6">
                Our experienced team is here to assist you with document preparation and answer any questions about your Umrah journey.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UmrahServices;

