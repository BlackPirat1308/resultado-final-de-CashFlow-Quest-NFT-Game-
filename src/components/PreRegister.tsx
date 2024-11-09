import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function PreRegister() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulated API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-24" id="pre-register">
      <div className="max-w-4xl mx-auto bg-emerald-800/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-cyan-400/20">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-teal-300 text-transparent bg-clip-text">
            Join the Waitlist
          </h2>
          <p className="text-xl text-teal-100">
            Be among the first to experience CashFlow Quest and get exclusive early access rewards
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-6 py-4 rounded-xl bg-emerald-900/50 border border-cyan-400/20 text-teal-100 placeholder-teal-300/50 focus:outline-none focus:border-cyan-400/50 transition-all duration-300"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 flex items-center gap-2"
            >
              <span>{status === 'loading' ? 'Joining...' : 'Join'}</span>
              <Send className="h-4 w-4" />
            </button>
          </div>
          {status === 'success' && (
            <p className="mt-4 text-center text-teal-300">
              Thanks for joining! Check your email for confirmation.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-center text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </form>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-2xl font-bold text-cyan-400 mb-2">Early Access</h4>
            <p className="text-teal-100">Be the first to play and shape the future of CashFlow Quest</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-cyan-400 mb-2">Exclusive NFTs</h4>
            <p className="text-teal-100">Receive limited edition NFTs available only to early supporters</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-cyan-400 mb-2">Special Rewards</h4>
            <p className="text-teal-100">Get bonus in-game currency and unique character skins</p>
          </div>
        </div>
      </div>
    </section>
  );
}