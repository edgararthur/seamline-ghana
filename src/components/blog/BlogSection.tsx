import { Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Accessorizing: A Complete Guide',
    excerpt: 'Learn how to elevate your outfit with the perfect accessories...',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93'
  },
  {
    id: 2,
    title: 'Sustainable Fashion: Our Commitment',
    excerpt: 'Discover how we are making fashion more sustainable...',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427'
  },
  {
    id: 3,
    title: 'Behind the Scenes: Making of Our Collections',
    excerpt: 'Take a peek into our workshop and design process...',
    date: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e'
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-black font-semibold flex items-center hover:text-gray-700">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}