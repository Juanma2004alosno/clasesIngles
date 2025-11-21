import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { PageView } from '../types';
import { TEACHER_NAME } from '../constants';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: PageView.HOME },
    { label: 'Classes', value: PageView.CLASSES },
    { label: 'AI Assistant', value: PageView.TUTOR },
    { label: 'Contact', value: PageView.CONTACT },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick(PageView.HOME)}>
            <div className="bg-indigo-600 p-2 rounded-lg text-white group-hover:bg-indigo-700 transition-colors">
                <GraduationCap className="h-6 w-6" />
            </div>
            <span className="ml-3 text-xl font-bold text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">{TEACHER_NAME}</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  currentPage === item.value
                    ? 'text-indigo-700 bg-indigo-50 shadow-sm ring-1 ring-indigo-100'
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
                onClick={() => handleNavClick(PageView.CONTACT)}
                className="ml-4 px-5 py-2.5 rounded-full text-sm font-medium bg-indigo-600 text-white shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
                Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-indigo-600 hover:bg-slate-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium ${
                  currentPage === item.value
                    ? 'text-indigo-700 bg-indigo-50'
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};