import React from 'react';
import { Target, MessageCircle, TrendingUp } from 'lucide-react';
import { METHODOLOGY_STEPS } from '../constants';

export const Methodology: React.FC = () => {
  const icons = {
    Target: <Target className="w-8 h-8 text-white" />,
    MessageCircle: <MessageCircle className="w-8 h-8 text-white" />,
    TrendingUp: <TrendingUp className="w-8 h-8 text-white" />
  };

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 font-bold tracking-wide uppercase text-sm">Methodology</h2>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            How We Achieve Fluency
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            My teaching philosophy is built on three core pillars designed to get you speaking confidently from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {METHODOLOGY_STEPS.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-200 mb-6 transform rotate-3 hover:rotate-0 transition-all duration-300">
                {icons[step.icon as keyof typeof icons]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
              
              {/* Connector Line (only for desktop and not last item) */}
              {index !== METHODOLOGY_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-14 left-1/2 w-full h-0.5 bg-gradient-to-r from-indigo-100 to-transparent -z-10 transform translate-x-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};