import React from 'react';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import FloatingCard from './Card';

const Hero = ({ scrollY }) => {
  return (
    <section id="home" className="min-h-screen flex items-center relative">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Transform
              </span>
              <br />
              <span className="text-white">Your Business</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Unlock unprecedented growth with our cutting-edge solutions. Experience the power of innovation that drives results and transforms industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="relative z-10 flex items-center">
                  Get Started <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-8 py-4 border-2 border-purple-400 rounded-full font-semibold text-lg hover:bg-purple-400/10 transition-all duration-300 flex items-center">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">10M+</div>
                <div className="text-gray-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-gray-400">Awards</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <FloatingCard scrollY={scrollY}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg p-8 rounded-3xl border border-purple-500/20">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-4 bg-gradient-to-r from-purple-500 to-transparent rounded"></div>
                      <div className="h-4 bg-gradient-to-r from-pink-500 to-transparent rounded w-3/4"></div>
                      <div className="h-4 bg-gradient-to-r from-blue-500 to-transparent rounded w-1/2"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg"></div>
                      <div className="h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-purple-400" />
      </div>
    </section>
  );
};

export default Hero;