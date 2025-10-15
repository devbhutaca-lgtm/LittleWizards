import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft, Coins, Calculator, TrendingUp, Rocket } from 'lucide-react';

const Finance = () => {
  const navigate = useNavigate();

  const stages = [
    {
      name: 'Money Explorers',
      ages: 'Ages 7-8',
      color: 'from-yellow-400 to-orange-400',
      icon: Coins,
      concepts: [
        'History of money (barter to currency)',
        'Identifying coins and bills',
        'Counting money up to $10',
        'Understanding work for reward',
        'Needs vs. Wants',
        'Introduction to saving (Three Jars: Spend, Save, Give)',
        'Banking basics (deposits & withdrawals)',
        'Simple trading and value exchange',
        'Concept of giving and charity',
        'Introduction to taxation'
      ],
      projects: [
        'What problem does money solve?',
        'Drawing a "Job Jar" poster',
        'Sorting activity: Need/Want magazine cutouts',
        'Tracking jar progress',
        'Design a bank branch and draw the vault',
        'Classroom trade session',
        'Choosing a charity to support',
        'Listing public services used in one day',
        'Simple product design and cost calculation',
        'The Lemonade Stand Plan Poster'
      ],
      keyActivities: [
        'Learn coin and bill identification',
        'Practice counting change',
        'Classify needs vs wants with real items',
        'Set up and track three saving jars',
        'Simple product brainstorming',
        'Calculate material costs',
        'Create a digital ad (drawing or video)',
        'Present product design and price'
      ]
    },
    {
      name: 'Budget Builders',
      ages: 'Ages 9-10',
      color: 'from-green-400 to-emerald-400',
      icon: Calculator,
      concepts: [
        'What is a budget?',
        'The 50/30/20 Rule (Save/Needs/Wants)',
        'Using spreadsheets and ledgers',
        'Prioritization and trade-offs',
        'Opportunity cost',
        'Savings vs. Checking accounts',
        'How banks make money (loans)',
        'Sales tax calculation',
        'Revenue, Cost of Goods Sold (COGS), Profit',
        'Market research and demand',
        'Risk and loss in business',
        'Personal finance apps'
      ],
      projects: [
        'Setting up a mock budget for 3 weeks',
        'Calculating opportunity cost',
        'Role-playing bank transactions',
        'Calculating sales tax on items',
        'Calculating profit on cookies sold',
        'Conducting mini-survey on favorites',
        'Creating a simple digital logo',
        'Risk mitigation discussion',
        'Weekly transactions in digital ledger',
        'Line-item budget for field trip',
        'Role-playing loan request',
        'Simulated Class Field Trip Budget Manager'
      ],
      keyActivities: [
        'Track income and expenses in spreadsheet',
        'Make forced trade-off decisions',
        'Practice percentage calculations',
        'Apply profit formula: Profit = Revenue - COGS',
        'Design a brand logo',
        'Create digital marketing flyers',
        'Budget for real-world scenario',
        'Learn about borrowing and repayment'
      ]
    },
    {
      name: 'Wealth Wizards',
      ages: 'Age 11',
      color: 'from-blue-400 to-indigo-400',
      icon: TrendingUp,
      concepts: [
        'Interest (Simple vs. Compound)',
        'Saving vs. Investing',
        'Stocks and mutual funds',
        'Risk and reward relationship',
        'Diversification',
        'Income tax vs. Sales tax',
        'Why governments need taxes',
        'Problem identification and solutions',
        'Design Thinking basics',
        'Business Model Canvas',
        'Revenue streams and pricing',
        'Intellectual Property (Patents)',
        'Credit and credit scores',
        'Online banking and internet safety',
        'Technology in business (AI, e-commerce)'
      ],
      projects: [
        'Calculating simple vs. compound interest over 5 years',
        'Researching famous companies',
        'Assigning risk scores to investments',
        'Creating tax bracket charts',
        'Brainstorming local problems and solutions',
        'Filling Business Model Canvas',
        'Creating multiple revenue streams',
        'Identifying patentable ideas',
        'Discussing consequences of bad credit',
        'Creating strong passwords',
        'List of technology tools for business',
        'The Future Fund Investment Plan'
      ],
      keyActivities: [
        'Calculate compound interest growth',
        'Compare investment options',
        'Map business model components',
        'Design pricing strategies',
        'Research patent applications',
        'Learn internet safety practices',
        'Present long-term investment plan',
        'Track conceptual investment growth'
      ]
    },
    {
      name: 'Startup Strategists',
      ages: 'Age 12+',
      color: 'from-red-400 to-pink-400',
      icon: Rocket,
      concepts: [
        'Assets, Liabilities, Net Worth',
        'Balance sheet basics',
        'Gross vs. Net income',
        'Tax deductions and credits',
        'Bank loans vs. Angel Investors vs. Venture Capital',
        'Equity and ownership',
        'Detailed risk assessment',
        'Insurance and contingency planning',
        'Market analysis and customer personas',
        'Patents, Trademarks, Copyright',
        'Digital infrastructure and scaling',
        'Customer Acquisition Cost (CAC)',
        'Revenue forecasting',
        'Operating costs projection',
        'The 60-second pitch structure',
        'Essential pitch deck slides'
      ],
      projects: [
        'Creating personal Net Worth statement',
        'Calculating gross/net income difference',
        'Calculating equity for $1,000 investment',
        'Identifying 3 risks with mitigation plans',
        'Writing Problem Statement for pitch',
        'Researching successful patents',
        'Defining Minimum Viable Product (MVP)',
        'Calculating customer acquisition cost',
        'Creating 3-year revenue projection',
        'Filming and critiquing 60-second pitch',
        'Creating first 5 slides of pitch deck',
        'The Young CEO Pitch (Final Project)'
      ],
      keyActivities: [
        'Calculate Net Worth formula',
        'Understand tax filing basics',
        'Compare funding sources',
        'Create business risk matrix',
        'Define target customer persona',
        'Research IP protection types',
        'Build financial projections',
        'Structure investor pitch',
        'Design professional pitch deck',
        'Present to VC panel (teachers/parents)'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Button 
            onClick={() => navigate('/')} 
            variant="ghost" 
            className="flex items-center space-x-2 text-orange-600 hover:text-orange-700"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-block p-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl mb-6">
            <Coins className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Finance & Entrepreneurship
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Progressive 4-stage program building financial literacy and entrepreneurial skills from ages 6-14
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-yellow-100 px-6 py-3 rounded-full">
              <p className="text-yellow-700 font-semibold">Ages 6-14</p>
            </div>
            <div className="bg-orange-100 px-6 py-3 rounded-full">
              <p className="text-orange-700 font-semibold">4 Progressive Stages</p>
            </div>
            <div className="bg-red-100 px-6 py-3 rounded-full">
              <p className="text-red-700 font-semibold">3 Months per Stage</p>
            </div>
            <div className="bg-green-100 px-6 py-3 rounded-full">
              <p className="text-green-700 font-semibold">Real-World Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stages Content */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl space-y-16">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div key={idx} className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900">{stage.name}</h2>
                    <p className="text-lg text-gray-600">{stage.ages}</p>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Key Concepts */}
                  <Card className="border-2 hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">📚 Key Concepts</h3>
                      <ul className="space-y-2">
                        {stage.concepts.map((concept, conceptIdx) => (
                          <li key={conceptIdx} className="flex items-start space-x-2">
                            <span className={`text-${idx === 0 ? 'yellow' : idx === 1 ? 'green' : idx === 2 ? 'blue' : 'red'}-500 mt-1`}>•</span>
                            <span className="text-gray-700 text-sm">{concept}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Projects */}
                  <Card className="border-2 hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Projects</h3>
                      <ul className="space-y-2">
                        {stage.projects.map((project, projectIdx) => (
                          <li key={projectIdx} className="flex items-start space-x-2">
                            <span className={`text-${idx === 0 ? 'yellow' : idx === 1 ? 'green' : idx === 2 ? 'blue' : 'red'}-500 mt-1`}>•</span>
                            <span className="text-gray-700 text-sm">{project}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Key Activities */}
                  <Card className="border-2 hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">⚡ Key Activities</h3>
                      <ul className="space-y-2">
                        {stage.keyActivities.map((activity, activityIdx) => (
                          <li key={activityIdx} className="flex items-start space-x-2">
                            <span className={`text-${idx === 0 ? 'yellow' : idx === 1 ? 'green' : idx === 2 ? 'blue' : 'red'}-500 mt-1`}>•</span>
                            <span className="text-gray-700 text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-yellow-400 to-orange-400">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to become a financial wizard?
          </h2>
          <p className="text-xl text-yellow-50 mb-8">
            Join our entrepreneurship program and learn the skills to build your financial future
          </p>
          <Button 
            onClick={() => navigate('/')} 
            size="lg"
            className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold"
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

export default Finance;