"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Wallet, 
  RefreshCcw, 
  ShieldCheck, 
  Smartphone, 
  Users, 
  Zap, 
  CheckCircle2, 
  TrendingUp, 
  Download,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "How it works", href: "#how-it-works" },
    { name: "Why PrimePay", href: "#why-primepay" },
    { name: "Product", href: "#product" },
    { name: "Trust", href: "#trust" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden selection:bg-gold-500/30 selection:text-gold-50">
      
      {/* Background Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gold-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-gold-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <header className="sticky top-0 w-full z-50 bg-[#050505] border-b border-white/10 shadow-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.jpeg" alt="PrimePay Logo" width={32} height={32} className="rounded-lg object-cover" />
            <span className="font-bold text-xl tracking-tight text-white">PrimePay</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-dark-300 hover:text-gold-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-white hover:text-gold-300 transition-colors">
              Login
            </button>
            <a href="/PrimePe.apk" download="PrimePe.apk" className="px-5 py-2.5 rounded-full bg-white text-dark-950 text-sm font-semibold hover:bg-gold-100 transition-colors flex items-center gap-2">
              Download <Download className="w-4 h-4" />
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#050505] border-t border-white/10 p-6 flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-base font-medium text-dark-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      <main className="pt-32 pb-24">
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-12 pb-24 lg:pt-24 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-gold-500/30 text-gold-300 text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              Live · 12,840 withdrawals today
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Turn small tasks <br />
              <span className="gold-gradient-text">into real money.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-dark-300 max-w-xl leading-relaxed"
            >
              Complete simple tasks, earn rewards instantly, and withdraw your money in seconds. No friction, just results.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            >
              <a href="/PrimePe.apk" download="PrimePe.apk" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-dark-950 font-semibold text-lg hover:shadow-lg hover:shadow-gold-500/25 transition-all flex items-center justify-center gap-2 group">
                Download App
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-white font-semibold text-lg hover:bg-white/5 transition-colors">
                Start Earning
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 text-sm font-medium text-dark-400 pt-8"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400" /> Instant Withdrawals
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400" /> Secure Payments
              </div>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex-1 relative w-full max-w-md lg:max-w-none perspective-1000"
          >
            <div className="relative z-10 glass-panel rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent pointer-events-none" />
              
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-dark-300 font-medium mb-1">Wallet balance</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-4xl font-bold text-white">₹2,840<span className="text-xl text-dark-400">.00</span></h3>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                      <TrendingUp className="w-3 h-3" /> +8.4%
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border-gold-500/30">
                  <Wallet className="w-6 h-6 text-gold-400" />
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  { title: "Try a new finance app", time: "2 min", amount: "+₹45" },
                  { title: "Complete a survey", time: "1 min", amount: "+₹18" },
                  { title: "Watch product demo", time: "45s", amount: "+₹12" },
                ].map((task, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-gold-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">{task.title}</p>
                        <p className="text-xs text-dark-400">{task.time}</p>
                      </div>
                    </div>
                    <span className="font-bold text-gold-300">{task.amount}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="flex-1 py-3 rounded-xl bg-white text-dark-950 font-semibold hover:bg-gold-50 transition-colors">
                  Withdraw
                </button>
                <button className="flex-1 py-3 rounded-xl glass-panel text-white font-semibold hover:bg-white/10 transition-colors">
                  Earn more
                </button>
              </div>
            </div>
            
            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 -bottom-8 glass-panel rounded-2xl p-4 border border-gold-500/20 shadow-xl hidden md:flex items-center gap-4 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-xs text-dark-300">Withdrawal · UPI</p>
                <p className="text-sm font-bold text-white">₹520.00 <span className="text-dark-400 font-normal">in 7.2s</span></p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* The Loop Section */}
        <section id="how-it-works" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mb-16">
              <h2 className="text-sm font-bold tracking-widest text-gold-400 uppercase mb-4">The loop</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">A loop designed to keep <br className="hidden md:block"/> rewarding you.</h3>
              <p className="text-xl text-dark-300">Five steps. No friction. Built so every action you take pays back, again and again.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Complete Task", desc: "30s – 2 min" },
                { step: "02", title: "Earn Rewards", desc: "Instantly credited" },
                { step: "03", title: "Withdraw Instantly", desc: "UPI · Bank · Wallet" },
                { step: "04", title: "Refer Friends", desc: "Share your code" },
                { step: "05", title: "Earn More", desc: "Recurring rewards" },
              ].map((item, i) => (
                <div key={i} className="glass-panel p-6 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-gold-500/30 transition-colors">
                  <div className="text-6xl font-bold text-white/5 absolute -right-2 -bottom-4 pointer-events-none group-hover:text-gold-500/5 transition-colors">
                    {item.step}
                  </div>
                  <div className="text-gold-400 text-sm font-bold mb-4">{item.step}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-dark-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why PrimePay Section */}
        <section id="why-primepay" className="py-24 bg-white/5 border-y border-white/5 relative">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-sm font-bold tracking-widest text-gold-400 uppercase mb-4">Why people love it</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Built around the things <br/> that actually matter.</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="glass-panel rounded-3xl p-8 border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-gold-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Instant withdrawals</h4>
                  <p className="text-dark-300 leading-relaxed mb-8">Money in your account in under 8 seconds. No "processing" purgatory. The moment you tap withdraw, it lands.</p>
                </div>
                <div className="bg-dark-950 rounded-2xl p-6 border border-white/5 flex items-center justify-between">
                   <div>
                     <p className="text-xs text-dark-400 mb-1">Completed</p>
                     <p className="font-semibold text-white">Withdrawal · UPI</p>
                   </div>
                   <div className="text-right">
                     <p className="text-lg font-bold text-green-400">₹520.00</p>
                     <p className="text-xs text-dark-400">7.2s</p>
                   </div>
                </div>
              </div>

              <div className="glass-panel rounded-3xl p-8 border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                    <Smartphone className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Easy tasks</h4>
                  <p className="text-dark-300 leading-relaxed mb-8">No complicated work. Two-minute actions. Designed for thumbs, not spreadsheets.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Surveys", "App trials", "Watch & earn", "Quick polls"].map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-full bg-white/5 text-sm font-medium text-white border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-panel rounded-3xl p-8 border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Refer & earn</h4>
                  <p className="text-dark-300 leading-relaxed mb-8">Recurring rewards on every friend you bring to the platform. Build your passive income.</p>
                </div>
                <div className="bg-dark-950 rounded-2xl p-4 border border-white/5 flex items-center justify-between border-dashed">
                  <span className="text-sm text-dark-400">Your code</span>
                  <span className="font-mono font-bold text-gold-300 tracking-wider">PRIMEPAY·ARJ24</span>
                </div>
              </div>

              <div className="glass-panel rounded-3xl p-8 border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6 text-green-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Secure & Smooth</h4>
                  <p className="text-dark-300 leading-relaxed mb-8">256-bit encryption. PCI-aligned payouts. No data resale. 60fps experience built for one-hand use. Zero friction.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 bg-dark-950 rounded-xl p-4 border border-white/5 text-center">
                    <ShieldCheck className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <p className="text-xs font-semibold text-white">Encrypted</p>
                  </div>
                  <div className="flex-1 bg-dark-950 rounded-xl p-4 border border-white/5 text-center">
                    <RefreshCcw className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <p className="text-xs font-semibold text-white">60fps UI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Withdrawals Marquee */}
        <section className="py-16 overflow-hidden">
           <div className="flex whitespace-nowrap gap-8 animate-[marquee_20s_linear_infinite]">
             {[150, 520, 75, 350, 230, 95, 480, 1200, 60, 275, 815, 140, 150, 520, 75, 350].map((amount, i) => (
                <div key={i} className="inline-flex items-center gap-3 glass-panel px-6 py-3 rounded-full border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span className="text-sm font-medium text-dark-200">Withdrawal successful</span>
                  <span className="font-bold text-white">₹{amount}</span>
                </div>
             ))}
           </div>
        </section>

        {/* Trust & CTA */}
        <section id="trust" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-bold tracking-widest text-gold-400 uppercase mb-4">Trust</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">The boring details <br/> we obsess over.</h3>
                <p className="text-xl text-dark-300 mb-12 max-w-lg">
                  Earning should be the exciting part. Everything underneath it should be quiet, predictable, and safe.
                </p>

                <div className="space-y-6">
                  {[
                    { title: "Secure transactions", desc: "256-bit end-to-end encryption" },
                    { title: "Fast withdrawals", desc: "Average 7.4s settlement" },
                    { title: "Verified rewards", desc: "Audited reward pool" },
                    { title: "Reliable platform", desc: "99.98% uptime, 24/7" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4 text-gold-400" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">{item.title}</h5>
                        <p className="text-sm text-dark-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel rounded-3xl p-10 lg:p-16 border border-gold-500/20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gold-500/10 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold text-white mb-6">Ready when you are.</h3>
                  <p className="text-xl text-dark-300 mb-10">Your next reward is one task away.</p>
                  
                  <a href="/PrimePe.apk" download="PrimePe.apk" className="w-full sm:w-auto mx-auto px-8 py-4 rounded-full bg-white text-dark-950 font-bold text-lg hover:bg-gold-50 transition-colors flex items-center justify-center gap-2 mb-6">
                    Download PrimePay
                    <Download className="w-5 h-5" />
                  </a>
                  <p className="text-sm font-medium text-dark-400 hover:text-white transition-colors cursor-pointer mb-8">
                    Learn more
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold tracking-wider text-dark-500 uppercase">
                    <span>iOS · Android</span>
                    <span className="w-1 h-1 rounded-full bg-dark-700"></span>
                    <span>Free to use</span>
                    <span className="w-1 h-1 rounded-full bg-dark-700"></span>
                    <span>No hidden fees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-dark-950">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Image src="/logo.jpeg" alt="PrimePay Logo" width={24} height={24} className="rounded-md object-cover" />
            <span className="font-bold text-lg text-white">PrimePay</span>
            <span className="text-dark-500 text-sm ml-4">© 2026</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-dark-400">
            <a href="#" className="hover:text-gold-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-gold-300 transition-colors">Security</a>
            <a href="#" className="hover:text-gold-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Marquee Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
