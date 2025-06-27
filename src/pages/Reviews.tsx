import React, { useState } from 'react';
import { Star, Quote, ThumbsUp, Calendar, MapPin, Filter } from 'lucide-react';

const Reviews = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Downtown",
      rating: 5,
      date: "2024-01-15",
      service: "Emergency Pipe Repair",
      text: "Outstanding service! They fixed our burst pipe emergency at 2 AM and were professional, fast, and reasonably priced. The technician Mike was knowledgeable and explained everything clearly. Highly recommend!",
      verified: true,
      helpful: 12
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      location: "Westside",
      rating: 5,
      date: "2024-01-10",
      service: "Water Heater Installation",
      text: "ProPlumb installed our new tankless water heater perfectly. The technician arrived on time, explained all the options, and completed the installation cleanly. Great experience from start to finish!",
      verified: true,
      helpful: 8
    },
    {
      id: 3,
      name: "Jennifer Chen",
      location: "Uptown",
      rating: 5,
      date: "2024-01-08",
      service: "Drain Cleaning",
      text: "Finally found an honest plumber! They diagnosed the issue correctly the first time and completed the work as promised. No upselling, just quality service at a fair price. Will use again.",
      verified: true,
      helpful: 15
    },
    {
      id: 4,
      name: "Robert Williams",
      location: "Eastside",
      rating: 5,
      date: "2024-01-05",
      service: "Leak Detection",
      text: "Had a mysterious leak that other plumbers couldn't find. ProPlumb used advanced detection equipment and found it quickly. Saved us thousands in potential water damage. Excellent work!",
      verified: true,
      helpful: 9
    },
    {
      id: 5,
      name: "Lisa Thompson",
      location: "Northside",
      rating: 5,
      date: "2024-01-03",
      service: "Bathroom Fixture Installation",
      text: "Professional installation of our new bathroom fixtures. The team was courteous, clean, and efficient. Everything works perfectly and looks great. Highly satisfied with the service.",
      verified: true,
      helpful: 6
    },
    {
      id: 6,
      name: "David Park",
      location: "Suburbs",
      rating: 4,
      date: "2023-12-28",
      service: "Pipe Repair",
      text: "Good service overall. The technician was knowledgeable and fixed the issue properly. Only minor complaint was the scheduling took a bit longer than expected, but the quality of work was excellent.",
      verified: true,
      helpful: 4
    },
    {
      id: 7,
      name: "Amanda Foster",
      location: "Downtown",
      rating: 5,
      date: "2023-12-25",
      service: "Emergency Service",
      text: "Christmas Day plumbing emergency and they came out within an hour! Saved our holiday gathering. Professional, efficient, and reasonably priced even for holiday emergency service.",
      verified: true,
      helpful: 18
    },
    {
      id: 8,
      name: "Carlos Martinez",
      location: "Westside",
      rating: 5,
      date: "2023-12-20",
      service: "Water Heater Repair",
      text: "Our water heater stopped working and they had it fixed the same day. Technician was friendly, explained the problem clearly, and the repair has been working perfectly since.",
      verified: true,
      helpful: 7
    }
  ];

  const serviceTypes = ['all', 'Emergency Service', 'Water Heater', 'Leak Detection', 'Drain Cleaning', 'Pipe Repair', 'Installation'];

  const filteredReviews = selectedFilter === 'all' 
    ? reviews 
    : reviews.filter(review => review.service.toLowerCase().includes(selectedFilter.toLowerCase()));

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length,
    percentage: (reviews.filter(review => review.rating === rating).length / totalReviews) * 100
  }));

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Customer Reviews</h1>
          <p className="text-xl max-w-3xl mx-auto">
            See what our satisfied customers have to say about our plumbing services
          </p>
        </div>
      </section>

      {/* Review Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Overall Rating */}
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-900 mb-2">
                {averageRating.toFixed(1)}
              </div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-6 w-6 ${i < Math.floor(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-600">Based on {totalReviews} reviews</p>
            </div>

            {/* Rating Distribution */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rating Distribution</h3>
              {ratingDistribution.map(({ rating, count, percentage }) => (
                <div key={rating} className="flex items-center mb-2">
                  <span className="text-sm font-medium text-gray-700 w-8">{rating}</span>
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-2" />
                  <div className="flex-1 bg-gray-200 rounded-full h-2 mr-4">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="font-medium text-gray-700">Filter by service:</span>
            <div className="flex flex-wrap gap-2">
              {serviceTypes.map((service) => (
                <button
                  key={service}
                  onClick={() => setSelectedFilter(service)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedFilter === service
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {service === 'all' ? 'All Services' : service}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {filteredReviews.map((review) => (
              <div key={review.id} className="bg-gray-50 rounded-lg p-8 shadow-md">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{review.name}</h3>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        {review.location}
                        {review.verified && (
                          <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            Verified
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-blue-200" />
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-blue-600 font-medium text-sm">{review.service}</span>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">"{review.text}"</p>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(review.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {review.helpful} found this helpful
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review CTA */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Had a Great Experience?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We'd love to hear about your experience with our plumbing services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-colors">
              Write a Review
            </button>
            <button className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-bold transition-colors">
              Share Your Experience
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;