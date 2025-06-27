import React from 'react';
import { MapPin, Clock, Phone, CheckCircle, Car } from 'lucide-react';

const ServiceAreas = () => {
  const primaryAreas = [
    {
      name: "Downtown",
      description: "Full-service plumbing for residential and commercial properties",
      responseTime: "15-30 minutes",
      zipCodes: ["12345", "12346", "12347"]
    },
    {
      name: "Midtown",
      description: "Comprehensive plumbing services for homes and businesses",
      responseTime: "20-35 minutes",
      zipCodes: ["12348", "12349", "12350"]
    },
    {
      name: "Uptown",
      description: "Residential and commercial plumbing solutions",
      responseTime: "25-40 minutes",
      zipCodes: ["12351", "12352", "12353"]
    },
    {
      name: "Westside",
      description: "Complete plumbing services for all property types",
      responseTime: "20-35 minutes",
      zipCodes: ["12354", "12355", "12356"]
    },
    {
      name: "Eastside",
      description: "Professional plumbing for residential and commercial clients",
      responseTime: "25-40 minutes",
      zipCodes: ["12357", "12358", "12359"]
    },
    {
      name: "Northside",
      description: "Full-range plumbing services for homes and businesses",
      responseTime: "30-45 minutes",
      zipCodes: ["12360", "12361", "12362"]
    }
  ];

  const suburbanAreas = [
    {
      name: "Oak Hills",
      responseTime: "35-50 minutes",
      services: "Residential plumbing services"
    },
    {
      name: "Pine Valley",
      responseTime: "40-55 minutes",
      services: "Home plumbing solutions"
    },
    {
      name: "Maple Grove",
      responseTime: "35-50 minutes",
      services: "Residential and light commercial"
    },
    {
      name: "Cedar Park",
      responseTime: "45-60 minutes",
      services: "Complete home plumbing"
    },
    {
      name: "Willow Creek",
      responseTime: "40-55 minutes",
      services: "Residential plumbing services"
    },
    {
      name: "Birch Woods",
      responseTime: "45-60 minutes",
      services: "Home plumbing solutions"
    }
  ];

  const serviceFeatures = [
    "Same-day service in most areas",
    "24/7 emergency response",
    "Licensed and insured technicians",
    "Upfront pricing with no hidden fees",
    "Satisfaction guarantee on all work",
    "Modern, well-equipped service vehicles"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Service Areas</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Proudly serving the greater metropolitan area and surrounding communities with professional plumbing services
          </p>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Coverage Area
            </h2>
            <p className="text-xl text-gray-600">
              Fast, reliable plumbing services throughout the region
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <div className="bg-blue-600 text-white p-4 rounded-lg inline-block mb-4">
              <MapPin className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Radius: 50 Miles</h3>
            <p className="text-gray-600 mb-6">
              We provide comprehensive plumbing services within a 50-mile radius of our main office, 
              ensuring quick response times and reliable service for all our customers.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <strong>Primary Areas:</strong> 15-45 min response
              </div>
              <div className="bg-white p-4 rounded-lg">
                <Car className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <strong>Extended Areas:</strong> 45-75 min response
              </div>
              <div className="bg-white p-4 rounded-lg">
                <Phone className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <strong>Emergency:</strong> Priority response 24/7
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Primary Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              Our main coverage areas with the fastest response times
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primaryAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{area.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-green-500 mr-2" />
                    <span><strong>Response Time:</strong> {area.responseTime}</span>
                  </div>
                  
                  <div className="flex items-start text-sm">
                    <MapPin className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                    <div>
                      <strong>Zip Codes:</strong>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {area.zipCodes.map((zip, zipIndex) => (
                          <span key={zipIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            {zip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suburban Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Suburban Communities
            </h2>
            <p className="text-xl text-gray-600">
              Extended service areas with reliable plumbing solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suburbanAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{area.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-orange-500 mr-2" />
                    <span>{area.responseTime}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>{area.services}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              What You Can Expect
            </h2>
            <p className="text-xl text-blue-200">
              Consistent, professional service across all our coverage areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-6 w-6 text-orange-400 mr-4 flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Inquiry */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Not Sure If We Service Your Area?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Give us a call! We're always expanding our service areas and may be able to help even if your location isn't listed above.
          </p>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Check Service Availability</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Enter your zip code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Check Coverage
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Or Call Us Directly</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center bg-orange-500 text-white p-4 rounded-lg">
                    <Phone className="h-6 w-6 mr-3" />
                    <div>
                      <p className="font-semibold">Main Line</p>
                      <p className="text-xl font-bold">(555) 123-PIPE</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Available 24/7 for service inquiries and emergencies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceAreas;