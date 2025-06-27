import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, Shield, Star, Wrench, Droplets, AlertTriangle, ArrowRight } from 'lucide-react';

const Home = () => {
  const featuredServices = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-orange-500" />,
      title: "Emergency Plumbing",
      description: "24/7 emergency service for urgent plumbing issues",
      link: "/services"
    },
    {
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: "Leak Detection",
      description: "Advanced technology to find and fix leaks quickly",
      link: "/services"
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      title: "Pipe Repair",
      description: "Expert pipe installation and repair services",
      link: "/services"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="relative min-h-screen bg-cover bg-center flex items-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/8088492/pexels-photo-8088492.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Plumbing Services You Can Trust
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                24/7 emergency service • Licensed & insured • Satisfaction guaranteed
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 mr-2 text-orange-400" />
                  <span className="font-semibold">Same Day Service</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-orange-400" />
                  <span className="font-semibold">Fully Licensed</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-6 w-6 mr-2 text-orange-400" />
                  <span className="font-semibold">5-Star Rated</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors flex items-center justify-center">
                  <Phone className="h-6 w-6 mr-2" />
                  Call Now: (555) 123-PIPE
                </button>
                <Link 
                  to="/contact"
                  className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg text-lg font-bold transition-colors text-center"
                >
                  Get Free Estimate
                </Link>
              </div>

              <p className="mt-4 text-gray-300">
                Available 24/7 for emergency plumbing services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Most Popular Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional plumbing solutions for your home and business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="mb-6 flex justify-center">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Learn More <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/services"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors inline-flex items-center"
            >
              View All Services <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose ProPlumb Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              Over 15 years of trusted service in your community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Service</h3>
              <p className="text-gray-600">Emergency plumbing services available around the clock</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed master plumbers with comprehensive insurance</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">5-Star Rated</h3>
              <p className="text-gray-600">Consistently rated 5 stars by satisfied customers</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Experienced professionals with ongoing training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Plumbing Emergency?</h2>
          <p className="text-xl mb-8">Don't wait! Our emergency team is ready to help 24/7</p>
          <button className="bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors">
            Call Emergency Line: (555) 911-PIPE
          </button>
        </div>
      </section>

      {/* Service Areas Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Serving Your Community
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Proudly serving the greater metropolitan area and surrounding communities
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="text-gray-700 font-medium">Downtown • Midtown • Uptown</div>
            <div className="text-gray-700 font-medium">Westside • Eastside • Northside</div>
            <div className="text-gray-700 font-medium">Suburbs • Industrial District</div>
          </div>
          <Link 
            to="/service-areas"
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors inline-flex items-center"
          >
            View All Service Areas <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;