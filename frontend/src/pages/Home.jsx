import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';
import { submitContactForm } from '../services/api';
import { Mail, Phone, Sparkles, Users, Target, Rocket } from 'lucide-react';

const Home = () => {
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-black" />
              <h1 className="text-2xl font-light tracking-tight text-black">LittleWizards Academy</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-12">
              <button onClick={() => scrollToSection('home')} className="text-sm text-gray-600 hover:text-black transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('method')} className="text-sm text-gray-600 hover:text-black transition-colors">
                Method
              </button>
              <button onClick={() => scrollToSection('programs')} className="text-sm text-gray-600 hover:text-black transition-colors">
                Programs
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm text-gray-600 hover:text-black transition-colors">
                Contact
              </button>
            </nav>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-black text-white hover:bg-gray-800 rounded-full px-6"
            >
              Enroll Today
            </Button>
          </div>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-black mb-8 leading-tight tracking-tight">
              Empowering young minds through hands-on learning.
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
              Project-based courses designed to build practical skills and foundational knowledge for tomorrow's leaders.
            </p>
          </div>
          <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1633544861852-fca2121467c6?crop=entropy&cs=srgb&fm=jpg&q=85"
              alt="Education"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/40"></div>
          </div>
        </div>
      </section>

      {/* The LittleWizards Method Section */}
      <section id="method" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-16 text-center tracking-tight">
            The LittleWizards Method.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-light text-black mb-4">Hands-On Learning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Students actively manipulate concepts through experiments, simulations, and real-world tools.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-light text-black mb-4">Interactive Sessions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Small class sizes ensure every student can ask questions, collaborate, and receive personalized feedback.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-light text-black mb-4">Practical Application</h3>
                <p className="text-gray-600 leading-relaxed">
                  Focus on applying theories and principles to solve everyday problems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-light text-black mb-4">Project-Based Mastery</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every unit culminates in a major project (e.g., designing a Glider or pitching a business).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-4 text-center tracking-tight">
            Find your future.
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 font-light">Choose the program that sparks your curiosity</p>
          
          <div className="space-y-12">
            {/* Science Foundations Program */}
            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1656331797721-b593b8f00297?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Science"
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-4xl font-light text-black mb-2">Science Foundations</h3>
                  <p className="text-lg text-gray-700">Grades 5-8 (Ontario Curriculum)</p>
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
            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1592125678718-8195d5e0a509?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Finance"
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-4xl font-light text-black mb-2">Finance & Entrepreneurship</h3>
                  <p className="text-lg text-gray-700">Ages 7-12 (4-Stage Structure)</p>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-black mb-3">Stage 1 (Ages 7-8)</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• What is Money?</li>
                      <li>• Earning Money</li>
                      <li>• Needs vs. Wants</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-black mb-3">Stage 2 (Ages 9-10)</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Saving & Spending</li>
                      <li>• Basic Budgeting</li>
                      <li>• Banking Introduction</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-black mb-3">Stage 3 (Ages 11-12)</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Product Design</li>
                      <li>• Marketing Basics</li>
                      <li>• Revenue & Cost Models</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-black mb-3">Stage 4 (Ages 12+)</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Business Plan Creation</li>
                      <li>• The Elevator Pitch</li>
                      <li>• Pitch Deck Presentation</li>
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
      <section id="contact" className="py-24 px-6 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">Get in Touch</h2>
            <p className="text-xl text-gray-400 font-light">Have questions? We'd love to hear from you.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400 mb-1">Email</h4>
                      <a href="mailto:devbhuta@gmail.com" className="text-white hover:text-gray-300 transition-colors">
                        devbhuta@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400 mb-1">Phone</h4>
                      <a href="tel:+16472062594" className="text-white hover:text-gray-300 transition-colors">
                        +1 647-206-2594
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div>
              <Card className="bg-gray-900 border-gray-800 shadow-xl rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-light text-white mb-6">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Input
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 rounded-xl"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 rounded-xl"
                      />
                    </div>
                    <div>
                      <Input
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 rounded-xl"
                      />
                    </div>
                    <div>
                      <Select value={formData.program} onValueChange={handleSelectChange} required>
                        <SelectTrigger className="bg-black/50 border-gray-700 text-white rounded-xl">
                          <SelectValue placeholder="Interested Program" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-700 text-white">
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="both">Both</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your Question/Message"
                        rows={4}
                        className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 rounded-xl"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white text-black hover:bg-gray-200 rounded-xl py-6 font-light text-lg"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
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