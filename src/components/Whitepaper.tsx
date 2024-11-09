import React from 'react';
import { FileText, Download, Brain, Bot, BarChart } from 'lucide-react';

export function Whitepaper() {
  return (
    <section className="py-24" id="whitepaper">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-teal-300 text-transparent bg-clip-text">
            Whitepaper
          </h2>
          <p className="text-xl text-teal-100">
            Dive deep into the technical details and vision of CashFlow Quest
          </p>
        </div>

        <div className="bg-emerald-800/30 rounded-2xl p-8 backdrop-blur-sm border border-cyan-400/20">
          <div className="flex items-start gap-6 mb-12">
            <div className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 p-4 rounded-xl">
              <FileText className="h-8 w-8 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-300 to-teal-300 text-transparent bg-clip-text">
                CashFlow Quest Whitepaper v1.0
              </h3>
              <p className="text-teal-100 mb-4">
                Learn about our vision, technology stack, tokenomics, and roadmap
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300">
                <Download className="h-5 w-5" />
                Download Whitepaper
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-cyan-400" />
                <h4 className="text-xl font-semibold text-cyan-400">AI Integration</h4>
              </div>
              <ul className="space-y-2">
                <li className="text-teal-100 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  Adaptive difficulty system
                </li>
                <li className="text-teal-100 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  Dynamic event generation
                </li>
                <li className="text-teal-100 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  Personalized learning paths
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-cyan-400" />
                <h4 className="text-xl font-semibold text-cyan-400">Game Features</h4>
              </div>
              <ul className="space-y-2">
                <li className="text-teal-100 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  NFT-based financial assets
                </li>
                <li className="text-teal-100 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  Interactive learning mechanics
                </li>
                <li className="text-teal-100 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  Real-world financial simulations
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-cyan-400" />
                <h4 className="text-xl font-semibold text-cyan-400">Technology</h4>
              </div>
              <ul className="space-y-2">
                <li className="text-teal-100 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  Ethereum blockchain integration
                </li>
                <li className="text-teal-100 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  Smart contract architecture
                </li>
                <li className="text-teal-100 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  Cross-platform compatibility
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-emerald-900/30 rounded-xl p-6 border border-cyan-400/10">
            <h4 className="text-xl font-semibold text-cyan-400 mb-4">AI-Powered Features</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-teal-200 mb-2">Adaptive Learning</h5>
                <p className="text-teal-100 text-sm">
                  Our AI system adjusts difficulty and content based on your learning style and progress,
                  ensuring an optimal educational experience.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-teal-200 mb-2">Dynamic Economy</h5>
                <p className="text-teal-100 text-sm">
                  AI-managed in-game economy that responds to player behavior and market conditions,
                  creating a realistic financial ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}