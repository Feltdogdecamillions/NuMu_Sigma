import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

export default function Events() {
  const upcomingEvents = [
    {
      title: 'Community Health Fair',
      date: 'April 15, 2026',
      time: '10:00 AM - 3:00 PM',
      location: 'Fort Myers Community Center',
      description: 'Free health screenings, wellness information, and resources for Southwest Florida families.',
      category: 'Health & Wellness',
    },
    {
      title: 'Youth Mentorship Program Kickoff',
      date: 'April 22, 2026',
      time: '5:30 PM - 7:30 PM',
      location: 'Southwest Florida YMCA',
      description: 'Launch of our spring mentorship program pairing young men with positive role models.',
      category: 'Youth Development',
    },
    {
      title: 'Scholarship Application Workshop',
      date: 'April 29, 2026',
      time: '6:00 PM - 8:00 PM',
      location: 'Fort Myers Public Library',
      description: 'Assistance with college and scholarship applications for high school students.',
      category: 'Education',
    },
    {
      title: 'Annual Scholarship Gala',
      date: 'May 10, 2026',
      time: '6:00 PM - 10:00 PM',
      location: 'Fort Myers Convention Center',
      description: 'Fundraising gala supporting scholarships for deserving Southwest Florida students.',
      category: 'Fundraising',
    },
    {
      title: 'Community Service Day',
      date: 'May 18, 2026',
      time: '9:00 AM - 2:00 PM',
      location: 'Various Locations in Fort Myers',
      description: 'Join us for a day of service including park clean-ups and community assistance.',
      category: 'Community Service',
    },
    {
      title: 'Back to School Supply Drive',
      date: 'July 20, 2026',
      time: '11:00 AM - 4:00 PM',
      location: 'Cape Coral Community Park',
      description: 'Distributing school supplies to students in need throughout Southwest Florida.',
      category: 'Education',
    },
  ];

  const pastEvents = [
    {
      title: 'MLK Day of Service',
      date: 'January 20, 2026',
      description: 'Community service projects honoring Dr. Martin Luther King Jr.',
    },
    {
      title: 'Black History Month Celebration',
      date: 'February 15, 2026',
      description: 'Cultural celebration and educational program at local schools.',
    },
    {
      title: 'Winter Food Drive',
      date: 'December 15, 2025',
      description: 'Collected and distributed food to 200+ families in Southwest Florida.',
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-royal-blue-900 to-royal-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Calendar className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Events
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Join us in making a difference in Southwest Florida
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-slate-600">
              Connect with us at our community events and programs
            </p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-royal-blue overflow-hidden"
              >
                <div className="p-6 lg:p-8">
                  <div className="lg:flex lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-block px-3 py-1 bg-royal-blue-100 text-royal-blue-700 text-sm font-semibold rounded-full">
                          {event.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        {event.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-slate-700">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-royal-blue mr-2" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-royal-blue mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-royal-blue mr-2" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <Link
                        to="/contact"
                        className="inline-flex items-center px-6 py-3 bg-royal-blue text-white font-semibold rounded-lg hover:bg-royal-blue-700 transition-colors whitespace-nowrap"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Past Events
            </h2>
            <p className="text-xl text-slate-600">
              A look at our recent community impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start mb-3">
                  <Calendar className="h-6 w-6 text-royal-blue mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-royal-blue font-semibold mb-2">{event.date}</p>
                  </div>
                </div>
                <p className="text-slate-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-royal-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-white mb-10 leading-relaxed">
            Want to receive updates about upcoming events and programs? Get in touch with us to join our mailing list.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-royal-blue font-bold rounded-lg hover:bg-royal-blue-50 transition-colors shadow-lg"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
