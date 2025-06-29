import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    urgency: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We\'ll contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', urgency: '', message: '' });
  };

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "24/7 Emergency Line",
      value: "(555) 123-PIPE",
      description: "For urgent plumbing emergencies",
      highlight: true
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Main Office",
      value: "(555) 123-4567",
      description: "General inquiries and appointments"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "info@proplumbsolutions.com",
      description: "Non-urgent questions and quotes"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Text Messages",
      value: "(555) 123-TEXT",
      description: "Quick questions and updates"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to solve your plumbing problems? Get in touch with our expert team today for fast, reliable service.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600">
              Choose the contact method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg text-center ${
                  method.highlight 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-50 hover:shadow-lg transition-shadow'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  method.highlight ? 'bg-orange-600' : 'bg-blue-600 text-white'
                }`}>
                  {method.icon}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${method.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {method.title}
                </h3>
                <p className={`text-xl font-bold mb-2 break-words ${method.highlight ? 'text-white' : 'text-blue-600'}`}>
                  {method.value}
                </p>
                <p className={`text-sm ${method.highlight ? 'text-orange-100' : 'text-gray-600'}`}>
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Service or Get a Quote</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="emergency">Emergency Repair</option>
                      <option value="leak">Leak Detection/Repair</option>
                      <option value="drain">Drain Cleaning</option>
                      <option value="water-heater">Water Heater</option>
                      <option value="installation">New Installation</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="inspection">Inspection</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select urgency</option>
                      <option value="emergency">Emergency (ASAP)</option>
                      <option value="urgent">Urgent (Same Day)</option>
                      <option value="soon">Soon (Within 2-3 Days)</option>
                      <option value="flexible">Flexible (Within a Week)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Describe Your Issue or Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please provide details about your plumbing issue or project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-bold transition-colors flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Request
                </button>
              </form>

              <p className="text-sm text-gray-600 mt-4 text-center">
                * Required fields. We'll respond within 2 hours during business hours, or call for emergencies!
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Visit Our Office</h3>
              
              <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
                <div className="flex items-start mb-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Main Office Location</h4>
                    <p className="text-gray-700">
                      123 Main Street<br />
                      Your City, State 12345
                    </p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-900 mb-3">Directions & Parking</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Located in the downtown business district</li>
                    <li>• Free parking available in rear lot</li>
                    <li>• Accessible entrance on Main Street</li>
                    <li>• Near public transportation stops</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-start mb-4">
                  <Clock className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Business Hours</h4>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium">7:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">Emergency calls only</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                      <p className="text-orange-800 font-medium text-sm">
                        🚨 24/7 Emergency Service Available
                      </p>
                      <p className="text-orange-700 text-sm">
                        Plumbing emergencies don't wait for business hours!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">How quickly can you respond to emergencies?</h3>
              <p className="text-gray-700">We typically respond to emergency calls within 30-60 minutes, depending on your location and current demand. Our emergency line is available 24/7.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Do you provide free estimates?</h3>
              <p className="text-gray-700">Yes! We provide free estimates for most non-emergency services. For emergency repairs, we'll provide an upfront quote before beginning any work.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-700">We accept cash, checks, and all major credit cards. We also offer financing options for larger projects.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Are you licensed and insured?</h3>
              <p className="text-gray-700">Absolutely! All our technicians are licensed master plumbers, and we carry comprehensive liability insurance and workers' compensation coverage.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;