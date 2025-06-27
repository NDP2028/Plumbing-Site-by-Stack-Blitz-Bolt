import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Downtown",
      rating: 5,
      text: "Outstanding service! They fixed our burst pipe emergency at 2 AM and were professional, fast, and reasonably priced. Highly recommend!",
      service: "Emergency Pipe Repair"
    },
    {
      name: "Mike Rodriguez",
      location: "Westside",
      rating: 5,
      text: "ProPlumb installed our new water heater perfectly. The technician explained everything and cleaned up afterward. Great experience!",
      service: "Water Heater Installation"
    },
    {
      name: "Jennifer Chen",
      location: "Uptown",
      rating: 5,
      text: "Finally found an honest plumber! They diagnosed the issue correctly the first time and completed the work as promised. Will use again.",
      service: "Drain Cleaning"
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - see what our satisfied customers have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 relative">
              <Quote className="h-8 w-8 text-blue-200 absolute top-4 right-4" />
              
              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.location}</p>
                <p className="text-blue-600 text-sm font-medium mt-1">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Join hundreds of satisfied customers</p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;