import { BookOpen, Award, FileText, Users, Star, Briefcase, CreditCard, Building2, Gift, Car, Link2, ExternalLink } from 'lucide-react';

interface ResourceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const membershipResources: ResourceCard[] = [
  {
    title: 'Phi Beta Sigma Fraternity, Inc.',
    description: 'Official national website for Phi Beta Sigma Fraternity, Incorporated.',
    icon: <Star className="h-6 w-6" />,
    href: '#',
  },
  {
    title: 'BluPrint',
    description: 'The official member portal and digital hub for Sigma brothers.',
    icon: <BookOpen className="h-6 w-6" />,
    href: '#',
  },
  {
    title: '2025 Constitution and Bylaws',
    description: 'The governing document outlining the rules and principles of Phi Beta Sigma.',
    icon: <FileText className="h-6 w-6" />,
    href: '#',
  },
  {
    title: '2025 Design & Brand Guidelines',
    description: 'Official brand standards and design specifications for chapter communications.',
    icon: <Award className="h-6 w-6" />,
    href: '#',
  },
  {
    title: "12th Edition: Robert's Rules of Order",
    description: 'Parliamentary procedure reference guide for conducting chapter meetings.',
    icon: <BookOpen className="h-6 w-6" />,
    href: '#',
  },
  {
    title: 'Blu Culture Collections',
    description: 'Official Phi Beta Sigma merchandise and cultural apparel store.',
    icon: <Gift className="h-6 w-6" />,
    href: '#',
  },
  {
    title: 'SigmaPAC 1914',
    description: "Phi Beta Sigma's political action committee supporting civic engagement.",
    icon: <Building2 className="h-6 w-6" />,
    href: '#',
  },
  {
    title: 'PBS Impact Foundation',
    description: 'Charitable foundation advancing education and community development.',
    icon: <Users className="h-6 w-6" />,
    href: '#',
  },
  {
    title: 'Sigma Beta Club Foundation',
    description: 'Youth mentorship and development program foundation resources.',
    icon: <Star className="h-6 w-6" />,
    href: '#',
  },
  {
    title: 'Affinity License Report',
    description: 'Report and manage affinity licensing agreements for your chapter.',
    icon: <FileText className="h-6 w-6" />,
    href: '#',
  },
  {
    title: 'PBS-1 Membership Form',
    description: 'Official membership application and registration form for new members.',
    icon: <FileText className="h-6 w-6" />,
    href: '#',
  },
  {
    title: 'Program Implementation Guide 2025',
    description: 'Step-by-step guide for executing national programs at the chapter level.',
    icon: <BookOpen className="h-6 w-6" />,
    href: '#',
  },
];

const membershipBenefits: ResourceCard[] = [
  {
    title: 'K&G Fashion Discount Code',
    description: 'Exclusive member discount on suits, dress shirts, and professional attire.',
    icon: <Briefcase className="h-6 w-6" />,
    href: '#',
  },
  {
    title: "Men's Wearhouse & Jos A. Bank",
    description: 'Special pricing and discount codes for members at Men\'s Wearhouse and Jos A. Bank.',
    icon: <Briefcase className="h-6 w-6" />,
    href: '#',
  },
  {
    title: 'Enterprise & National Rental Discount',
    description: 'Discounted car rental rates through Enterprise and National for Sigma members.',
    icon: <Car className="h-6 w-6" />,
    href: '#',
  },
  {
    title: 'Sigma Link',
    description: 'The official Phi Beta Sigma member networking and directory platform.',
    icon: <Link2 className="h-6 w-6" />,
    href: '#',
  },
  {
    title: 'Phi Beta Sigma Credit Union',
    description: 'Member-exclusive financial services and credit union benefits.',
    icon: <CreditCard className="h-6 w-6" />,
    href: '#',
  },
  {
    title: 'Perks at Work',
    description: 'Access thousands of exclusive discounts, deals, and employee perks.',
    icon: <Gift className="h-6 w-6" />,
    href: '#',
  },
  {
    title: 'Phi Beta Sigma Civic Center',
    description: 'Civic engagement tools and resources to support community action.',
    icon: <Building2 className="h-6 w-6" />,
    href: '#',
  },
];

function ResourceCardItem({ card }: { card: ResourceCard }) {
  return (
    <a
      href={card.href}
      className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl border border-slate-200 hover:border-royal-blue transition-all duration-200 flex flex-col"
    >
      <div className="flex items-start mb-4">
        <div className="w-12 h-12 rounded-lg bg-royal-blue-50 border border-royal-blue-100 flex items-center justify-center text-royal-blue flex-shrink-0 group-hover:bg-royal-blue group-hover:text-white transition-colors duration-200">
          {card.icon}
        </div>
      </div>
      <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{card.title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed flex-grow">{card.description}</p>
      <div className="mt-4 inline-flex items-center text-royal-blue font-semibold text-sm group-hover:text-royal-blue-700 transition-colors">
        View Resource
        <ExternalLink className="ml-1.5 h-4 w-4" />
      </div>
    </a>
  );
}

export default function Resources() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-royal-blue-900 to-royal-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 mb-6">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Resources</h1>
          <p className="text-lg text-royal-blue-100 max-w-2xl mx-auto leading-relaxed">
            Access important membership documents, national resources, program guides, and member benefit links in one convenient location.
          </p>
        </div>
      </section>

      {/* Divider accent */}
      <div className="h-1.5 bg-gradient-to-r from-royal-blue via-slate-300 to-royal-blue" />

      {/* Section 1: Membership Resources */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-8 bg-royal-blue rounded-full" />
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Membership Resources</h2>
            </div>
            <p className="text-slate-600 ml-4 pl-3 border-l border-slate-200">
              Official documents, national program guides, and fraternity tools for active members.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {membershipResources.map((card, index) => (
              <ResourceCardItem key={index} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Membership Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-8 bg-royal-blue rounded-full" />
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Membership Benefits</h2>
            </div>
            <p className="text-slate-600 ml-4 pl-3 border-l border-slate-200">
              Exclusive discounts, financial tools, and perks available to Phi Beta Sigma members.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {membershipBenefits.map((card, index) => (
              <ResourceCardItem key={index} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-royal-blue-50 border-t border-royal-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Need help finding a resource?</h3>
          <p className="text-slate-600 mb-6">
            Contact the chapter leadership if you need access to a resource not listed here.
          </p>
          <a
            href="mailto:numusigma@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-royal-blue text-white font-semibold rounded-lg hover:bg-royal-blue-700 transition-colors shadow-md"
          >
            Contact Chapter Leadership
          </a>
        </div>
      </section>
    </div>
  );
}
