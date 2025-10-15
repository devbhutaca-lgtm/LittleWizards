import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft, Beaker, Rocket, Microscope, Leaf } from 'lucide-react';

const Science = () => {
  const navigate = useNavigate();

  const grades = [
    {
      grade: 'Grade 5',
      color: 'from-blue-500 to-cyan-500',
      icon: Leaf,
      units: [
        {
          title: 'Human Organ Systems',
          topics: ['Respiratory system', 'Circulatory system', 'Digestive system', 'How organ systems work together'],
          project: 'Create a 3D model of an organ system'
        },
        {
          title: 'Matter & Materials',
          topics: ['Properties of matter', 'Physical and chemical changes', 'States of matter', 'Conservation of mass'],
          project: 'Design experiments to test material properties'
        },
        {
          title: 'Strong Structures',
          topics: ['Forces on structures', 'Structural strength', 'Bridge designs', 'Load distribution'],
          project: 'Build and test a strong bridge from simple materials'
        },
        {
          title: 'Energy & Stewardship',
          topics: ['Forms of energy', 'Energy transformation', 'Conservation of energy', 'Renewable vs. non-renewable'],
          project: 'Create an energy conservation action plan'
        }
      ]
    },
    {
      grade: 'Grade 6',
      color: 'from-purple-500 to-pink-500',
      icon: Rocket,
      units: [
        {
          title: 'Biodiversity',
          topics: ['Classification of organisms', 'Ecosystems and habitats', 'Adaptation and survival', 'Human impact on biodiversity'],
          project: 'Research and present on an endangered species'
        },
        {
          title: 'Flight & Aerodynamics',
          topics: ['Principles of flight', 'Bernoulli\'s principle', 'Thrust, drag, lift, and weight', 'Aircraft design'],
          project: 'Design and build a glider - test flight performance'
        },
        {
          title: 'Electricity',
          topics: ['Electric circuits', 'Conductors and insulators', 'Series and parallel circuits', 'Electrical safety'],
          project: 'Build a working electric circuit with switches'
        },
        {
          title: 'Space Exploration',
          topics: ['Solar system', 'Space technologies', 'Planets and moons', 'Canada\'s role in space exploration'],
          project: 'Design a space mission to another planet'
        }
      ]
    },
    {
      grade: 'Grade 7',
      color: 'from-green-500 to-emerald-500',
      icon: Microscope,
      units: [
        {
          title: 'Ecosystems',
          topics: ['Food chains and webs', 'Energy flow', 'Nutrient cycles', 'Population dynamics', 'Human impact'],
          project: 'Create a mini-ecosystem in a bottle'
        },
        {
          title: 'Substances & Mixtures',
          topics: ['Pure substances vs. mixtures', 'Solutions and solubility', 'Separation techniques', 'Concentration'],
          project: 'Design experiments to separate mixtures'
        },
        {
          title: 'Heat in the Environment',
          topics: ['Temperature and heat', 'Heat transfer methods', 'Thermal expansion', 'Insulation and climate'],
          project: 'Test and compare insulation materials'
        },
        {
          title: 'Structures & Forces',
          topics: ['Internal and external forces', 'Structural forms', 'Center of gravity', 'Stability and strength'],
          project: 'Design and build a structure to withstand forces'
        }
      ]
    },
    {
      grade: 'Grade 8',
      color: 'from-orange-500 to-red-500',
      icon: Beaker,
      units: [
        {
          title: 'Cells & Systems',
          topics: ['Cell structure and function', 'Cell division', 'Plant and animal cells', 'Body systems interaction'],
          project: 'Microscope investigation of cells'
        },
        {
          title: 'Fluids (Pressure & Buoyancy)',
          topics: ['Pressure in fluids', 'Buoyancy and density', 'Pascal\'s and Archimedes\' principles', 'Hydraulics'],
          project: 'Build a hydraulic lift system'
        },
        {
          title: 'Water Systems',
          topics: ['Water cycle', 'Watersheds', 'Water quality', 'Water treatment', 'Conservation'],
          project: 'Design a water filtration system'
        },
        {
          title: 'Chemical Change',
          topics: ['Physical vs. chemical changes', 'Indicators of chemical reactions', 'Atoms and molecules', 'Conservation of mass in reactions'],
          project: 'Conduct and document chemical reactions'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Button 
            onClick={() => navigate('/')} 
            variant="ghost" 
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-block p-4 bg-blue-500 rounded-3xl mb-6">
            <Beaker className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Science Foundations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive Ontario Curriculum for Grades 5-8 with hands-on experiments and projects
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-blue-100 px-6 py-3 rounded-full">
              <p className="text-blue-700 font-semibold">Grades 5-8</p>
            </div>
            <div className="bg-purple-100 px-6 py-3 rounded-full">
              <p className="text-purple-700 font-semibold">16 Major Topics</p>
            </div>
            <div className="bg-green-100 px-6 py-3 rounded-full">
              <p className="text-green-700 font-semibold">Hands-On Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grades Content */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl space-y-16">
          {grades.map((gradeData, idx) => {
            const Icon = gradeData.icon;
            return (
              <div key={idx} className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradeData.color} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">{gradeData.grade}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {gradeData.units.map((unit, unitIdx) => (
                    <Card key={unitIdx} className="border-2 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{unit.title}</h3>
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-600 mb-2">Key Topics:</h4>
                          <ul className="space-y-2">
                            {unit.topics.map((topic, topicIdx) => (
                              <li key={topicIdx} className="flex items-start space-x-2">
                                <span className="text-blue-500 mt-1">•</span>
                                <span className="text-gray-700">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className={`mt-4 p-4 rounded-xl bg-gradient-to-br ${gradeData.color} bg-opacity-10`}>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">🔬 Hands-On Project:</h4>
                          <p className="text-gray-800 font-medium">{unit.project}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-500 to-cyan-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to explore the world of science?
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Join our hands-on science program and discover the wonders of the natural world
          </p>
          <Button 
            onClick={() => navigate('/')} 
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold"
          >
            Enroll Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-6 border-t">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-500">© 2024 LittleWizards Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Science;