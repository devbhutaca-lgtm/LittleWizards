import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Download, FileImage } from 'lucide-react';

const DownloadFlyers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Download Flyers</h1>
          <p className="text-xl text-gray-600">High-quality promotional flyers for LittleWizards Academy</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Finance Flyer */}
          <Card className="border-4 border-orange-300 shadow-2xl hover:shadow-3xl transition-all">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileImage className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Finance & Entrepreneurship</h2>
              <p className="text-gray-600 mb-6">Ages 6-14 • 4 Progressive Stages</p>
              <a 
                href="/flyers/LittleWizards_Finance_Flyer.jpeg" 
                download="LittleWizards_Finance_Flyer.jpeg"
              >
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 hover:from-yellow-500 hover:to-orange-500 font-bold text-lg py-6"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Finance Flyer
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Science Flyer */}
          <Card className="border-4 border-blue-300 shadow-2xl hover:shadow-3xl transition-all">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileImage className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Science Foundations</h2>
              <p className="text-gray-600 mb-6">Grades 5-8 • Ontario Curriculum</p>
              <a 
                href="/flyers/LittleWizards_Science_Flyer.jpeg" 
                download="LittleWizards_Science_Flyer.jpeg"
              >
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 font-bold text-lg py-6"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Science Flyer
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-white/80 backdrop-blur-md border-2 border-gray-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Use These Flyers</h3>
              <ul className="text-left space-y-2 text-gray-700 max-w-2xl mx-auto">
                <li>✅ <strong>Print:</strong> High-quality JPEG files ready for printing (8.5" x 11")</li>
                <li>✅ <strong>Share:</strong> Perfect for email campaigns and social media</li>
                <li>✅ <strong>Distribute:</strong> Hand out at schools, community centers, libraries</li>
                <li>✅ <strong>Display:</strong> Post on bulletin boards and information kiosks</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button 
            onClick={() => window.location.href = '/'}
            variant="outline"
            size="lg"
            className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DownloadFlyers;
