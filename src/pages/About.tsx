import React from 'react';
import { Users, Award, Clock, Shield, CheckCircle, Phone } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, value: "15+", label: "Years Experience" },
    { icon: <Award className="h-8 w-8" />, value: "5000+", label: "Jobs Completed" },
    { icon: <Clock className="h-8 w-8" />, value: "24/7", label: "Emergency Service" },
    { icon: <Shield className="h-8 w-8" />, value: "100%", label: "Licensed & Insured" }
  ];

  const certifications = [
    "Licensed Master Plumbers",
    "Fully Insured & Bonded",
    "Better Business Bureau A+ Rating",
    "EPA Certified Technicians",
    "Satisfaction Guarantee",
    "Upfront Pricing Policy"
  ];

  const teamMembers = [
    {
      name: "Mike Johnson",
      title: "Master Plumber & Owner",
      experience: "20+ years",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Sarah Rodriguez",
      title: "Lead Technician",
      experience: "12+ years",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "David Chen",
      title: "Emergency Services Specialist",
      experience: "8+ years",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About ProPlumb Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted local plumbing experts with over 15 years of experience serving the community with integrity, quality, and reliability.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008 by master plumber Mike Johnson, ProPlumb Solutions began as a small family business with a simple mission: provide honest, reliable plumbing services at fair prices. What started as a one-man operation has grown into the area's most trusted plumbing company.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've built our reputation on quality workmanship, transparent pricing, and exceptional customer service. We've handled everything from simple faucet repairs to complex commercial installations, always maintaining the same commitment to excellence.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, our team of licensed master plumbers brings decades of combined experience to every job. We use only the highest quality parts and materials, backed by our comprehensive satisfaction guarantee.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img 
                src="https://images.pexels.com/photos/8247020/pexels-photo-8247020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Professional plumber at work"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that speak to our experience and commitment
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              Licensed professionals dedicated to solving your plumbing problems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.title}</p>
                <p className="text-gray-600">{member.experience} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-8">
                To provide exceptional plumbing services that exceed our customers' expectations while building lasting relationships based on trust, quality, and reliability. We're committed to being the plumbing company you can count on, whether it's a routine repair or an emergency situation.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Integrity:</strong> Honest assessments and transparent pricing
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Quality:</strong> Superior workmanship using premium materials
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Reliability:</strong> On-time service and dependable solutions
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Customer Focus:</strong> Your satisfaction is our priority
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers who trust ProPlumb Solutions</p>
          <button className="bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors flex items-center mx-auto">
            <Phone className="h-6 w-6 mr-2" />
            Call Today: (555) 123-PIPE
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;