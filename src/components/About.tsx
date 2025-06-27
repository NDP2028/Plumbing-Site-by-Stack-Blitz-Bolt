import React from 'react';
import { Users, Award, Clock, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, value: "15+", label: "Years Experience" },
    { icon: <Award className="h-8 w-8" />, value: "5000+", label: "Jobs Completed" },
    { icon: <Clock className="h-8 w-8" />, value: "24/7", label: "Emergency Service" },
    { icon: <Shield className="h-8 w-8" />, value: "100%", label: "Licensed & Insured" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Local Plumbing Experts
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              For over 15 years, ProPlumb Solutions has been the premier plumbing service provider in the greater metropolitan area. We've built our reputation on quality workmanship, honest pricing, and exceptional customer service.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of licensed master plumbers brings decades of combined experience to every job, whether it's a simple faucet repair or a complete plumbing system installation. We use only the highest quality parts and materials, backed by our satisfaction guarantee.
            </p>

            {/* Certifications & Guarantees */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700 font-medium">Licensed Master Plumbers</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700 font-medium">Fully Insured & Bonded</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700 font-medium">Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700 font-medium">Upfront Pricing</span>
              </div>
            </div>
          </div>

          <div className="lg:order-first">
            <img 
              src="https://images.pexels.com/photos/8247020/pexels-photo-8247020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
              alt="Professional plumber at work"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Service Areas */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Service Areas</h3>
          <p className="text-center text-gray-600 mb-6">
            We proudly serve the following cities and surrounding areas:
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="text-gray-700 font-medium">Downtown • Midtown • Uptown</div>
            <div className="text-gray-700 font-medium">Westside • Eastside • Northside</div>
            <div className="text-gray-700 font-medium">Suburbs • Industrial District</div>
          </div>
          <p className="text-center text-gray-600 mt-4">
            Call us to confirm service availability in your area
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;