import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import { TEACHER_NAME } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <span className="text-2xl font-bold text-white">{TEACHER_NAME}</span>
            <p className="mt-2 text-slate-400 text-sm max-w-xs">Empowering students to communicate with the world through personalized English education.</p>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors transform hover:scale-110">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-pink-500 transition-colors transform hover:scale-110">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors transform hover:scale-110">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} {TEACHER_NAME}. All rights reserved.
          </p>
          <p className="text-sm text-slate-600 mt-4 md:mt-0 flex items-center">
             Made with <Heart className="w-3 h-3 text-red-500 mx-1" /> in React
          </p>
        </div>
      </div>
    </footer>
  );
};