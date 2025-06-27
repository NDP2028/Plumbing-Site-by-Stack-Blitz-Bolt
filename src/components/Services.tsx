import React from 'react';
import { Wrench, Droplets, Zap, Home, Thermometer, AlertTriangle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Droplets className="h-12 w-12 text-blue-600" />,
      title: "Leak Detection & Repair",
      description: "Advanced leak detection technology to find and fix leaks quickly, preventing water damage and high bills.",
      features: ["Slab leak detection", "Pipe leak repair", "Faucet & toilet leaks"]
    },
    {
      icon: <Home className="h-12 w-12 text-blue-600" />,
      title: "Drain Cleaning",
      description: "Professional drain cleaning services to clear blockages and restore proper water flow.",
      features: ["Hydro jetting", "Snake services", "Root removal"]
    },
    {
      icon: <Thermometer className="h-12 w-12 text-blue-600" />,
      title: "Water Heater Services",
      description: "Complete water heater installation, repair, and maintenance for all types and brands.",
      features: ["Tank & tankless units", "Gas & electric", "Emergency repairs"]
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-600" />,
      title: "Pipe Installation & Repair",
      description: "Expert pipe services including replacement, repair, and new installations.",
      features: ["Copper & PVC pipes", "Sewer line repair", "Repiping services"]
    },
    {
      icon: <AlertTriangle className="h-12 w-12 text-blue-600" />,
      title: "Emergency Plumbing",
      description: "24/7 emergency services for urgent plumbing issues that can't wait.",
      features: ["Burst pipes", "Sewage backups", "No water situations"]
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      title: "Fixture Installation",
      description: "Professional installation of plumbing fixtures including faucets, toilets, and sinks.",
      features: ["Kitchen & bathroom", "Commercial grade", "Energy efficient options"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Plumbing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine maintenance to emergency repairs, our licensed plumbers handle all your plumbing needs with expertise and professionalism.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Emergency CTA */}
        <div className="mt-16 bg-orange-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Plumbing Emergency?</h3>
          <p className="text-xl mb-6">Don't wait! Our emergency team is ready to help 24/7</p>
          <button className="bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors">
            Call Emergency Line: (555) 911-PIPE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;