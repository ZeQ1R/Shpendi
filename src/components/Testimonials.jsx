import React from 'react';
import { Quote, Star, Users } from 'lucide-react';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-gradient-to-r from-red-600/10 to-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-gradient-to-l from-red-500/5 to-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-red-600 to-red-500 p-3 rounded-full mr-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                What Our Guests Say
              </span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Don't just take our word for it. Here's what our valued customers have to say about their experience at Shpendi.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-500/20 rounded-xl p-8 hover:border-red-500/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-red-500/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-red-600 to-red-500 p-3 rounded-full">
                <Quote className="h-6 w-6 text-white" />
              </div>

              {/* Rating stars */}
              <div className="flex items-center gap-1 mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-red-400 text-red-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                "{testimonial.text}"
              </blockquote>

              {/* Customer info */}
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-full p-3 mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold group-hover:text-red-400 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">Verified Customer</p>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-500/20 rounded-xl p-12 max-w-4xl mx-auto hover:border-red-500/40 transition-all duration-300">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Create Your Own <span className="text-red-400">Memorable Experience?</span>
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Join hundreds of satisfied customers who have made Shpendi their favorite dining destination. 
              Book your table today and taste the difference authentic Albanian cuisine makes.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">4.6/5</div>
                <div className="text-gray-400">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">500+</div>
                <div className="text-gray-400">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">98%</div>
                <div className="text-gray-400">Recommend Us</div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/25">
              Make a Reservation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;