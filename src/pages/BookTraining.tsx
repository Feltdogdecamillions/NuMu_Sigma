import { Link } from 'react-router-dom';
import { BookOpen, Users, Video, Calendar, Star, ArrowRight, CheckCircle } from 'lucide-react';

export default function BookTraining() {
  const bookFeatures = [
    'Step-by-step guide to grant readiness',
    'Real-world examples and case studies',
    'Templates and worksheets',
    'Funder research strategies',
    'Writing techniques that win',
    'Budget development frameworks',
    'Compliance best practices',
    'Sustainability planning tools',
  ];

  const workshops = [
    {
      title: 'Grant Writing Fundamentals',
      duration: 'Half-day',
      description: 'Learn the essential elements of successful grant proposals, from needs statements to evaluation plans.',
    },
    {
      title: 'Grant Readiness Bootcamp',
      duration: 'Full-day',
      description: 'Comprehensive assessment and planning to prepare your organization for grant funding success.',
    },
    {
      title: 'Budget Development for Grants',
      duration: '3 hours',
      description: 'Master the art of creating accurate, compelling budgets that align with your narrative.',
    },
    {
      title: 'Grant Compliance & Reporting',
      duration: 'Half-day',
      description: 'Understand requirements and establish systems to maintain compliance and build funder trust.',
    },
  ];

  const testimonials = [
    {
      text: 'This book transformed our approach to grant writing. The templates alone have saved us countless hours.',
      author: 'Sarah Johnson',
      role: 'Executive Director',
      organization: 'Community Health Alliance',
    },
    {
      text: "Felton's workshop gave our team the confidence and skills we needed. We secured our first federal grant within 3 months.",
      author: 'Michael Chen',
      role: 'Development Director',
      organization: 'Youth Education Foundation',
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-slate-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Book & Training
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Resources and training to build your organization's grant capacity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-10 lg:mb-0">
              <div className="aspect-[3/4] bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl shadow-2xl flex items-center justify-center p-12">
                <div className="text-center text-white">
                  <BookOpen className="h-32 w-32 mx-auto mb-8" />
                  <h2 className="text-4xl font-bold mb-4">Grants Made Simple</h2>
                  <p className="text-emerald-100 text-lg">
                    A Practical Guide to Grant Funding for Nonprofits
                  </p>
                  <div className="flex items-center justify-center mt-6 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                The Complete Grant Funding Handbook
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Written by Felton Stevens, Jr., this comprehensive guide demystifies the grant funding process and provides practical tools for nonprofit success.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Whether you're new to grant seeking or looking to improve your success rate, this book offers actionable strategies backed by 20+ years of experience.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">What You'll Learn:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {bookFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="ml-2 text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg">
                  Order Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg border-2 border-emerald-600 hover:bg-emerald-50 transition-colors">
                  Read Sample Chapter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Users className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Workshops & Training
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Customized training programs designed to build your team's grant expertise and organizational capacity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-slate-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{workshop.title}</h3>
                  <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {workshop.duration}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed">{workshop.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-slate-600 mb-6">
              All workshops can be customized for your organization's specific needs and delivered in-person or virtually.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg"
            >
              Request Custom Training
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Video className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Speaking & Webinars
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Engaging presentations and webinars for conferences, associations, and nonprofit gatherings.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Popular Speaking Topics:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-lg text-slate-700">The Future of Grant Funding: Trends and Opportunities</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-lg text-slate-700">Building a Culture of Grant Success in Your Organization</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-lg text-slate-700">From Application to Impact: Managing the Grant Lifecycle</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-lg text-slate-700">Strategic Partnerships: Collaborating for Funding Success</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Book Speaking Engagement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What People Are Saying
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-8"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-200 text-lg mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-slate-400">{testimonial.role}</p>
                  <p className="text-slate-400">{testimonial.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Let's Build Your Capacity
          </h2>
          <p className="text-xl text-emerald-50 mb-10 leading-relaxed">
            Contact us to discuss how our book, training programs, or speaking engagements can support your organization.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors shadow-lg"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
