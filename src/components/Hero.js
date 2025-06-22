import React from 'react';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import CardSwap, { Card } from './CardSwap';
import '../index.css';
import '../App.css';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900/80 backdrop-blur-2xl text-white pt-24 md:pt-0"
    > 
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-16 w-72 h-72 bg-cyan-400/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-16 right-12 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[200px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-400/10 via-purple-600/10 to-pink-400/10 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
      </div>
 
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
         
        <div className="flex-1 text-center lg:text-left space-y-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="block">Transform</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(137,207,240,0.5)]">
              Your Business
            </span>
            <span className="block text-white">Into the Digital Future</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
            Unlock growth with cutting-edge solutions. Drive innovation that delivers real results and transforms industries.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-lg shadow-md shadow-purple-500/30 hover:scale-105 hover:shadow-xl transition-all duration-300">
              <span className="flex  items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 rounded-xl border border-white/10 blur-[2px] animate-pulse pointer-events-none"></span>
            </button>

            <button className="relative px-8 py-4 border-2 border-slate-500 rounded-xl font-semibold text-lg hover:border-cyan-400 hover:text-cyan-300 transition duration-300">
              <div className="flex items-center gap-2">
                <Play className="w-5 h-5" /> Watch Demo
              </div>
              <span className="absolute inset-0 rounded-xl border border-white/5 blur-[1px] animate-flicker pointer-events-none"></span>
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400">10M+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">50+</div>
              <div className="text-gray-400">Awards</div>
            </div>
          </div>
        </div>
 
        <div className="flex-1 flex cursor-pointer mb-48 md:mb-40 ml-36 md:ml-0 justify-center items-center relative min-h-[200px] md:min-h-[550px]">
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <div className="h-full w-full bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-xl p-6 text-white shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Data Science</h3>
                  <p className="text-sm sm:text-base leading-relaxed">
        Dive deep into <span className="text-cyan-300 font-medium">machine learning</span>, <span className="text-cyan-300 font-medium">Python</span>, and <span className="text-cyan-300 font-medium">real-world analytics</span>. Train models, visualize data, and build impactful solutions with hands-on projects.
      </p>
      <ul className="text-xs sm:text-sm list-disc list-inside text-white/80 pt-2">
        <li>Pandas, NumPy, Matplotlib</li>
        <li>Regression & Classification Models</li>
        <li>Real-world case studies</li>
      </ul>
                </div>
                <span className="text-xs text-white/70 mt-4">Level: Intermediate</span>
              </div>
            </Card>

            <Card>
              <div className="h-full w-full bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 rounded-xl p-6 text-white shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Cybersecurity</h3>
                    <p className="text-sm sm:text-base leading-relaxed">
        Explore ethical hacking, <span className="text-yellow-300 font-medium">penetration testing</span>, and <span className="text-yellow-300 font-medium">cyber forensics</span>. Learn to protect systems using industry-standard tools and frameworks.
      </p>
       <ul className="text-xs sm:text-sm list-disc list-inside text-white/80 pt-2">
        <li>Wireshark, Kali Linux, Burp Suite</li>
        <li>OWASP Top 10 Security Risks</li>
        <li>Simulated attack scenarios</li>
      </ul>
                </div>
                <span className="text-xs text-white/70 mt-4">Level: Beginner</span>
              </div>
            </Card>

            <Card>
              <div className="h-full w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] rounded-xl p-6 text-white shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Full Stack Dev</h3>
                  <p className="text-sm sm:text-base leading-relaxed">
        Learn to build modern web apps from scratch using <span className="text-green-300 font-medium">React</span>, <span className="text-green-300 font-medium">Node.js</span>, <span className="text-green-300 font-medium">MongoDB</span> and more. Hands-on projects from design to deployment.
      </p>
      <ul className="text-xs sm:text-sm list-disc list-inside text-white/80 pt-2">
        <li>Frontend: HTML, Tailwind, React</li>
        <li>Backend: Express, REST APIs</li>
        <li>Deployment: Vercel, Render, Netlify</li>
      </ul>
                </div>
                <span className="text-xs text-white/70 mt-4">Level: All Levels</span>
              </div>
            </Card>
          </CardSwap>
        </div>
      </div>
 
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-purple-400" />
      </div>
    </section>
  );
};

export default Hero;
