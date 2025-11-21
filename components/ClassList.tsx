import React from 'react';
import { COURSES } from '../constants';
import { Clock, BookOpen, ArrowRight, Check } from 'lucide-react';
import { PageView } from '../types';

interface ClassListProps {
    onNavigate: (page: PageView) => void;
}

export const ClassList: React.FC<ClassListProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 font-bold tracking-wide uppercase text-sm">Our Classes</h2>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Find the Perfect Course for You
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Small groups, personalized attention, and proven methodologies. Choose the path that fits your goals.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {COURSES.map((course) => (
            <div key={course.id} className="group flex flex-col h-full bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative flex-shrink-0 overflow-hidden h-48">
                <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur text-indigo-700 shadow-sm border border-indigo-50">
                        {course.level}
                    </span>
                </div>
                <img 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src={course.image} 
                    alt={course.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
              
              <div className="flex-1 p-8 flex flex-col">
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {course.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="mt-6">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">What's included</h4>
                    <ul className="space-y-2">
                        {course.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-slate-600">
                                <Check className="flex-shrink-0 mr-2 h-4 w-4 text-green-500 mt-0.5" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
                   <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-slate-600">
                                <Clock className="flex-shrink-0 mr-2 h-4 w-4 text-indigo-500" />
                                <span className="font-medium">{course.schedule}</span>
                        </div>
                   </div>
                   
                   <div className="flex items-center justify-between">
                        <div className="flex items-center text-slate-900">
                            <span className="text-2xl font-bold">{course.price}</span>
                        </div>
                        <button 
                            onClick={() => onNavigate(PageView.CONTACT)}
                            className="inline-flex items-center justify-center p-2 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};