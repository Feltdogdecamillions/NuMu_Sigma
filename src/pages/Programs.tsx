import { Link } from 'react-router-dom';
import { Users, GraduationCap, Heart, Handshake, Activity, BookOpen, ArrowRight } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: Users,
      title: 'Youth Mentorship Program',
      description: 'Guiding the next generation through one-on-one mentorship, leadership development, and character building.',
      features: [
        'One-on-one mentoring relationships',
        'Leadership skills development',
        'Career guidance and exploration',
        'Character building workshops',
        'College preparation support',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Scholarship Programs',
      description: 'Supporting academic achievement by providing financial assistance to deserving students in Southwest Florida.',
      features: [
        'Annual scholarship awards',
        'Academic excellence recognition',
        'STEM program support',
        'First-generation college student support',
        'Essay and application workshops',
      ],
    },
    {
      icon: BookOpen,
      title: 'Educational Outreach',
      description: 'Promoting literacy, academic support, and educational resources for students of all ages.',
      features: [
        'After-school tutoring programs',
        'Reading and literacy initiatives',
        'College and career fairs',
        'STEM education programs',
        'School supply drives',
      ],
    },
    {
      icon: Activity,
      title: 'Health & Wellness Initiatives',
      description: 'Addressing health disparities and promoting wellness in underserved communities.',
      features: [
        'Health screenings and fairs',
        'Mental health awareness campaigns',
        'Fitness and nutrition education',
        'Blood pressure monitoring programs',
        'Community wellness events',
      ],
    },
    {
      icon: Handshake,
      title: 'Community Service Projects',
      description: 'Hands-on service addressing immediate needs and creating lasting community impact.',
      features: [
        'Food drives and distributions',
        'Community clean-up initiatives',
        'Senior citizen support programs',
        'Homeless outreach services',
        'Disaster relief efforts',
      ],
    },
    {
      icon: Heart,
      title: 'Social Action Programs',
      description: 'Advocating for social justice, equality, and positive change in our communities.',
      features: [
        'Voter registration drives',
        'Social justice education',
        'Community forums and dialogues',
        'Policy advocacy initiatives',
        'Economic empowerment programs',
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
              Our Programs
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Making a meaningful impact through dedicated service and community engagement
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Serving Southwest Florida Communities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our programs address critical community needs while embodying our commitment to brotherhood, scholarship, leadership, and service. Each initiative is designed to create lasting positive change in the lives of those we serve throughout Southwest Florida.
            </p>
          </div>

          <div className="space-y-16">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`mb-10 lg:mb-0 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="bg-gradient-to-br from-royal-blue-50 to-royal-blue-100 rounded-2xl p-10 shadow-lg border-2 border-royal-blue-200">
                      <Icon className="h-16 w-16 text-royal-blue mb-6" />
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        {program.title}
                      </h2>
                      <p className="text-lg text-slate-700 leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                  </div>
                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Program Features:</h3>
                    <ul className="space-y-3">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start bg-slate-50 rounded-lg p-4">
                          <div className="flex-shrink-0 mt-1">
                            <div className="h-2 w-2 rounded-full bg-royal-blue" />
                          </div>
                          <span className="ml-4 text-slate-700 font-medium">{feature}</span>
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

      <section className="py-20 bg-royal-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Program Impact
            </h2>
            <p className="text-xl text-royal-blue-100">
              Measuring our commitment to Southwest Florida
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-royal-blue-800 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold mb-3">500+</div>
              <div className="text-royal-blue-100">Community Members Served</div>
            </div>
            <div className="bg-royal-blue-800 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold mb-3">50+</div>
              <div className="text-royal-blue-100">Youth Mentored Annually</div>
            </div>
            <div className="bg-royal-blue-800 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold mb-3">$25K+</div>
              <div className="text-royal-blue-100">In Scholarships Awarded</div>
            </div>
            <div className="bg-royal-blue-800 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold mb-3">1000+</div>
              <div className="text-royal-blue-100">Volunteer Hours</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Support our programs through partnership, sponsorship, or volunteering. Together, we can make an even greater impact in Southwest Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/support"
              className="inline-flex items-center justify-center px-8 py-4 bg-royal-blue text-white font-bold rounded-lg hover:bg-royal-blue-700 transition-colors shadow-lg"
            >
              Become a Partner
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-royal-blue font-bold rounded-lg border-2 border-royal-blue hover:bg-royal-blue-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
