import React from 'react';
import { Milestone, Route, Brain } from 'lucide-react';

const phases = [
  {
    quarter: 'Q1 2024',
    title: 'Planning & Design',
    items: [
      'System architecture definition',
      'UI/UX wireframes and mockups',
      'AI system design and integration planning'
    ]
  },
  {
    quarter: 'Q2 2024',
    title: 'Backend Development',
    items: [
      'Server infrastructure setup',
      'Blockchain integration',
      'AI model training and implementation'
    ]
  },
  {
    quarter: 'Q3 2024',
    title: 'Frontend Development',
    items: [
      'UI implementation',
      'Backend integration',
      'AI-powered game mechanics development'
    ]
  },
  {
    quarter: 'Q4 2024',
    title: 'Testing & Launch',
    items: [
      'Comprehensive testing',
      'AI system optimization',
      'Platform launch'
    ]
  }
];

export function Roadmap() {
  return (
    <section className="py-24" id="roadmap">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-teal-300 text-transparent bg-clip-text">
          Roadmap
        </h2>
        <p className="text-xl text-teal-100 max-w-2xl mx-auto">
          Our journey to revolutionize financial education through AI-powered gaming
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500/20 via-teal-500/20 to-emerald-500/20"></div>
        
        {phases.map((phase, index) => (
          <div key={phase.quarter} className={`relative mb-16 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'} md:w-1/2`}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:top-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center">
                {index === phases.length - 1 ? (
                  <Route className="h-6 w-6 text-white" />
                ) : (
                  <Milestone className="h-6 w-6 text-white" />
                )}
              </div>
            </div>
            
            <div className="bg-emerald-800/30 p-8 rounded-xl backdrop-blur-sm border border-cyan-400/20 ml-8 md:ml-0">
              <div className="mb-4">
                <span className="text-sm font-semibold text-cyan-400">{phase.quarter}</span>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-teal-300 text-transparent bg-clip-text">
                  {phase.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {phase.items.map((item, i) => (
                  <li key={i} className="text-teal-100 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}