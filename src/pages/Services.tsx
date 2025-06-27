import React from 'react';
import { Wrench, Droplets, Zap, Home, Thermometer, AlertTriangle, Phone, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <AlertTriangle className="h-12 w-12 text-orange-500" />,
      title: "Emergency Plumbing",
      description: "24/7 emergency services for urgent plumbing issues that can't wait. Our rapid response team is always ready to help.",
      features: ["Burst pipes", "Sewage backups", "No water situations", "Gas leaks", "Flooding issues"],
      pricing: "Emergency rates apply"
    },
    {
      icon: <Droplets className="h-12 w-12 text-blue-600" />,
      title: "Leak Detection & Repair",
      description: "Advanced leak detection technology to find and fix leaks quickly, preventing water damage and high bills.",
      features: ["Slab leak detection", "Pipe leak repair", "Faucet & toilet leaks", "Underground leaks", "Pressure testing"],
      pricing: "Starting at $150"
    },
    {
      icon: <Home className="h-12 w-12 text-blue-600" />,
      title: "Drain Cleaning",
      description: "Professional drain cleaning services to clear blockages and restore proper water flow throughout your property.",
      features: ["Hydro jetting", "Snake services", "Root removal", "Grease trap cleaning", "Video inspection"],
      pricing: "Starting at $125"
    },
    {
      icon: <Thermometer className="h-12 w-12 text-blue-600" />,
      title: "Water Heater Services",
      description: "Complete water heater installation, repair, and maintenance for all types and brands of water heating systems.",
      features: ["Tank & tankless units", "Gas & electric", "Emergency repairs", "Maintenance plans", "Energy efficiency upgrades"],
      pricing: "Repair from $200, Install from $1,200"
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-600" />,
      title: "Pipe Installation & Repair",
      description: "Expert pipe services including replacement, repair, and new installations for residential and commercial properties.",
      features: ["Copper & PVC pipes", "Sewer line repair", "Repiping services", "Pipe insulation", "Backflow prevention"],
      pricing: "Starting at $300"
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      title: "Fixture Installation",
      description: "Professional installation of plumbing fixtures including faucets, toilets, sinks, and other bathroom/kitchen fixtures.",
      features: ["Kitchen & bathroom", "Commercial grade", "Energy efficient options", "Designer fixtures", "ADA compliant"],
      pricing: "Starting at $175"
    }
  ];

  const additionalServices = [
    "Garbage Disposal Installation & Repair",
    "Toilet Installation & Repair",
    "Bathroom Remodeling Plumbing",
    "Kitchen Remodeling Plumbing",
    "Commercial Plumbing Services",
    "Preventive Maintenance Plans",
    "Sump Pump Installation & Repair",
    "Gas Line Installation & Repair",
    "Backflow Testing & Prevention",
    "Septic System Services"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Complete Plumbing Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            From routine maintenance to emergency repairs, our licensed plumbers handle all your plumbing needs with expertise and professionalism.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Pricing:</strong> {service.pricing}
                  </p>
                  <button className="w-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              We offer a comprehensive range of plumbing services for all your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple, transparent, and professional service every time
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600">Call or submit a request online for service</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule</h3>
              <p className="text-gray-600">We'll schedule a convenient appointment time</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Diagnose</h3>
              <p className="text-gray-600">Our expert technician diagnoses the issue</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fix & Follow-up</h3>
              <p className="text-gray-600">We complete the work and ensure satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Service Guarantees</h2>
            <p className="text-xl text-blue-200">
              Your satisfaction and peace of mind are our top priorities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">100% Satisfaction Guarantee</h3>
              <p className="text-blue-200">If you're not completely satisfied, we'll make it right</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Upfront Pricing</h3>
              <p className="text-blue-200">No hidden fees or surprise charges - you know the cost before we start</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Warranty Protection</h3>
              <p className="text-blue-200">All work comes with our comprehensive warranty coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Emergency Service?</h2>
          <p className="text-xl mb-8">Our emergency team is available 24/7 for urgent plumbing issues</p>
          <button className="bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors flex items-center mx-auto">
            <Phone className="h-6 w-6 mr-2" />
            Call Emergency Line: (555) 911-PIPE
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;