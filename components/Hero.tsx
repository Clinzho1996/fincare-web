"use client";

import { Apple, Play, ShieldCheck, TrendingUp, Wallet } from "lucide-react";

export default function Hero() {
	return (
		<section
			className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-white"
			style={{
				backgroundImage: `
                    radial-gradient(circle at 1px 1px, #cbd5e1 1.5px, transparent 0),
                    linear-gradient(to right, #f1f5f9 1px, transparent 1px),
                    linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)
                `,
				backgroundSize: `32px 32px, 64px 64px, 64px 64px`,
			}}>
			{/* Ambient Brand Glow */}
			<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#0092DD]/15 to-indigo-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

			<div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Column: Copy & Hero Specific CTAs */}
					<div>
						{/* Live Badge */}
						<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50/90 backdrop-blur-xs border border-slate-200/80 text-slate-700 text-xs font-medium mb-6 shadow-xs">
							<span className="w-1.5 h-1.5 rounded-full bg-[#0092DD] animate-pulse" />
							<span>Now available on iOS & Android</span>
						</div>

						{/* Heading */}
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
							Smart finance.
							<br />
							<span className="text-[#0092DD]">Real growth.</span>
						</h1>

						<p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
							Budget smarter, save effortlessly, borrow safely, and turn assets
							into cash. FinCare is your all-in-one personal finance companion —
							built for the way you live.
						</p>

						{/* Hero-Specific Download Buttons */}
						<div className="mt-8 flex flex-wrap items-center gap-3">
							<a
								href="https://apps.apple.com/app/fincare"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all duration-150 shadow-sm active:scale-[0.98]">
								<Apple size={22} className="flex-shrink-0" />
								<div className="text-left leading-none">
									<div className="text-[10px] font-medium uppercase tracking-wide opacity-70 mb-1">
										Download on
									</div>
									<div className="text-sm font-semibold tracking-tight">
										App Store
									</div>
								</div>
							</a>

							<a
								href="https://play.google.com/store/apps/details?id=com.fincare"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white text-slate-900 border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300 transition-all duration-150 shadow-xs active:scale-[0.98]">
								<Play
									size={20}
									className="flex-shrink-0 fill-current text-slate-800"
								/>
								<div className="text-left leading-none">
									<div className="text-[10px] font-medium uppercase tracking-wide opacity-60 mb-1">
										Get it on
									</div>
									<div className="text-sm font-semibold tracking-tight">
										Google Play
									</div>
								</div>
							</a>
						</div>

						{/* Trust Badges */}
						<div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm font-medium text-slate-600">
							<div className="flex items-center gap-2">
								<ShieldCheck size={18} className="text-[#0092DD]" />
								Bank-grade security
							</div>
							<div className="flex items-center gap-2">
								<Wallet size={18} className="text-[#0092DD]" />
								Zero hidden fees
							</div>
							<div className="flex items-center gap-2">
								<TrendingUp size={18} className="text-[#0092DD]" />
								Real-time tracking
							</div>
						</div>
					</div>

					{/* Right Column: Light Phone Mockup */}
					<div className="relative hidden lg:flex justify-center items-center">
						<div className="relative group">
							{/* Outer Ambient Glow */}
							<div className="absolute inset-4 bg-[#0092DD]/15 rounded-[50px] blur-2xl group-hover:bg-[#0092DD]/20 transition-all duration-500" />

							{/* Phone Chassis */}
							<div className="relative w-[310px] h-[630px] rounded-[48px] bg-slate-100 p-1 shadow-2xl border-4 border-slate-200/90 ring-1 ring-slate-300/60">
								{/* Dynamic Island */}
								<div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-center">
									<div className="w-2.5 h-2.5 rounded-full bg-slate-800 ml-auto mr-2" />
								</div>

								{/* Screen Container */}
								<div className="relative w-full h-full rounded-[38px] overflow-hidden bg-white border border-slate-200/80">
									<img
										src="/app.png"
										alt="FinCare Mobile App Interface"
										className="w-full h-full object-cover object-top"
									/>
								</div>
							</div>

							{/* Floating Card 1: Daily Return */}
							<div className="absolute -left-10 top-28 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-3.5 border border-slate-100 flex items-center gap-3">
								<div className="w-9 h-9 rounded-xl bg-[#0092DD]/10 flex items-center justify-center text-[#0092DD]">
									<TrendingUp size={18} />
								</div>
								<div>
									<p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
										Daily Return
									</p>
									<p className="text-xs font-bold text-slate-900">+₦3,420.00</p>
								</div>
							</div>

							{/* Floating Card 2: Security Badge */}
							<div className="absolute -right-8 bottom-28 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-3.5 border border-slate-100 flex items-center gap-3">
								<div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
									<ShieldCheck size={18} />
								</div>
								<div>
									<p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
										Encrypted
									</p>
									<p className="text-xs font-bold text-slate-900">
										256-bit AES
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
