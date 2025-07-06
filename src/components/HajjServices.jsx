import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Calendar, Users, Plane, Hotel, MapPin, FileText, Clock } from 'lucide-react';
import hajjHero from '../assets/ajwT4Ib58wTz.jpg';
import hajjImage1 from '../assets/LckbvKNuG8J5.jpg';
import hajjImage2 from '../assets/B6BCX7kLaIa5.png';

const HajjServices = () => {
  const packages = [
    {
      name: 'Standard Hajj Package',
      price: '$6,999',
      duration: '15 Days',
      image: hajjImage1,
      features: [
        'Round-trip flights',
        '3-star accommodation in Mecca & Medina',
        'Visa processing',
        'All transfers',
        'Experienced guide',
        'Group support',
        'Basic meals',
        'Hajj training sessions'
      ],
      popular: false
    },
    {
      name: 'Premium Hajj Package',
      price: '$9,999',
      duration: '18 Days',
      image: hajjImage2,
      features: [
        'Round-trip flights',
        '4-star accommodation in Mecca & Medina',
        'Visa processing',
        'All transfers',
        'Personal guide',
        'Small group support',
        'All meals included',
        'Comprehensive Hajj training',
        'Ziyarat tours',
        'Medical support'
      ],
      popular: true
    },
    {
      name: 'VIP Hajj Package',
      price: '$14,999',
      duration: '21 Days',
      image: hajjHero,
      features: [
        'Round-trip flights (Business class)',
        '5-star accommodation in Mecca & Medina',
        'Visa processing',
        'Private transfers',
        'Dedicated personal guide',
        'VIP group support',
        'Premium meals',
        'Extensive Hajj training',
        'Extended Ziyarat tours',
        '24/7 medical support',
        'Luxury amenities'
      ],
      popular: false
    }
  ];

  const hajjSteps = [
    {
      step: '1',
      title: 'Ihram',
      description: 'Enter the sacred state of Ihram before crossing the Miqat'
    },
    {
      step: '2',
      title: 'Tawaf al-Qudum',
      description: 'Perform the arrival Tawaf around the Kaaba'
    },
    {
      step: '3',
      title: 'Sa\'i',
      description: 'Walk seven times between Safa and Marwah hills'
    },
    {
      step: '4',
      title: 'Mina',
      description: 'Stay in Mina on the 8th day of Dhul Hijjah'
    },
    {
      step: '5',
      title: 'Arafat',
      description: 'Stand at Arafat on the 9th day of Dhul Hijjah'
    },
    {
      step: '6',
      title: 'Muzdalifah',
      description: 'Spend the night in Muzdalifah and collect pebbles'
    },
    {
      step: '7',
      title: 'Rami',
      description: 'Stone the pillars in Mina for three days'
    },
    {
      step: '8',
      title: 'Tawaf al-Ifadah',
      description: 'Perform the obligatory Tawaf after Hajj'
    }
  ];

  const inclusions = [
    {
      icon: <Plane className="h-6 w-6" />,
      title: 'Flight Arrangements',
      description: 'Round-trip flights with premium airlines'
    },
    {
      icon: <Hotel className="h-6 w-6" />,
      title: 'Accommodation',
      description: 'Quality hotels in Mecca and Medina'
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Visa Processing',
      description: 'Complete Hajj visa documentation'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Transportation',
      description: 'All transfers and local transportation'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Expert Guidance',
      description: 'Experienced Hajj guides and scholars'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Training Sessions',
      description: 'Pre-departure Hajj training and preparation'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${hajjHero})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Hajj Services</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Fulfill the fifth pillar of Islam with our comprehensive Hajj packages
          </p>
        </div>
      </section>

      {/* About Hajj Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Hajj</h2>
              <p className="text-lg text-gray-600 mb-6">
                Hajj is the annual Islamic pilgrimage to Mecca, Saudi Arabia, and is one of the five pillars of Islam. 
                It is a mandatory religious duty for Muslims that must be carried out at least once in their lifetime 
                by all adult Muslims who are physically and financially capable.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our Hajj packages are designed to provide you with spiritual guidance, comfort, and support throughout 
                this sacred journey. We ensure that all rituals are performed correctly while maintaining the highest 
                standards of service.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Hajj Pilgrims</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <img src={hajjImage1} alt="Hajj" className="rounded-lg shadow-lg" />
              <img src={hajjImage2} alt="Hajj" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Hajj Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Steps of Hajj</h2>
            <p className="text-xl text-gray-600">Understanding the sacred rituals of Hajj pilgrimage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hajjSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hajj Packages</h2>
            <p className="text-xl text-gray-600">Choose the package that best suits your needs for this sacred journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden ${pkg.popular ? 'ring-2 ring-green-500' : ''}`}>
                {pkg.popular && (
                  <div className="bg-green-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="h-48 overflow-hidden">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-green-600">{pkg.price}</span>
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
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 text-center block"
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Included</h2>
            <p className="text-xl text-gray-600">Our comprehensive Hajj packages include everything you need for a successful pilgrimage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inclusions.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-white transition-colors duration-300">
                <div className="flex justify-center mb-4 text-green-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice Section */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <Calendar className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-bold text-yellow-800 mb-2">Important Notice</h3>
                <p className="text-yellow-700 mb-4">
                  Hajj can only be performed during specific dates in the Islamic calendar (8th-12th of Dhul Hijjah). 
                  Due to limited quotas set by the Saudi government, early booking is essential.
                </p>
                <p className="text-yellow-700">
                  We recommend booking your Hajj package at least 6-12 months in advance to secure your spot and 
                  complete all necessary preparations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HajjServices;

