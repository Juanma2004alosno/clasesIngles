import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <div className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-indigo-400 font-bold tracking-wide uppercase text-sm">Success Stories</h2>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            What Students Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-slate-800 p-8 rounded-2xl relative border border-slate-700 hover:border-indigo-500 transition-colors duration-300">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-600 opacity-50" />
              <p className="text-slate-300 italic mb-6 relative z-10">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full border-2 border-indigo-500"
                />
                <div className="ml-4">
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-indigo-400 text-xs font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};