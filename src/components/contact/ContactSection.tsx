import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our products or services? We'd love to hear from you.
              Fill out the form and we'll be in touch as soon as possible.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-black mr-4" />
                <span>+233 55 950 0624</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-black mr-4" />
                <span>contact@seamlineghana.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-black mr-4" />
                <span>123 Fashion Street, Accra, Ghana</span>
              </div>
            </div>
          </div>

          <form className="space-y-6 text-gray-700">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black outline-none text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black outline-none text-sm"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black outline-none text-sm"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}