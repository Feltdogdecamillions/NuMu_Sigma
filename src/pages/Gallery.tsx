import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Image, X, ChevronLeft, ChevronRight, Filter, Lock, ArrowLeft } from 'lucide-react';
import { galleryImages, type GalleryImage } from '../data/galleryImages';

export default function Gallery() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(galleryImages);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsAuthenticated(sessionStorage.getItem('membersAuth') === 'true');
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-royal-blue-900 to-royal-blue-700 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="mx-auto h-16 w-16 bg-royal-blue rounded-full flex items-center justify-center mb-4">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Members Only</h2>
              <p className="text-slate-600">
                The photo gallery is restricted to Nu Mu Sigma Chapter members
              </p>
            </div>
            <Link
              to="/members"
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-royal-blue text-white font-bold rounded-lg hover:bg-royal-blue-700 transition-colors shadow-lg"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go to Members Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const categories = [
    { id: 'all', label: 'All Photos', count: 0 },
    { id: 'events', label: 'Chapter Events', count: 0 },
    { id: 'service', label: 'Community Service', count: 0 },
    { id: 'brotherhood', label: 'Brotherhood', count: 0 },
    { id: 'programs', label: 'Special Programs', count: 0 },
    { id: 'awards', label: 'Awards', count: 0 },
    { id: 'collaboration', label: 'Collaboration', count: 0 },
  ];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory]);

  const getCategoryCount = useMemo(
    () => (categoryId: string) => {
      if (categoryId === 'all') return galleryImages.length;
      return galleryImages.filter(img => img.category === categoryId).length;
    },
    []
  );

  const openLightbox = (image: GalleryImage, index: number) => {
    setLightboxImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(newIndex);
    setLightboxImage(filteredImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(newIndex);
    setLightboxImage(filteredImages[newIndex]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeLightbox();
  };

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
              Photo Gallery
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Capturing moments of brotherhood, service, and excellence
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <Filter className="h-6 w-6 text-royal-blue mr-3" />
            <h2 className="text-2xl font-bold text-slate-900">Filter by Category</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-royal-blue text-white shadow-lg scale-105'
                    : 'bg-white text-slate-700 hover:bg-royal-blue-50 border-2 border-slate-200'
                }`}
              >
                {category.label}
                <span className="ml-2 text-sm opacity-75">
                  ({getCategoryCount(category.id)})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredImages.length === 0 ? (
            <div className="text-center py-12">
              <Image className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-600 text-lg">No photos in this category yet.</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900">
                  {selectedCategory === 'all'
                    ? 'All Photos'
                    : categories.find(c => c.id === selectedCategory)?.label}
                </h2>
                <p className="text-slate-600 mt-2">
                  {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((image, index) => (
                  <div
                    key={image.id}
                    onClick={() => openLightbox(image, index)}
                    className="group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative aspect-square overflow-hidden bg-slate-100">
                      <img
                        src={image.image_url}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                          {image.date && (
                            <p className="text-sm text-white/90">{image.date}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4">
                      <h3 className="font-semibold text-slate-900 line-clamp-1">{image.title}</h3>
                      {image.description && (
                        <p className="text-sm text-slate-600 mt-1 line-clamp-2">{image.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyPress}
          tabIndex={0}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-royal-blue-300 transition-colors p-2 bg-black/50 rounded-full"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-royal-blue-300 transition-colors p-3 bg-black/50 rounded-full disabled:opacity-50"
            aria-label="Previous image"
            disabled={filteredImages.length <= 1}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-royal-blue-300 transition-colors p-3 bg-black/50 rounded-full disabled:opacity-50"
            aria-label="Next image"
            disabled={filteredImages.length <= 1}
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div
            className="max-w-6xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.image_url}
              alt={lightboxImage.title}
              className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl"
            />
            <div className="bg-white rounded-b-lg p-6 mt-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                {lightboxImage.title}
              </h2>
              {lightboxImage.description && (
                <p className="text-slate-700 mb-2">{lightboxImage.description}</p>
              )}
              {lightboxImage.date && (
                <p className="text-royal-blue font-semibold">{lightboxImage.date}</p>
              )}
              <p className="text-sm text-slate-500 mt-4">
                Photo {currentIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            Use arrow keys to navigate • Press ESC to close
          </div>
        </div>
      )}

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Share Your Photos
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Were you at one of our events? We'd love to feature your photos in our gallery. Contact us to share your images from Nu Mu Sigma Chapter events.
          </p>
          <a
            href="mailto:photos@numusigma.org"
            className="inline-flex items-center px-8 py-4 bg-royal-blue text-white font-semibold rounded-lg hover:bg-royal-blue-700 transition-colors shadow-lg"
          >
            <Image className="mr-2 h-5 w-5" />
            Submit Photos
          </a>
        </div>
      </section>
    </div>
  );
}
