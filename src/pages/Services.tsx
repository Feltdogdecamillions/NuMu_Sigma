import { Link } from 'react-router-dom';
import { Shield, Target, FileText, TrendingUp, Users, ArrowRight, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Grant Readiness Assessment',
      description: 'Ensure your organization is fully prepared to pursue, secure, and manage grant funding.',
      features: [
        'Comprehensive organizational capacity assessment',
        'Financial systems and controls evaluation',
        'Board governance and structure review',
        'Program development and evaluation readiness',
        'Documentation and record-keeping audit',
        'Strategic positioning and competitive analysis',
      ],
      color: 'emerald',
    },
    {
      icon: Target,
      title: 'Grant Strategy Development',
      description: 'Create a targeted, strategic approach to identify and pursue the right funding opportunities.',
      features: [
        'Funder research and prospect identification',
        'Strategic funding plan development',
        'Grant calendar and timeline creation',
        'Alignment of programs with funder priorities',
        'Diversification and sustainability planning',
        'ROI analysis and resource allocation',
      ],
      color: 'blue',
    },
    {
      icon: FileText,
      title: 'Proposal Development',
      description: 'Professional grant writing that tells your story and demonstrates your impact.',
      features: [
        'Compelling narrative development',
        'Logic model and theory of change creation',
        'Comprehensive budget development',
        'Evaluation plan design',
        'Supporting documentation preparation',
        'Full proposal review and editing',
      ],
      color: 'emerald',
    },
    {
      icon: TrendingUp,
      title: 'Grant Management',
      description: 'Expert support to ensure successful implementation and compliance throughout the grant lifecycle.',
      features: [
        'Grant implementation planning and support',
        'Financial tracking and reporting systems',
        'Compliance monitoring and documentation',
        'Progress report development',
        'Funder relationship management',
        'Grant closeout and renewal support',
      ],
      color: 'blue',
    },
    {
      icon: Users,
      title: 'Training & Capacity Building',
      description: 'Empower your team with the knowledge and skills to build sustainable grant success.',
      features: [
        'Customized staff training workshops',
        'Board development on fundraising',
        'Grant writing bootcamps',
        'Compliance and reporting training',
        'Strategic planning facilitation',
        'One-on-one coaching and mentoring',
      ],
      color: 'emerald',
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-slate-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive grant consulting services designed to help your nonprofit secure funding and achieve its mission.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`mb-10 lg:mb-0 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-12 shadow-lg">
                      <Icon className="h-16 w-16 text-emerald-600 mb-6" />
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <h3 className="text-xl font-bold text-slate-900 mb-6">What's Included:</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="ml-3 text-slate-700 text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Flexible Engagement Options
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We tailor our services to meet your organization's specific needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Project-Based</h3>
              <p className="text-slate-600">
                Engage us for specific projects like a single grant proposal or readiness assessment.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md border-2 border-emerald-600">
              <div className="text-xs font-bold text-emerald-600 uppercase mb-2">Popular</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Retainer</h3>
              <p className="text-slate-600">
                Ongoing support with a monthly retainer for continuous grant strategy and writing.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Training</h3>
              <p className="text-slate-600">
                Workshops and training to build your internal team's grant capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-emerald-50 mb-10 leading-relaxed">
            Schedule a free consultation to discuss your grant needs and how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors shadow-lg"
          >
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
