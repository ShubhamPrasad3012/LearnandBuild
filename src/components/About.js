import React from 'react';
import { CheckCircle } from 'lucide-react';
import FloatingCard from './Card';

const About = ({ scrollY }) => {
  const achievements = [
    "10+ years of industry expertise",
    "500+ successful project deliveries",
    "24/7 dedicated support team",
    "ISO 27001 certified security"
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FloatingCard scrollY={scrollY}>
            <div className="relative">  
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-3xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </FloatingCard>
          
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Our Mission
              </span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We're pioneering the future of digital transformation, empowering businesses to achieve extraordinary results through innovative technology solutions.
            </p>
            <div className="space-y-4">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;