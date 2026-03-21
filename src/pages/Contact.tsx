import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Facebook, Instagram, Twitter } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    submission_type: 'general',
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
      .from('fraternity_contact_submissions')
      .insert([formData]);

    setLoading(false);

    if (submitError) {
      setError('Something went wrong. Please try again or contact us directly.');
    } else {
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        submission_type: 'general',
      });
    }
  };

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-royal-blue-900 to-royal-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Mail className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Get in touch with the Nu Mu Sigma Chapter
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Whether you're interested in our programs, want to partner with us, or have questions about Nu Mu Sigma Chapter, we'd love to hear from you.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-royal-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-royal-blue" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600">info@numusigma.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-royal-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-royal-blue" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600">(239) 555-SIGMA</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-royal-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-royal-blue" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Location</h3>
                    <p className="text-slate-600">Fort Myers, Florida</p>
                    <p className="text-slate-600">Serving Southwest Florida</p>
                  </div>
                </div>
              </div>

              <div className="bg-royal-blue-50 border border-royal-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Follow Us on Social Media
                </h3>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-royal-blue rounded-lg flex items-center justify-center hover:bg-royal-blue-700 transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-royal-blue rounded-lg flex items-center justify-center hover:bg-royal-blue-700 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-royal-blue rounded-lg flex items-center justify-center hover:bg-royal-blue-700 transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Contact Form
                </h3>

                {success && (
                  <div className="mb-6 p-4 bg-royal-blue-50 border border-royal-blue-200 rounded-lg flex items-start">
                    <CheckCircle className="h-5 w-5 text-royal-blue flex-shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-royal-blue-800 font-medium">Thank you for reaching out!</p>
                      <p className="text-royal-blue-700 text-sm mt-1">We'll get back to you soon.</p>
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
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
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
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-royal-blue-500 focus:border-royal-blue-500 outline-none transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="submission_type" className="block text-sm font-semibold text-slate-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="submission_type"
                      name="submission_type"
                      value={formData.submission_type}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-royal-blue-500 focus:border-royal-blue-500 outline-none transition"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="program">Program Information</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="event">Event Inquiry</option>
                      <option value="volunteer">Volunteer Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-royal-blue-500 focus:border-royal-blue-500 outline-none transition resize-none"
                      placeholder="Tell us how we can help..."
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
                        Send Message
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
    </div>
  );
}
