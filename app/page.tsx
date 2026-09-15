"use client";

import AppDownload from "@/components/AppDownload";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";

export default function Home() {
	return (
		<main className="min-h-screen bg-white">
			<Hero />
			<Features />

			<Trust />
			<AppDownload />
		</main>
	);
}
