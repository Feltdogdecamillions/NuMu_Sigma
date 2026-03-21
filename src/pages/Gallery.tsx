import { Image, Users, GraduationCap, Heart, Calendar } from 'lucide-react';

export default function Gallery() {
  const photoCategories = [
    {
      title: 'Community Service',
      icon: Heart,
      count: 24,
      description: 'Brothers serving Southwest Florida communities',
    },
    {
      title: 'Youth Programs',
      icon: Users,
      count: 18,
      description: 'Mentorship and youth development activities',
    },
    {
      title: 'Scholarship Events',
      icon: GraduationCap,
      count: 15,
      description: 'Annual galas and award ceremonies',
    },
    {
      title: 'Chapter Events',
      icon: Calendar,
      count: 32,
      description: 'Brotherhood and chapter activities',
    },
  ];

  const placeholderPhotos = Array(12).fill(null);

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Image className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Photo Gallery
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Capturing our commitment to service in Southwest Florida
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {photoCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-2 border-blue-100 cursor-pointer"
                >
                  <Icon className="h-10 w-10 text-blue-600 mb-3" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-slate-600 mb-3">{category.description}</p>
                  <p className="text-blue-600 font-semibold">{category.count} photos</p>
                </div>
              );
            })}
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Recent Photos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {placeholderPhotos.map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-md hover:shadow-xl transition-shadow flex items-center justify-center group cursor-pointer overflow-hidden"
                >
                  <div className="text-center p-6">
                    <Image className="h-16 w-16 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <p className="text-slate-600 font-medium">Event Photo {index + 1}</p>
                    <p className="text-sm text-slate-500 mt-1">Click to view</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Share Your Photos
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Were you at one of our events? We'd love to feature your photos in our gallery. Contact us to share your images from Nu Mu Sigma Chapter events.
          </p>
          <a
            href="mailto:photos@numusigma.org"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Submit Photos
          </a>
        </div>
      </section>
    </div>
  );
}
