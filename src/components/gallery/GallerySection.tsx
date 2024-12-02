import { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b',
    title: 'Stylish Cape Collection'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e',
    title: 'Detachable Collars'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc',
    title: 'Waist Belts'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e',
    title: 'Fashion Accessories'
  }
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full">
            <img
              src={galleryImages.find(img => img.id === selectedImage)?.url}
              alt="Gallery Preview"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}