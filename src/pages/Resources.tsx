import { Construction } from 'lucide-react';

export default function Resources() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <section className="bg-gradient-to-br from-royal-blue-900 to-royal-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 mb-6">
            <Construction className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Resources</h1>
        </div>
      </section>

      <div className="h-1.5 bg-gradient-to-r from-royal-blue via-slate-300 to-royal-blue" />

      <div className="flex-grow flex items-center justify-center py-24 px-4">
        <div className="text-center max-w-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-royal-blue-50 border border-royal-blue-100 mb-8">
            <Construction className="h-10 w-10 text-royal-blue" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Under Construction</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We're putting together a collection of resources for our members. Please check back soon.
          </p>
        </div>
      </div>
    </div>
  );
}
