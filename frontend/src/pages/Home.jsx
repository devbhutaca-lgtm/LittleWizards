import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu';
import { useToast } from '../hooks/use-toast';
import { submitContactForm } from '../services/api';
import { Mail, Phone, MapPin, Sparkles, Users, Target, Rocket, ChevronDown } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, program: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `Interested Program: ${formData.program}\n\n${formData.message}`
      });
      toast({
        title: 'Thank you!',
        description: 'Your inquiry has been received. We\'ll get back to you soon!',
      });
      setFormData({ name: '', email: '', phone: '', program: '', message: '' });
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message || 'Something went wrong. Please try again.',
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
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 -ml-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">LittleWizards Academy</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-10">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('method')} className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Method
              </button>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors focus:outline-none">
                  <span>Programs</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem onClick={() => navigate('/science')} className="cursor-pointer">
                    <span className="text-blue-600 font-medium">Science</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/finance')} className="cursor-pointer">
                    <span className="text-orange-600 font-medium">Finance</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </button>
            </nav>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 rounded-full px-8 mr-4 font-semibold shadow-lg"
            >
              Enroll Today
            </Button>
          </div>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="pt-32 pb-24 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              Empowering young minds through hands-on learning.
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-4xl mx-auto leading-relaxed">
              Project-based courses designed to build practical skills and foundational knowledge for tomorrow's leaders.
            </p>
          </div>
          <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?crop=entropy&cs=srgb&fm=jpg&q=85"
              alt="Children learning"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* The LittleWizards Method Section */}
      <section id="method" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-16 text-center">
            The LittleWizards Method.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-yellow-100 to-yellow-200 border-2 border-yellow-300 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 rounded-2xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hands-On Learning</h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Students actively manipulate concepts through experiments, simulations, and real-world tools.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 rounded-2xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Sessions</h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Small class sizes ensure every student can ask questions, collaborate, and receive personalized feedback.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-100 to-red-200 border-2 border-red-300 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 rounded-2xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Practical Application</h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Focus on applying theories and principles to solve everyday problems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-purple-300 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 rounded-2xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Project-Based Mastery</h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Every unit culminates in a major project (e.g., designing a Glider or pitching a business).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 px-6 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3 text-center">
            Find your future.
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 font-semibold">Choose the program that sparks your curiosity</p>
          
          <div className="space-y-12">
            {/* Science Foundations Program */}
            <Card className="bg-white border-4 border-blue-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 rounded-3xl overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-blue-400 to-cyan-400">
                <img
                  src="https://images.unsplash.com/photo-1656331797721-b593b8f00297?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Science"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/50"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-4xl font-bold text-white mb-2">Science Foundations</h3>
                  <p className="text-lg text-blue-100 font-semibold">Grades 5-8 (Ontario Curriculum)</p>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-black mb-3">Grade 5</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Human Organ Systems</li>
                      <li>• Matter & Materials</li>
                      <li>• Strong Structures</li>
                      <li>• Energy & Stewardship</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-black mb-3">Grade 6</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Biodiversity</li>
                      <li>• Flight & Aerodynamics</li>
                      <li>• Electricity</li>
                      <li>• Space Exploration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-black mb-3">Grade 7</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Ecosystems</li>
                      <li>• Substances & Mixtures</li>
                      <li>• Heat in the Environment</li>
                      <li>• Structures & Forces</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-black mb-3">Grade 8</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Cells & Systems</li>
                      <li>• Fluids (Pressure/Buoyancy)</li>
                      <li>• Water Systems</li>
                      <li>• Chemical Change</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-6 italic">Each grade includes hands-on projects and experiments</p>
              </CardContent>
            </Card>

            {/* Finance & Entrepreneurship Program */}
            <Card className="bg-white border-4 border-orange-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 rounded-3xl overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-yellow-400 to-orange-400">
                <img
                  src="https://images.unsplash.com/photo-1592125678718-8195d5e0a509?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Finance"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-500/50"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-4xl font-bold text-white mb-2">Finance & Entrepreneurship</h3>
                  <p className="text-lg text-yellow-100 font-semibold">Progressive 4-Stage Program</p>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-black mb-3">Money Explorers</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• What is Money?</li>
                      <li>• Earning Money</li>
                      <li>• Needs vs. Wants</li>
                      <li>• Saving Jars</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-black mb-3">Budget Builders</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Saving & Spending</li>
                      <li>• Basic Budgeting</li>
                      <li>• Banking Introduction</li>
                      <li>• Simple Profit/Loss</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-black mb-3">Wealth Wizards</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Product Design</li>
                      <li>• Marketing Basics</li>
                      <li>• Revenue & Cost Models</li>
                      <li>• Compound Interest</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-black mb-3">Startup Strategists</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Business Plan Creation</li>
                      <li>• The Elevator Pitch</li>
                      <li>• Pitch Deck Presentation</li>
                      <li>• Net Worth & VC Funding</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-6 italic">Hands-on projects include Lemonade Stands, Budget Managers, and CEO Pitches</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-white/90 font-semibold">Have questions? We'd love to hear from you.</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-sm text-white/80 mb-2 font-semibold uppercase tracking-wide">Email</h4>
                <a href="mailto:devbhuta@gmail.com" className="text-white hover:text-yellow-200 transition-colors font-medium text-lg">
                  devbhuta@gmail.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-sm text-white/80 mb-2 font-semibold uppercase tracking-wide">Phone</h4>
                <a href="tel:+16472062594" className="text-white hover:text-yellow-200 transition-colors font-medium text-lg">
                  +1 647-206-2594
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-sm text-white/80 mb-2 font-semibold uppercase tracking-wide">Address</h4>
                <p className="text-white font-medium text-lg leading-relaxed">
                  2412 Shadow Crt<br />
                  Oakville, ON L6M5G6
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-6 border-t border-gray-200">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-500">© 2024 LittleWizards Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;