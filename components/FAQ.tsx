import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
                <HelpCircle className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-indigo-200">
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-slate-50 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 bg-slate-50 border-t border-slate-100">
                  <p className="text-slate-600 mt-3 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};