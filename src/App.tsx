import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ShopPage from './pages/ShopPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="shop" element={<ShopPage />} />
					<Route path="gallery" element={<GalleryPage />} />
					<Route path="blog" element={<BlogPage />} />
					<Route path="contact" element={<ContactPage />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;