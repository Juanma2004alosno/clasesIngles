import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClassList } from './components/ClassList';
import { AiTutor } from './components/AiTutor';
import { ContactForm } from './components/ContactForm';
import { Methodology } from './components/Methodology';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>(PageView.HOME);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case PageView.HOME:
        return (
            <>
                <Hero onNavigate={setCurrentPage} />
                <Methodology />
                <ClassList onNavigate={setCurrentPage} />
                <Testimonials />
                <FAQ />
                <ContactForm />
            </>
        );
      case PageView.CLASSES:
        return (
            <>
                <div className="pt-20">
                    <ClassList onNavigate={setCurrentPage} />
                    <FAQ />
                </div>
            </>
        );
      case PageView.TUTOR:
        return <AiTutor />;
      case PageView.CONTACT:
        return (
            <div className="pt-20">
                <ContactForm />
            </div>
        );
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      {currentPage !== PageView.TUTOR && <Footer />}
    </div>
  );
};

export default App;