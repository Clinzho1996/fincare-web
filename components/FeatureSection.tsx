"use client";

import { Check, LucideIcon, ShieldCheck } from "lucide-react";

interface Props {
	id: string;
	eyebrow: string;
	title: string;
	description: string;
	bullets: string[];
	icon: LucideIcon;
	reverse?: boolean;
	accent?: "primary" | "accent" | "warning";
	/** Path to the mobile app screenshot for this feature */
	appScreenshotSrc: string;
}

export default function FeatureSection({
	id,
	eyebrow,
	title,
	description,
	bullets,
	icon: Icon,
	reverse = false,
	accent = "primary",
	appScreenshotSrc,
}: Props) {
	const accentMap = {
		primary: {
			text: "text-[#0092DD]",
			bg: "bg-[#0092DD]/10",
			border: "border-[#0092DD]/20",
			glow: "bg-[#0092DD]/15",
		},
		accent: {
			text: "text-emerald-600",
			bg: "bg-emerald-500/10",
			border: "border-emerald-500/20",
			glow: "bg-emerald-500/15",
		},
		warning: {
			text: "text-amber-600",
			bg: "bg-amber-500/10",
			border: "border-amber-500/20",
			glow: "bg-amber-500/15",
		},
	}[accent];

	return (
		<section
			id={id}
			className="py-20 sm:py-28 bg-white border-b border-slate-100 last:border-b-0 overflow-hidden">
			<div className="max-w-7xl mx-auto px-5 sm:px-8">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					{/* App Mockup Column */}
					<div className={reverse ? "lg:order-2" : "lg:order-1"}>
						<div className="relative flex justify-center items-center">
							<div className="relative group">
								{/* Ambient Background Glow */}
								<div
									className={`absolute inset-4 ${accentMap.glow} rounded-[50px] blur-2xl group-hover:opacity-100 transition-all duration-500 pointer-events-none`}
								/>

								{/* Phone Chassis (Silver/White Frame matching Hero) */}
								<div className="relative w-[280px] sm:w-[300px] h-[570px] sm:h-[610px] rounded-[48px] bg-slate-100 p-3 shadow-2xl border-4 border-slate-200 ring-1 ring-slate-300/60">
									{/* Dynamic Island Notch */}
									<div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-center">
										<div className="w-2.5 h-2.5 rounded-full bg-slate-800 ml-auto mr-2" />
									</div>

									{/* Screen Container */}
									<div className="relative w-full h-full rounded-[38px] overflow-hidden bg-white border border-slate-200/80">
										<img
											src={appScreenshotSrc}
											alt={`${title} Screen`}
											className="w-full h-full object-cover object-top"
											onError={(e) => {
												const target = e.currentTarget;
												target.style.display = "none";
												if (target.parentElement) {
													const fallback = document.createElement("div");
													fallback.className =
														"w-full h-full bg-slate-50 p-6 pt-16 flex flex-col justify-between text-slate-900 font-sans";
													fallback.innerHTML = `
                                                        <div>
                                                            <div className="flex justify-between items-center text-[10px] font-semibold text-slate-400 mb-6">
                                                                <span>9:41</span>
                                                                <span>5G</span>
                                                            </div>
                                                            <div className="w-9 h-9 rounded-xl bg-[#0092DD]/10 border border-[#0092DD]/20 flex items-center justify-center text-[#0092DD] mb-3">
                                                                <span className="font-bold text-xs">FC</span>
                                                            </div>
                                                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">${eyebrow}</p>
                                                            <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">${title}</h3>
                                                        </div>
                                                        <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs text-center">
                                                            <p className="text-xs font-semibold text-slate-700">${eyebrow} Screen</p>
                                                            <p className="text-[10px] text-slate-400 font-mono mt-0.5">${appScreenshotSrc}</p>
                                                        </div>
                                                    `;
													target.parentElement.appendChild(fallback);
												}
											}}
										/>
									</div>
								</div>

								{/* Floating Feature Card 1 */}
								<div className="absolute -left-6 sm:-left-8 top-24 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-3 sm:p-3.5 border border-slate-100 flex items-center gap-3 animate-in slide-in-from-left-4 duration-500">
									<div
										className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${accentMap.bg} flex items-center justify-center ${accentMap.text}`}>
										<Icon size={18} />
									</div>
									<div>
										<p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
											{eyebrow}
										</p>
										<p className={`text-xs font-extrabold ${accentMap.text}`}>
											Active ✓
										</p>
									</div>
								</div>

								{/* Floating Feature Card 2 */}
								<div className="absolute -right-6 sm:-right-8 bottom-24 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-3 sm:p-3.5 border border-slate-100 flex items-center gap-3 animate-in slide-in-from-right-4 duration-500">
									<div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
										<ShieldCheck size={18} />
									</div>
									<div>
										<p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
											Sync Status
										</p>
										<p className="text-xs font-bold text-slate-900">
											Encrypted
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Copy Column */}
					<div className={reverse ? "lg:order-1" : "lg:order-2"}>
						<div
							className={`inline-block text-xs font-extrabold uppercase tracking-wider mb-3.5 px-3 py-1 rounded-full ${accentMap.bg} ${accentMap.text}`}>
							{eyebrow}
						</div>
						<h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
							{title}
						</h2>
						<p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
							{description}
						</p>

						<ul className="mt-8 space-y-3.5">
							{bullets.map((b) => (
								<li key={b} className="flex items-start gap-3">
									<div
										className={`flex-shrink-0 w-5 h-5 rounded-full ${accentMap.bg} flex items-center justify-center mt-0.5`}>
										<Check
											size={12}
											className={accentMap.text}
											strokeWidth={3}
										/>
									</div>
									<span className="text-slate-700 text-sm font-medium leading-normal">
										{b}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
