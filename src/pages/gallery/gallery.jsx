import React from 'react';
import './gallery.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/footer/footer';

const images = [
	'/gallery_images/HSP_1201.JPG',
	'/gallery_images/HSP_3860.JPG',
	'/gallery_images/HSP_3868.JPG',
	'/gallery_images/HSP_3878.JPG',
	'/gallery_images/HSP_3881.JPG',
	'/gallery_images/HSP_3896.JPG',
	'/gallery_images/HSP_3946.JPG',
	'/gallery_images/HSP_3970.JPG',
	'/gallery_images/HSP_3974.JPG',
	'/gallery_images/HSP_4006.JPG',
	'/gallery_images/HSP_4036.JPG',
	'/gallery_images/HSP_4077.JPG',
	'/gallery_images/HSP_4134.JPG',
	'/gallery_images/HSP_4142.JPG',
	'/gallery_images/HSP_4226.JPG',
	'/gallery_images/HSP_4279.JPG',

	'/gallery_images/HSP_4409.JPG',
	'/gallery_images/HSP_4472.JPG',
	'/gallery_images/HSP_4568.JPG',
	'/gallery_images/HSP_9007.JPG',
	// "/gallery_images/HSP_9012.JPG",

	'/gallery_images/HSP_0919.JPG',
	'/gallery_images/HSP_0922.JPG',
	'/gallery_images/HSP_4326.JPG',
	'/gallery_images/HSP_4394.JPG',
];

const Gallery = () => {
	return (
		<div>
			<Navbar />
			<div className='gallery-container'>
				<h1 className='gallery-title'>Glimpse of our past</h1>
				<div className='gallery-grid'>
					{images.map((url, index) => (
						<div key={index} className='gallery-item'>
							<LazyLoadImage
								src={url}
								alt={`Gallery Item ${index + 1}`}
								effect='blur'
								className='gallery-image'
							/>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Gallery;
