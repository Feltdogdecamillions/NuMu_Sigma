import { Link } from 'react-router-dom';
import { Shield, Users, BookOpen, Heart, Target, ArrowRight, Award, Globe } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Users,
      title: 'Brotherhood',
      description: 'Fostering lifelong bonds built on mutual respect, support, and shared commitment to excellence.',
    },
    {
      icon: BookOpen,
      title: 'Scholarship',
      description: 'Promoting academic achievement and intellectual development through mentorship and educational programs.',
    },
    {
      icon: Heart,
      title: 'Service',
      description: 'Dedicated to making meaningful contributions to our communities through action and advocacy.',
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-royal-blue-900 to-royal-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <img
              src="/NuMu_Sigma_Logo2.PNG"
              alt="Nu Mu Sigma Chapter Logo"
              className="h-32 w-auto mx-auto mb-6"
            />
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              About Nu Mu Sigma Chapter
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              A legacy of service, scholarship, and brotherhood in Southwest Florida
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Our Chapter
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  The Nu Mu Sigma Chapter of Phi Beta Sigma Fraternity, Incorporated is based in Fort Myers, Florida and proudly serves communities throughout Southwest Florida. Guided by our motto, "Culture for Service and Service for Humanity," we are dedicated to upholding the ideals of brotherhood, scholarship, leadership, and service through active community engagement and meaningful outreach.
                </p>
                <p>
                  Our chapter brings together men of principle who are committed to making a positive difference in the lives of others. Through our comprehensive programs and initiatives, we address critical community needs while fostering personal growth, leadership development, and lifelong learning among our members.
                </p>
                <p>
                  Based in Fort Myers with reach throughout Southwest Florida, we partner with local organizations, schools, and community groups to maximize our impact and create lasting change. Our service area includes Fort Myers, Cape Coral, Naples, Bonita Springs, and communities throughout Lee and Collier Counties.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                src="/image.png"
                alt="Nu Mu Sigma Chapter Brothers"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>

          <div className="bg-royal-blue-50 rounded-2xl p-8 lg:p-12 border-2 border-royal-blue-100 mb-20">
            <div className="text-center mb-8">
              <Award className="h-12 w-12 text-royal-blue mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Our Motto
              </h2>
              <p className="text-2xl lg:text-3xl font-bold text-royal-blue italic">
                "Culture for Service and Service for Humanity"
              </p>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
              This motto guides everything we do. It reminds us that our purpose extends beyond ourselves, calling us to cultivate a culture of service and to dedicate ourselves to improving the human condition through meaningful action.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              About Phi Beta Sigma Fraternity, Inc.
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proud legacy of brotherhood, scholarship, and service since 1914
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              Phi Beta Sigma Fraternity, Incorporated was founded on January 9, 1914, at Howard University in Washington, D.C. by three young African-American male students who believed that fraternity elitism and hazing were barriers to meaningful personal development and community service.
            </p>
            <p>
              From its inception, Phi Beta Sigma has been committed to the ideals of brotherhood, scholarship, and service. These principles have guided the fraternity through more than a century of growth and achievement, making it one of the most respected and influential Greek-letter organizations in the world.
            </p>
            <p>
              Today, Phi Beta Sigma Fraternity, Incorporated has over 200,000 members worldwide and continues to make significant contributions to communities through social action programs, educational initiatives, and community service projects.
            </p>
            <p>
              As members of this distinguished fraternity, we carry forward this legacy in Southwest Florida, applying these timeless principles to address contemporary challenges and create opportunities for positive change.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600">
              The principles that guide our actions and define our purpose
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-royal-blue-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border-2 border-royal-blue-100"
                >
                  <Icon className="h-14 w-14 text-royal-blue mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Serving Southwest Florida
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our commitment to Southwest Florida goes beyond our home base in Fort Myers. We actively serve communities throughout the region, including:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start">
                  <Target className="h-6 w-6 text-royal-blue flex-shrink-0 mt-1" />
                  <span className="ml-3">Fort Myers and Cape Coral</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-6 w-6 text-royal-blue flex-shrink-0 mt-1" />
                  <span className="ml-3">Naples and Bonita Springs</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-6 w-6 text-royal-blue flex-shrink-0 mt-1" />
                  <span className="ml-3">Lehigh Acres and Estero</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-6 w-6 text-royal-blue flex-shrink-0 mt-1" />
                  <span className="ml-3">Port Charlotte and Punta Gorda</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-6 w-6 text-royal-blue flex-shrink-0 mt-1" />
                  <span className="ml-3">Greater Lee and Collier Counties</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-royal-blue">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  To exemplify the ideals of brotherhood, scholarship, leadership, and service while promoting the principles of Phi Beta Sigma Fraternity, Incorporated throughout Southwest Florida. Based in Fort Myers and serving communities across the region, we are committed to developing young men into leaders, supporting educational achievement, and addressing critical community needs through sustained action, outreach, and partnership.
                </p>
                <Link
                  to="/programs"
                  className="inline-flex items-center text-royal-blue font-semibold hover:text-royal-blue-700"
                >
                  See Our Programs in Action
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-royal-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-white mb-10 leading-relaxed">
            Learn more about our programs, upcoming events, and how you can partner with Nu Mu Sigma Chapter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-royal-blue font-bold rounded-lg hover:bg-royal-blue-50 transition-colors shadow-lg"
            >
              View Our Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-royal-blue-700 text-white font-bold rounded-lg hover:bg-royal-blue-800 transition-colors border-2 border-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
