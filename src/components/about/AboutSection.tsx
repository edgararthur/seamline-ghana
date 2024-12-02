import { Scissors, Star, Users, Heart } from 'lucide-react';

const features = [
  {
    icon: Scissors,
    title: 'Expert Craftsmanship',
    description: 'Each piece is meticulously crafted by our skilled artisans.'
  },
  {
    icon: Star,
    title: 'Quality Materials',
    description: 'We source only the finest materials for our creations.'
  },
  {
    icon: Users,
    title: 'Custom Designs',
    description: 'Personalized fashion pieces tailored to your style.'
  },
  {
    icon: Heart,
    title: 'Customer Satisfaction',
    description: 'Your satisfaction is our top priority.'
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Founded with a passion for innovative fashion, Seamline Ghana has grown from a small workshop
            to a leading name in fashion accessories. Our journey is marked by creativity, dedication,
            and a commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-6">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}