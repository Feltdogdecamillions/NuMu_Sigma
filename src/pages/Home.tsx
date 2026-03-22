import { Link } from 'react-router-dom';
import { Users, BookOpen, Heart, Calendar, ArrowRight, Award, Handshake, GraduationCap } from 'lucide-react';

export default function Home() {
  const pillars = [
    {
      icon: Users,
      title: 'Brotherhood',
      description: 'Building lifelong bonds of unity, respect, and mutual support among men of principle committed to excellence.',
    },
    {
      icon: GraduationCap,
      title: 'Scholarship',
      description: 'Promoting academic excellence, intellectual growth, and lifelong learning through mentorship and educational programs.',
    },
    {
      icon: Heart,
      title: 'Service',
      description: 'Making a lasting impact in Southwest Florida through dedicated community service, outreach, and leadership.',
    },
  ];

  const impactStats = [
    { number: '500+', label: 'Community Members Served Annually' },
    { number: '50+', label: 'Youth Mentored' },
    { number: '25+', label: 'Community Events Per Year' },
    { number: '15+', label: 'Scholarship Recipients' },
  ];

  const upcomingEvents = [
    {
      title: 'Community Health Fair',
      date: 'April 15, 2026',
      location: 'Fort Myers Community Center',
    },
    {
      title: 'Youth Mentorship Program Kickoff',
      date: 'April 22, 2026',
      location: 'Southwest Florida YMCA',
    },
    {
      title: 'Annual Scholarship Gala',
      date: 'May 10, 2026',
      location: 'Fort Myers Convention Center',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-royal-blue-900 via-royal-blue-800 to-royal-blue-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-block mb-6">
              <img
                src="/NuMu_Sigma_Logo.jpeg"
                alt="Nu Mu Sigma Chapter Logo"
                className="h-40 w-40 lg:h-52 lg:w-52 mx-auto mb-4 shadow-2xl"
              />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              Nu Mu Sigma Chapter
            </h1>
            <p className="text-2xl lg:text-3xl font-semibold text-royal-blue-100 mb-6">
              Phi Beta Sigma Fraternity, Incorporated
            </p>
            <p className="text-xl text-white mb-8">
              Fort Myers, Florida | Serving Southwest Florida
            </p>
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl p-6 max-w-3xl mx-auto mb-10">
              <p className="text-2xl lg:text-3xl font-bold italic">
                "Culture for Service and Service for Humanity"
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-royal-blue font-bold rounded-lg hover:bg-royal-blue-50 transition-colors shadow-xl"
              >
                Learn About Our Chapter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/support"
                className="inline-flex items-center justify-center px-8 py-4 bg-royal-blue-700 text-white font-bold rounded-lg hover:bg-royal-blue-600 transition-colors border-2 border-white"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Welcome to Nu Mu Sigma
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Welcome to the Nu Mu Sigma Chapter of Phi Beta Sigma Fraternity, Incorporated, proudly based in Fort Myers, Florida and serving communities throughout Southwest Florida. Guided by the motto, "Culture for Service and Service for Humanity," our chapter is committed to advancing brotherhood, scholarship, leadership, and meaningful service that strengthens our communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-royal-blue-50 rounded-xl p-8 hover:shadow-xl transition-shadow border-2 border-royal-blue-100"
                >
                  <Icon className="h-14 w-14 text-royal-blue mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-royal-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Proudly Serving Southwest Florida
            </h2>
            <p className="text-xl text-royal-blue-100 max-w-3xl mx-auto mb-6">
              Nu Mu Sigma proudly serves Southwest Florida, making a difference in our communities through dedicated service, leadership, and meaningful programs.
            </p>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Our service area includes Fort Myers, Cape Coral, Naples, Bonita Springs, and communities throughout Lee and Collier Counties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="bg-royal-blue-800 rounded-xl p-8 text-center hover:bg-royal-blue-700 transition-colors"
              >
                <div className="text-5xl font-bold mb-3">{stat.number}</div>
                <div className="text-royal-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-2">
                Upcoming Events
              </h2>
              <p className="text-xl text-slate-600">
                Join us in making a difference in our community
              </p>
            </div>
            <Link
              to="/events"
              className="hidden md:inline-flex items-center text-royal-blue font-semibold hover:text-royal-blue-700"
            >
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-royal-blue"
              >
                <Calendar className="h-8 w-8 text-royal-blue mb-3" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                <p className="text-royal-blue font-semibold mb-2">{event.date}</p>
                <p className="text-slate-600">{event.location}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link
              to="/events"
              className="inline-flex items-center text-royal-blue font-semibold hover:text-royal-blue-700"
            >
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Our Community Programs
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Through our comprehensive programs, we address critical needs in Southwest Florida including education, health, mentorship, and community development.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Handshake className="h-6 w-6 text-royal-blue flex-shrink-0 mt-1" />
                  <span className="ml-3 text-slate-700 font-medium">Youth mentorship and leadership development</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-6 w-6 text-royal-blue flex-shrink-0 mt-1" />
                  <span className="ml-3 text-slate-700 font-medium">Scholarship programs for deserving students</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-6 w-6 text-royal-blue flex-shrink-0 mt-1" />
                  <span className="ml-3 text-slate-700 font-medium">Health awareness and wellness initiatives</span>
                </li>
              </ul>
              <Link
                to="/programs"
                className="inline-flex items-center px-8 py-4 bg-royal-blue text-white font-bold rounded-lg hover:bg-royal-blue-700 transition-colors shadow-lg"
              >
                Explore Our Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-royal-blue-100 to-royal-blue-200 rounded-2xl p-12 aspect-square flex items-center justify-center">
                <Users className="h-48 w-48 text-royal-blue" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-royal-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Us in Serving Our Community
          </h2>
          <p className="text-xl text-white mb-10 leading-relaxed">
            Whether through partnership, sponsorship, or volunteer opportunities, there are many ways to support our mission of service to Southwest Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/support"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-royal-blue font-bold rounded-lg hover:bg-royal-blue-50 transition-colors shadow-lg"
            >
              Become a Partner
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
