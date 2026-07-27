import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, LogOut, FileText, Calendar, Users, DollarSign, AlertCircle, Copy, CheckCircle, Image } from 'lucide-react';

// PASSWORD CONFIGURATION
// To change the password, modify the value below:
const MEMBERS_PASSWORD = 'NuMuSigma2026';
// End of password configuration

export default function MembersOnly() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === MEMBERS_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      sessionStorage.setItem('membersAuth', 'true');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    sessionStorage.removeItem('membersAuth');
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Check session storage on component mount
  useState(() => {
    const authStatus = sessionStorage.getItem('membersAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-royal-blue-900 to-royal-blue-700 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="mx-auto h-16 w-16 bg-royal-blue rounded-full flex items-center justify-center mb-4">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Members Only
              </h2>
              <p className="text-slate-600">
                This section is restricted to Nu Mu Sigma Chapter members
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">
                  Enter Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue outline-none transition"
                  placeholder="Password"
                  required
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="ml-3 text-red-800 text-sm">{error}</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-royal-blue text-white font-bold rounded-lg hover:bg-royal-blue-700 transition-colors shadow-lg"
              >
                <Lock className="mr-2 h-5 w-5" />
                Enter Members Area
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-slate-600">
              <p>Need access? Contact the chapter president.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const announcements = [
    {
      title: 'Chapter Meeting - March 28, 2026',
      date: 'March 22, 2026',
      content: 'Monthly chapter meeting scheduled for Thursday, March 28th at 7:00 PM. Location: Fort Myers Community Center.',
      priority: 'high',
    },
    {
      title: 'Dues Reminder',
      date: 'March 20, 2026',
      content: 'Spring semester dues are now payable. Please submit payment by April 15th to remain in good standing.',
      priority: 'medium',
    },
    {
      title: 'Community Service Day',
      date: 'March 18, 2026',
      content: 'Join us for our community service day on April 5th. Sign-up sheet available at the next meeting.',
      priority: 'low',
    },
  ];

  const upcomingEvents = [
    { title: 'Chapter Meeting', date: 'March 28, 2026', time: '7:00 PM' },
    { title: 'Community Service Day', date: 'April 5, 2026', time: '9:00 AM' },
    { title: 'Scholarship Gala', date: 'May 10, 2026', time: '6:00 PM' },
  ];

  const documents = [
    { name: 'Chapter Bylaws', type: 'PDF', updated: 'January 2026' },
    { name: 'Meeting Minutes - February', type: 'PDF', updated: 'February 2026' },
    { name: 'Membership Roster', type: 'PDF', updated: 'March 2026' },
    { name: 'Event Planning Form', type: 'PDF', updated: 'January 2026' },
  ];

  const leadershipContacts = [
    { position: 'President', name: 'Marvin Kendrick', email: 'numusigma@gmail.com' },
    { position: '1st Vice President', name: 'Spence Walker', email: 'SpWalker38@gmail.com' },
    { position: '2nd Vice President', name: 'Felton Stevens Jr.', email: 'feltonstevensjr@gmail.com' },
    { position: 'Treasurer', name: 'Johnny Brown', email: 'JohnnyMBrown1914@gmail.com' },
    { position: 'Secretary', name: 'Eddie Brown', email: 'cebrown1581@gmail.com' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gradient-to-br from-royal-blue-900 to-royal-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-white">
              <div className="flex items-center mb-4">
                <Shield className="h-12 w-12 mr-3" />
                <h1 className="text-4xl font-bold">Members Only</h1>
              </div>
              <p className="text-xl text-royal-blue-100">
                Welcome to the private chapter members area. This section is for official members to access chapter resources, updates, and submit payments.
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="hidden sm:inline-flex items-center px-6 py-3 bg-white text-royal-blue font-semibold rounded-lg hover:bg-royal-blue-50 transition-colors"
            >
              <LogOut className="mr-2 h-5 w-5" />
              Logout
            </button>
          </div>
          <button
            onClick={handleLogout}
            className="sm:hidden mt-4 inline-flex items-center px-6 py-3 bg-white text-royal-blue font-semibold rounded-lg hover:bg-royal-blue-50 transition-colors"
          >
            <LogOut className="mr-2 h-5 w-5" />
            Logout
          </button>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-royal-blue rounded-2xl p-8 lg:p-12 shadow-xl border-4 border-royal-blue-700">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-white rounded-full mb-4">
                <DollarSign className="h-12 w-12 text-royal-blue" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Pay Chapter Dues
              </h2>
              <p className="text-xl text-white mb-2">
                Support our chapter's mission and stay in good standing
              </p>
              <p className="text-royal-blue-100">
                Use Zelle or Cash App to submit your dues and fees
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Zelle */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#6D1ED4' }}>
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Zelle</h3>
                </div>
                <p className="text-slate-600 mb-6">Send payment directly to our chapter Zelle account.</p>
                <div className="bg-slate-50 rounded-lg px-4 py-3 flex items-center justify-between mb-4">
                  <span className="font-mono text-slate-800 font-semibold">numusigmachapter@yahoo.com</span>
                  <button
                    onClick={() => copyToClipboard('numusigmachapter@yahoo.com', 'zelle')}
                    className="ml-3 p-2 rounded-lg hover:bg-slate-200 transition-colors flex-shrink-0"
                    title="Copy to clipboard"
                  >
                    {copiedField === 'zelle' ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <Copy className="h-5 w-5 text-slate-500" />
                    )}
                  </button>
                </div>
                <p className="text-sm text-slate-500 flex items-start">
                  <AlertCircle className="h-4 w-4 text-royal-blue flex-shrink-0 mt-0.5 mr-2" />
                  Include your full name in the memo for proper credit.
                </p>
              </div>

              {/* Cash App */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#00C244' }}>
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Cash App</h3>
                </div>
                <p className="text-slate-600 mb-6">Send payment to our chapter Cash App cashtag.</p>
                <div className="bg-slate-50 rounded-lg px-4 py-3 flex items-center justify-between mb-4">
                  <span className="font-mono text-slate-800 font-semibold">$2005NMSC</span>
                  <button
                    onClick={() => copyToClipboard('$2005NMSC', 'cashapp')}
                    className="ml-3 p-2 rounded-lg hover:bg-slate-200 transition-colors flex-shrink-0"
                    title="Copy to clipboard"
                  >
                    {copiedField === 'cashapp' ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <Copy className="h-5 w-5 text-slate-500" />
                    )}
                  </button>
                </div>
                <p className="text-sm text-slate-500 flex items-start">
                  <AlertCircle className="h-4 w-4 text-royal-blue flex-shrink-0 mt-0.5 mr-2" />
                  Include your full name in the memo for proper credit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2 flex items-center">
              <AlertCircle className="h-8 w-8 text-royal-blue mr-3" />
              Chapter Announcements
            </h2>
            <p className="text-lg text-slate-600">Stay updated with the latest chapter news and reminders</p>
          </div>

          <div className="space-y-4">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 ${
                  announcement.priority === 'high'
                    ? 'border-red-500'
                    : announcement.priority === 'medium'
                    ? 'border-yellow-500'
                    : 'border-royal-blue'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{announcement.title}</h3>
                  <span className="text-sm text-slate-500">{announcement.date}</span>
                </div>
                <p className="text-slate-700">{announcement.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              to="/gallery"
              className="inline-flex items-center px-6 py-4 bg-royal-blue text-white font-semibold rounded-xl hover:bg-royal-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              <Image className="mr-3 h-5 w-5" />
              View Chapter Photo Gallery
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <Calendar className="h-8 w-8 text-royal-blue mr-3" />
                Upcoming Events
              </h2>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{event.title}</h3>
                    <p className="text-royal-blue font-semibold">{event.date}</p>
                    <p className="text-slate-600">{event.time}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <FileText className="h-8 w-8 text-royal-blue mr-3" />
                Documents & Forms
              </h2>
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-royal-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <FileText className="h-6 w-6 text-royal-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{doc.name}</h3>
                        <p className="text-sm text-slate-600">Updated: {doc.updated}</p>
                      </div>
                    </div>
                    <button className="text-royal-blue font-semibold hover:text-royal-blue-700">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
            <Users className="h-8 w-8 text-royal-blue mr-3" />
            Leadership Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {leadershipContacts.map((contact, index) => (
              <div
                key={index}
                className="bg-royal-blue-50 rounded-xl p-6 border-2 border-royal-blue-100 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-1">{contact.position}</h3>
                <p className="text-royal-blue font-semibold mb-3">{contact.name}</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm text-slate-700 hover:text-royal-blue break-all"
                >
                  {contact.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-royal-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Member Resources
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Access national fraternity resources and chapter tools
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://phibetasigma1914.org/the-bluprint/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-royal-blue text-white font-semibold rounded-lg hover:bg-royal-blue-700 transition-colors"
            >
              The BluPrint
            </a>
            <a
              href="https://www.pbs1914.org/resources"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-royal-blue border-2 border-royal-blue font-semibold rounded-lg hover:bg-royal-blue-50 transition-colors"
            >
              Member Training
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600">
            Need help or have questions?{' '}
            <a href="mailto:numusigma@gmail.com" className="text-royal-blue font-semibold hover:text-royal-blue-700">
              Contact the Chapter President
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
