import { useState } from 'react';
import { Download, FileText, Video, BookOpen, ArrowRight, CheckCircle, Mail } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Resources() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const { error: submitError } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }]);

    setLoading(false);

    if (submitError) {
      if (submitError.code === '23505') {
        setError('This email is already subscribed.');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } else {
      setSuccess(true);
      setEmail('');
    }
  };

  const checklistItems = [
    'Mission and vision clarity assessment',
    'Board governance structure evaluation',
    'Financial management systems review',
    'Program design and impact measurement',
    'Grant research and funder alignment',
    'Proposal writing essentials checklist',
    'Budget development guidelines',
    'Compliance and reporting requirements',
    'Documentation and record-keeping standards',
    'Strategic planning for sustainability',
  ];

  const blogPosts = [
    {
      title: '10 Common Grant Writing Mistakes and How to Avoid Them',
      category: 'Grant Writing',
      date: 'March 2026',
    },
    {
      title: 'Building a Sustainable Grant Strategy for Small Nonprofits',
      category: 'Strategy',
      date: 'February 2026',
    },
    {
      title: 'Understanding Federal Grant Compliance Requirements',
      category: 'Compliance',
      date: 'January 2026',
    },
  ];

  const videos = [
    {
      title: 'Introduction to Grant Readiness',
      duration: '12 min',
    },
    {
      title: 'Writing a Compelling Needs Statement',
      duration: '15 min',
    },
    {
      title: 'Budget Development Best Practices',
      duration: '18 min',
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-slate-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Resources
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Free tools, guides, and insights to help your nonprofit succeed in grant funding.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-10 lg:mb-0">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-12 text-white shadow-2xl">
                <Download className="h-16 w-16 mb-6" />
                <h2 className="text-3xl font-bold mb-4">
                  Free Grant Readiness Checklist
                </h2>
                <p className="text-emerald-50 text-lg mb-6 leading-relaxed">
                  A comprehensive checklist to assess your organization's readiness to pursue grant funding successfully.
                </p>
                <button className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors shadow-lg">
                  Download PDF
                  <Download className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                What's Included:
              </h3>
              <ul className="space-y-3">
                {checklistItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="ml-3 text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="text-center mb-8">
              <Mail className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Stay Informed
              </h2>
              <p className="text-lg text-slate-600">
                Subscribe to receive grant writing tips, funding opportunities, and nonprofit resources.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {success && (
                <p className="mt-4 text-emerald-600 text-center font-medium">
                  Thank you for subscribing! Check your email for confirmation.
                </p>
              )}
              {error && (
                <p className="mt-4 text-red-600 text-center font-medium">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-slate-600">
              Insights and best practices for nonprofit grant success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-slate-200"
              >
                <div className="h-48 bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                  <FileText className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-sm text-slate-500">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {post.title}
                  </h3>
                  <button className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Video Tutorials
            </h2>
            <p className="text-xl text-slate-600">
              Watch and learn at your own pace.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-slate-200"
              >
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center relative">
                  <Video className="h-16 w-16 text-white" />
                  <div className="absolute bottom-3 right-3 bg-slate-900/80 text-white px-2 py-1 rounded text-sm font-medium">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {video.title}
                  </h3>
                  <button className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center">
                    Watch Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Need More Personalized Help?
          </h2>
          <p className="text-xl text-emerald-50 mb-10 leading-relaxed">
            Schedule a consultation to discuss your specific grant needs and challenges.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors shadow-lg">
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
