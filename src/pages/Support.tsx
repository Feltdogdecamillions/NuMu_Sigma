import { useState } from 'react';
import { Heart, Handshake, DollarSign, Users, Award, Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Support() {
  const [formData, setFormData] = useState({
    organization_name: '',
    contact_name: '',
    email: '',
    phone: '',
    support_type: 'partnership',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const { error: submitError } = await supabase
      .from('fraternity_support_requests')
      .insert([formData]);

    setLoading(false);

    if (submitError) {
      setError('Something went wrong. Please try again or contact us directly.');
    } else {
      setSuccess(true);
      setFormData({
        organization_name: '',
        contact_name: '',
        email: '',
        phone: '',
        support_type: 'partnership',
        message: '',
      });
    }
  };

  const supportOptions = [
    {
      icon: Handshake,
      title: 'Partnership Opportunities',
      description: 'Collaborate with Nu Mu Sigma Chapter on community initiatives and programs that align with our mutual goals.',
      benefits: [
        'Co-branded community events',
        'Shared resources and expertise',
        'Expanded reach in Southwest Florida',
        'Impact measurement and reporting',
      ],
    },
    {
      icon: DollarSign,
      title: 'Financial Support',
      description: 'Your donation directly supports scholarships, youth programs, and community service initiatives.',
      benefits: [
        'Tax-deductible contributions',
        'Scholarship fund support',
        'Program-specific donations',
        'Recognition opportunities',
      ],
    },
    {
      icon: Award,
      title: 'Sponsorship',
      description: 'Sponsor our events and programs to gain visibility while supporting meaningful community work.',
      benefits: [
        'Event sponsorship packages',
        'Logo placement and recognition',
        'Speaking opportunities',
        'Community goodwill',
      ],
    },
    {
      icon: Users,
      title: 'Volunteer Support',
      description: 'Engage your employees or members in hands-on service through our volunteer programs.',
      benefits: [
        'Team building opportunities',
        'Corporate social responsibility',
        'Skills-based volunteering',
        'Community impact',
      ],
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-royal-blue-900 to-royal-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Heart className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Support Our Mission
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Partner with us to make a lasting impact in Southwest Florida
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Ways to Support Nu Mu Sigma Chapter
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Whether through partnership, financial support, sponsorship, or volunteering, your contribution helps us serve Southwest Florida communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div
                  key={index}
                  className="bg-royal-blue-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border-2 border-royal-blue-100"
                >
                  <Icon className="h-12 w-12 text-royal-blue mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{option.title}</h3>
                  <p className="text-slate-700 mb-6 leading-relaxed">{option.description}</p>
                  <h4 className="font-semibold text-slate-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-2 w-2 rounded-full bg-royal-blue" />
                        </div>
                        <span className="ml-3 text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why Partner With Us?
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  Nu Mu Sigma Chapter of Phi Beta Sigma Fraternity, Incorporated, based in Fort Myers, has a proven track record of creating meaningful change throughout Southwest Florida. Our programs reach hundreds of community members annually and address critical needs in education, health, leadership development, and social empowerment.
                </p>
                <p>
                  When you partner with us, you're not just supporting a fraternity—you're investing in the future of Southwest Florida communities. Your contribution enables us to expand our reach, deepen our impact, and create opportunities for those who need them most through sustained service and outreach.
                </p>
                <p>
                  We value transparency and accountability. All partners receive regular updates on program outcomes, impact metrics, and how their support is making a difference in real lives throughout our service area.
                </p>
              </div>

              <div className="mt-8 bg-white rounded-xl p-6 border-2 border-royal-blue">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Our Impact
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Community Members Served</span>
                    <span className="font-bold text-royal-blue">500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Youth Mentored</span>
                    <span className="font-bold text-royal-blue">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Scholarships Awarded</span>
                    <span className="font-bold text-royal-blue">$25,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Volunteer Hours</span>
                    <span className="font-bold text-royal-blue">1,000+</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Partnership Inquiry Form
                </h3>

                {success && (
                  <div className="mb-6 p-4 bg-royal-blue-50 border border-royal-blue-200 rounded-lg flex items-start">
                    <CheckCircle className="h-5 w-5 text-royal-blue flex-shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-royal-blue-800 font-medium">Thank you for your interest!</p>
                      <p className="text-royal-blue-700 text-sm mt-1">We'll be in touch soon to discuss partnership opportunities.</p>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="organization_name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      id="organization_name"
                      name="organization_name"
                      value={formData.organization_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-royal-blue-500 focus:border-royal-blue-500 outline-none transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact_name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contact_name"
                      name="contact_name"
                      value={formData.contact_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-royal-blue-500 focus:border-royal-blue-500 outline-none transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-royal-blue-500 focus:border-royal-blue-500 outline-none transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-royal-blue-500 focus:border-royal-blue-500 outline-none transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="support_type" className="block text-sm font-semibold text-slate-700 mb-2">
                      Type of Support *
                    </label>
                    <select
                      id="support_type"
                      name="support_type"
                      value={formData.support_type}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-royal-blue-500 focus:border-royal-blue-500 outline-none transition"
                    >
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="donation">Financial Support</option>
                      <option value="sponsorship">Event Sponsorship</option>
                      <option value="volunteer">Volunteer Support</option>
                      <option value="inkind">In-Kind Donation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Tell Us About Your Interest *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-royal-blue-500 focus:border-royal-blue-500 outline-none transition resize-none"
                      placeholder="Share details about how you'd like to support our mission..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-royal-blue text-white font-bold rounded-lg hover:bg-royal-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {loading ? (
                      'Sending...'
                    ) : (
                      <>
                        Submit Inquiry
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-royal-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Together, We Can Do More
          </h2>
          <p className="text-xl text-white mb-8 leading-relaxed">
            Every partnership, donation, and volunteer hour brings us closer to realizing our vision of a stronger, more vibrant Southwest Florida.
          </p>
          <p className="text-2xl font-bold italic">
            "Culture for Service and Service for Humanity"
          </p>
        </div>
      </section>
    </div>
  );
}
