"use client";
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

import Navbar from '../Components/Nav';
import PromoBlock from '../Components/PromoBlock';

const App = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center">

			{/* --- Header / Navigation --- */}
			<header className="w-full border-b  border-gray-200 pt-5 pb-3 mb-8">
				<Navbar navLinks={['HOME', 'BIO', 'MEDIA', 'PRESETS • MIDI', 'TOUR DATES']} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			</header>

			{/* --- Main Content Container --- */}
			<main className="w-full max-w-4xl px-4 md:px-6">

				{/* --- Hero Section (Title) --- */}
				<section
					className="
					flex flex-col justify-end items-center
					min-h-[350px] md:min-h-[550px] lg:min-h-[750px]
					text-center py-25 relative w-full
				  "
					style={{
						backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')",
						// backgroundImage: "url('https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/241160912_2114291305378847_2267114384868060267_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=L9cGUchJs2AQ7kNvwE--iql&_nc_oc=AdlU9sZIqh-eHldDvfISEb9CNFjeMWwBf0EXkvvDtKXwjoRmHSUlu_Tyea7LkQ_Ibs6OO-8O9tMzHURo7sy9U4SQ&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=uDOuRpwvjUsmzqtCCTNKsg&oh=00_Afa6BhisDc1WQSomLZwvUF4lbpd6qKS5puOvz9IoK4BVGA&oe=68E202B5')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}
				>
					{/* <div className="absolute inset-0 bg-black/40 pointer-events-none" /> */}
					<div className="relative z-1 flex flex-col items-center w-full ">
						<h1 className="text-5xl md:text-8xl font-extrabold tracking-extreme mb-1 text-indigo-100 ">
							AT THE SHORES
						</h1>
						<div className="flex justify-center space-x-6">
							<a href="#" className="text-indigo-100 hover:text-white"><FaFacebook size={28} /></a>
							<a href="#" className="text-indigo-100 hover:text-white"><FaInstagram size={28} /></a>
							<a href="#" className="text-indigo-100 hover:text-white"><FaYoutube size={28} /></a>
							<a href="#" className="text-indigo-100 hover:text-white"><FaTwitter size={28} /></a>
						</div>
					</div>
				</section>

				{/* --- Section Divider --- */}
				<div className="border-t border-gray-400 my-8 mx-auto w-3/4"></div>

				{/* --- Promo Block --- */}
				<PromoBlock />

				{/* --- Section Divider --- */}
				<div className="border-t border-gray-400 my-8 mx-auto w-3/4"></div>

				{/* --- News Feed --- */}
				<section className="border border-gray-200 p-5 mb-12">
					<h2 className="text-center text-lg tracking-super-wide font-normal pb-3 mb-4 border-b border-gray-100">
						N E W S & U P D A T E S
					</h2>
					<div className="divide-y divide-gray-50">
						{[
							{ date: 'FEB • 2 • 2024', entry: 'New album is almost finished being mixed. First single coming in March! Stay tuned!' },
							{ date: 'JAN • 19 • 2024', entry: 'Proud to announce I have a new signature model guitar available! Check it out HERE.' },
							{ date: 'DEC • 6 • 2023', entry: 'Excited to announce the Winter Tour dates. Tickets go on sale next week!' },
						].map((news, index) => (
							<article key={index} className="py-4 text-left">
								<p className="text-sm font-bold tracking-wider mb-1">{news.date}</p>
								<p className="text-base">{news.entry}</p>
							</article>
						))}
					</div>
				</section>

				{/* --- Section Divider --- */}
				<div className="border-t border-gray-400 my-8 mx-auto w-3/4"></div>

				{/* --- Media/Video Section --- */}
				<section id="MEDIA" className="text-center py-6">
					<h2 className="text-lg tracking-super-wide font-normal mb-8">RECENT VIDEOS</h2>
					<div className="grid md:grid-cols-2 gap-4">
						<iframe className="w-full aspect-video flex items-center justify-center shadow-2xl"
							width="560"
							height="315"
							src="https://www.youtube.com/embed?listType=playlist&list=UULs5-AuBCFNGR-I461R1Y9g"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						>
						</iframe>
						<iframe className="w-full aspect-video  flex items-center justify-center shadow-2xl"
							width="560"
							height="315"
							src="https://www.youtube.com/embed?listType=playlist&list=UULs5-AuBCFNGR-I461R1Y9g&index=2"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						>
						</iframe>
					</div>
				</section>

			</main>

			{/* --- Footer --- */}
			<footer className="mt-auto w-full border-t border-gray-400 py-5 text-center">
				<p className="text-xs md:text-lg text-gray-600">© 2025 At The Shores</p>
			</footer>
		</div>
	);
};

export default App;