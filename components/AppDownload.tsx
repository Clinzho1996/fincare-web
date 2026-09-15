import { Gift, Smartphone, Zap } from "lucide-react";
import DownloadButtons from "./DownloadButtons";

export default function AppDownload() {
	return (
		<section
			id="download"
			className="py-24 bg-gradient-to-b from-white to-primary-50/40">
			<div className="max-w-7xl mx-auto px-5 sm:px-8">
				<div className="relative rounded-3xl overflow-hidden gradient-primary p-10 sm:p-16 text-white shadow-2xl">
					{/* Decorative */}
					<div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
					<div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/20 translate-y-1/2 -translate-x-1/3 blur-3xl" />

					<div className="relative grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs font-semibold mb-6">
								<Zap size={14} />
								Get started in under 2 minutes
							</div>

							<h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
								Download FinCare. Take control today.
							</h2>

							<p className="mt-5 text-white/80 text-lg leading-relaxed max-w-lg">
								Join thousands of users already budgeting smarter, saving
								faster, borrowing safely, and winning auctions on FinCare.
							</p>

							<div className="mt-8">
								<DownloadButtons variant="light" size="lg" />
							</div>

							<div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/80">
								<div className="flex items-center gap-2">
									<Smartphone size={16} />
									iOS 14+ & Android 8+
								</div>
								<div className="flex items-center gap-2">
									<Gift size={16} />
									Free forever plan
								</div>
							</div>
						</div>

						{/* Rating card */}
						<div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
							<div className="text-5xl font-black">4.9</div>
							<div className="mt-2 text-amber-300 text-lg">★★★★★</div>
							<div className="mt-2 text-white/70 text-sm">
								Average rating from 10,000+ users
							</div>

							<div className="mt-6 pt-6 border-t border-white/15 space-y-3 text-sm">
								<div className="flex items-center justify-between">
									<span className="text-white/70">Active users</span>
									<span className="font-bold">120K+</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-white/70">Saved via FinCare</span>
									<span className="font-bold">₦8.4B+</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-white/70">Auctions closed</span>
									<span className="font-bold">24,000+</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
