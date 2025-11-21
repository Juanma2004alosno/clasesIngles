import React from 'react';
import { ArrowRight, MessageCircle, Star, Users, Calendar } from 'lucide-react';
import { PageView } from '../types';
import { TEACHER_BIO } from '../constants';

interface HeroProps {
  onNavigate: (page: PageView) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative bg-white pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
       {/* Background Decor */}
       <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
       <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-6 border border-indigo-100">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse"></span>
              Accepting New Students for Fall 2025
            </div>
            
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl mb-6">
              <span className="block">Unlock Your Global</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Potential Today
              </span>
            </h1>
            
            <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {TEACHER_BIO}
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                onClick={() => onNavigate(PageView.CLASSES)}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Classes
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate(PageView.TUTOR)}
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 hover:text-indigo-600 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 mr-2 text-indigo-500" />
                AI Placement Test
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-100 pt-8">
                <div>
                    <div className="flex items-center justify-center lg:justify-start">
                        <span className="text-2xl font-bold text-slate-900">500+</span>
                        <Users className="ml-2 w-4 h-4 text-indigo-500" />
                    </div>
                    <p className="text-sm text-slate-500">Students Taught</p>
                </div>
                <div>
                    <div className="flex items-center justify-center lg:justify-start">
                        <span className="text-2xl font-bold text-slate-900">10+</span>
                        <Calendar className="ml-2 w-4 h-4 text-indigo-500" />
                    </div>
                    <p className="text-sm text-slate-500">Years Experience</p>
                </div>
                <div>
                    <div className="flex items-center justify-center lg:justify-start">
                        <span className="text-2xl font-bold text-slate-900">4.9</span>
                        <Star className="ml-2 w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                    <p className="text-sm text-slate-500">Average Rating</p>
                </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:col-span-6 mt-16 lg:mt-0 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white group">
                <img
                className="w-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                src="https://picsum.photos/800/1000?random=10"
                alt="Teacher portrait"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                    <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                    </div>
                    <p className="font-bold text-xl leading-snug">"Sarah is the best teacher I've ever had. Her patience and clarity are unmatched."</p>
                    <p className="text-indigo-200 text-sm mt-2 font-medium">— Thomas Mueller, Berlin</p>
                </div>
            </div>
            {/* Decorative elements behind image */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-indigo-50 rounded-3xl transform rotate-3"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-dots-pattern opacity-20"></div>
          </div>

        </div>
      </div>
    </div>
  );
};