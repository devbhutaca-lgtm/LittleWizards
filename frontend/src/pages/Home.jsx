import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import { submitContactForm } from '../services/api';
import {
  Sparkles,
  Calculator,
  TrendingUp,
  Rocket,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Music,
  CheckCircle,
  BookOpen,
  Target,
  Users
} from 'lucide-react';

const Home = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const programs = [
    {
      name: 'Money Explorers',
      ages: 'Ages 7-8',
      description: 'Foundations: Needs vs. Wants, Earning, Saving Jars',
      icon: Sparkles,
      color: 'from-blue-400 to-cyan-400',
      price: '$149',
      image: 'https://images.unsplash.com/photo-1607863680198-23d4b2565df0'
    },
    {
      name: 'Budget Builders',
      ages: 'Ages 9-10',
      description: 'Core Skills: Budgeting, Simple Profit/Loss, Sales Tax',
      icon: Calculator,
      color: 'from-green-400 to-emerald-400',
      price: '$149',
      image: 'https://images.unsplash.com/photo-1622219999459-ab5b14e5f45a'
    },
    {
      name: 'Wealth Wizards',
      ages: 'Age 11',
      description: 'Growth Concepts: Compound Interest, Basics of Investing, Business Planning',
      icon: TrendingUp,
      color: 'from-amber-400 to-yellow-400',
      price: '$149',
      image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd'
    },
    {
      name: 'Startup Strategists',
      ages: 'Age 12',
      description: 'Advanced Strategy: Net Worth, VC/Angel Funding, Unit Economics, Pitch Deck',
      icon: Rocket,
      color: 'from-purple-400 to-indigo-400',
      price: '$399',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      toast({
        title: 'Success!',
        description: 'Thank you for your message. We\'ll get back to you soon!',
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Kidpreneurs in Action</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('programs')} className="text-gray-600 hover:text-gray-900 transition-colors">
                Programs
              </button>
              <button onClick={() => scrollToSection('methodology')} className="text-gray-600 hover:text-gray-900 transition-colors">
                Methodology
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </button>
            </nav>
            <Button onClick={() => scrollToSection('programs')} className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Future Finance Leaders Academy
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Building Financial Confidence and Entrepreneurial Skills, Ages 7-12
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => scrollToSection('programs')} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
                  Explore Programs
                </Button>
                <Button onClick={() => scrollToSection('contact')} size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5"
                alt="Children learning financial literacy"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Proven Results</p>
                    <p className="text-sm text-gray-600">Ages 7-12</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Four Progressive Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Age-appropriate curriculum designed to build financial confidence from the ground up
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${program.color} flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-gray-900">{program.price}</span>
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{program.name}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-gray-700">{program.ages}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{program.description}</p>
                    {program.name === 'Startup Strategists' && (
                      <p className="text-sm text-gray-500 mt-2 italic">Includes professional business plan & pitch strategies</p>
                    )}
                    <p className="text-xs text-gray-400 mt-2">+ Tax per month</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Progressive Learning Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven approach to building financial literacy and entrepreneurial skills
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Practical & Fun</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Focus on real-world scenarios and projects like Lemonade Stands and Pitch Decks. Learning through doing makes concepts stick.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Age-Appropriate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Concepts are introduced gradually, increasing complexity from simple saving to Venture Capital. Each age group builds on previous knowledge.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-0 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Future-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Covers modern topics like online banking and basic business technology. Preparing kids for the financial world of tomorrow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600">
                Have questions? We'd love to hear from you!
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-white border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send us a message</CardTitle>
                  <CardDescription>Fill out the form and we'll get back to you shortly</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your interest in our programs..."
                        rows={4}
                        className="w-full"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                          <a href="mailto:devbhuta@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                            devbhuta@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                          <a href="tel:+16472062594" className="text-green-600 hover:text-green-700 transition-colors">
                            +1 647-206-2594
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                          <p className="text-gray-600">
                            2412 Shadow Crt<br />
                            Oakville, ON L6M5G6
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="bg-gradient-to-br from-blue-600 to-cyan-600 border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-white text-lg mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.instagram.com/kidpreneursinaction"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                      >
                        <Instagram className="w-6 h-6 text-white" />
                      </a>
                      <a
                        href="https://www.facebook.com/kidpreneursinaction"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                      >
                        <Facebook className="w-6 h-6 text-white" />
                      </a>
                      <a
                        href="https://www.tiktok.com/@kidpreneursinaction"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                      >
                        <Music className="w-6 h-6 text-white" />
                      </a>
                    </div>
                    <p className="text-white/90 text-sm mt-4">
                      See our events, success stories, and behind-the-scenes content!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Kidpreneurs in Action</h3>
              </div>
              <p className="text-gray-400">
                Building Financial Confidence and Entrepreneurial Skills, Ages 7-12
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection('programs')} className="hover:text-white transition-colors">
                    Programs
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('methodology')} className="hover:text-white transition-colors">
                    Methodology
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="mailto:devbhuta@gmail.com" className="hover:text-white transition-colors">
                    devbhuta@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+16472062594" className="hover:text-white transition-colors">
                    +1 647-206-2594
                  </a>
                </li>
                <li className="text-gray-400">
                  2412 Shadow Crt, Oakville, ON
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Kidpreneurs in Action. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;