import { ArrowRight } from 'lucide-react';

export default function Hero() {
	return (
		<div className="relative h-screen">
			<div className="absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
					alt="Fashion Banner"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-50" />
			</div>
			
			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
				<div className="text-white">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">
						Redefining Fashion Accessories,<br />
						One Stitch at a Time
					</h1>
					<p className="text-xl mb-8 max-w-2xl">
						Discover our unique collection of handcrafted accessories and apparel,
						where style meets innovation in every piece.
					</p>
					<div className="space-x-4">
						<button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center">
							Shop Now
							<ArrowRight className="ml-2 h-5 w-5" />
						</button>
						<button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors">
							Customize Your Style
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}