import React from 'react';
import { Users, Award, Globe, Heart, Target, Eye, CheckCircle } from 'lucide-react';
import aboutImage from '../assets/0JFBqoFeQbK5.webp';
import teamImage from '../assets/TqGwtKqyf9uc.jpg';

const About = () => {
  const stats = [
    { number: '2000+', label: 'Happy Pilgrims' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Countries Served' },
    { number: '24/7', label: 'Customer Support' }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Compassion',
      description: 'We understand the spiritual significance of your journey and treat every pilgrim with care and respect.'
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Reliability',
      description: 'Our commitment to excellence ensures that your travel experience is smooth and worry-free.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community',
      description: 'We build lasting relationships with our clients and support them throughout their spiritual journey.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Reach',
      description: 'With worldwide connections, we provide comprehensive travel services to any destination.'
    }
  ];

  const achievements = [
    'Licensed and authorized travel agency',
    'Certified by Saudi Ministry of Hajj and Umrah',
    'Member of International Air Transport Association (IATA)',
    'Accredited by Travel Industry Council',
    'ISO 9001:2015 Quality Management certified',
    'Award-winning customer service'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Your trusted partner in spiritual journeys and worldwide travel
          </p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Al Haramain Ziyarat</h2>
              <p className="text-lg text-gray-600 mb-6">
                Al Haramain Ziyarat is a specialized division of Travel Solution World Wide Inc., dedicated to 
                providing exceptional travel services with a focus on spiritual journeys and worldwide destinations. 
                Established with the vision of making sacred pilgrimages accessible and comfortable for all Muslims, 
                we have grown to become a trusted name in the travel industry.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our expertise extends beyond religious tourism to encompass comprehensive travel services including 
                flight bookings, hotel reservations, visa processing, and travel insurance for destinations across 
                the globe. We pride ourselves on delivering personalized service that meets the unique needs of each traveler.
              </p>
              <p className="text-lg text-gray-600">
                With years of experience and a deep understanding of both spiritual and conventional travel requirements, 
                we ensure that every journey with us is memorable, comfortable, and spiritually fulfilling.
              </p>
            </div>
            <div>
              <img src={teamImage} alt="Our Team" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-4" />
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600">
                To provide exceptional travel services that enable spiritual growth and cultural exploration while 
                ensuring comfort, safety, and peace of mind for all our travelers. We are committed to making 
                sacred journeys accessible and meaningful for Muslims worldwide, while also serving the broader 
                travel community with professional and reliable services.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-green-600 mr-4" />
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600">
                To be the leading travel service provider for spiritual journeys and worldwide destinations, 
                recognized for our commitment to excellence, integrity, and customer satisfaction. We envision 
                a world where every traveler can embark on their journey with confidence, knowing they have a 
                trusted partner supporting them every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div className="flex justify-center mb-4 text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Achievements</h2>
              <p className="text-lg text-gray-600 mb-8">
                We are proud of our accomplishments and the trust our clients have placed in us over the years. 
                Our certifications and achievements reflect our commitment to excellence and professional standards.
              </p>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <Award className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700 text-lg">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Travel Solution World Wide Inc.</h3>
              <p className="text-gray-600 mb-6">
                Al Haramain Ziyarat operates as a specialized division of Travel Solution World Wide Inc., 
                a well-established travel company with a global presence. This partnership allows us to 
                leverage extensive resources, worldwide connections, and industry expertise to provide 
                superior service to our clients.
              </p>
              <p className="text-gray-600">
                Our parent company's reputation for excellence and innovation in the travel industry 
                strengthens our ability to deliver exceptional experiences and maintain the highest 
                standards of service quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied travelers who have trusted us with their spiritual journeys and travel needs. 
            Contact us today to begin planning your next adventure.
          </p>
          <div className="space-x-4">
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us Today
            </a>
            <a 
              href="/umrah" 
              className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

