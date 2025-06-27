import React from 'react';
import { Phone, Clock, Shield, Star } from 'lucide-react';

const Hero = () => {
  return (
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
              <button className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg text-lg font-bold transition-colors">
                Get Free Estimate
              </button>
            </div>

            <p className="mt-4 text-gray-300">
              Available 24/7 for emergency plumbing services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;