import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Contact Info */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="inline-block p-3 rounded-xl bg-indigo-100 w-fit mb-6">
            <Mail className="w-6 h-6 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900">Let's Start a Conversation</h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Whether you have questions about my teaching methodology, pricing, or simply want to say hello, I'm here to help.
          </p>
          
          <div className="mt-10 space-y-8">
            <div className="flex items-start group">
                <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white border border-slate-200 text-indigo-600 shadow-sm group-hover:border-indigo-300 transition-colors">
                        <Mail className="w-6 h-6" />
                    </div>
                </div>
                <div className="ml-4">
                    <p className="text-sm font-medium text-slate-900">Email me</p>
                    <p className="text-base text-slate-500">sarah.english@example.com</p>
                </div>
            </div>
            <div className="flex items-start group">
                <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white border border-slate-200 text-indigo-600 shadow-sm group-hover:border-indigo-300 transition-colors">
                        <Phone className="w-6 h-6" />
                    </div>
                </div>
                <div className="ml-4">
                    <p className="text-sm font-medium text-slate-900">Call or WhatsApp</p>
                    <p className="text-base text-slate-500">+1 (555) 123-4567</p>
                </div>
            </div>
            <div className="flex items-start group">
                <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white border border-slate-200 text-indigo-600 shadow-sm group-hover:border-indigo-300 transition-colors">
                        <MapPin className="w-6 h-6" />
                    </div>
                </div>
                <div className="ml-4">
                    <p className="text-sm font-medium text-slate-900">Location</p>
                    <p className="text-base text-slate-500">Downtown Language Center, Suite 400</p>
                </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-slate-100">
                {submitted ? (
                    <div className="h-96 flex flex-col items-center justify-center text-center animate-fade-in">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <Check className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                        <p className="mt-3 text-slate-600 max-w-md mx-auto">
                            Thank you for reaching out. I will review your inquiry and reply to your email within 24 hours.
                        </p>
                        <button onClick={() => setSubmitted(false)} className="mt-8 px-6 py-2 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 font-medium transition-colors">
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="block w-full rounded-lg border-slate-300 bg-slate-50 border py-3 px-4 text-slate-900 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full rounded-lg border-slate-300 bg-slate-50 border py-3 px-4 text-slate-900 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">Interested In</label>
                            <select
                                name="subject"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="block w-full rounded-lg border-slate-300 bg-slate-50 border py-3 px-4 text-slate-900 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
                            >
                                <option value="">Select a topic...</option>
                                <option value="Classes">Course Information</option>
                                <option value="Private">Private Tutoring</option>
                                <option value="Other">General Inquiry</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="block w-full rounded-lg border-slate-300 bg-slate-50 border py-3 px-4 text-slate-900 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
                                placeholder="Tell me about your English goals..."
                            />
                        </div>
                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:-translate-y-1"
                            >
                                Send Message <Send className="ml-2 w-5 h-5" />
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};