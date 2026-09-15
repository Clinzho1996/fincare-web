"use client";

import { Eye, Headphones, Lock, ShieldCheck } from "lucide-react";

const items = [
	{
		icon: ShieldCheck,
		title: "Bank-grade encryption",
		text: "Your data and transactions are protected end-to-end with AES-256 bit encryption.",
		badge: "AES-256",
		color: "text-[#0092DD]",
		bg: "bg-[#0092DD]/10",
		border: "group-hover:border-[#0092DD]/30",
	},
	{
		icon: Lock,
		title: "Biometric login",
		text: "Fingerprint & Face ID authentication enabled across every supported device.",
		badge: "Biometric",
		color: "text-emerald-600",
		bg: "bg-emerald-500/10",
		border: "group-hover:border-emerald-500/30",
	},
	{
		icon: Eye,
		title: "Full transparency",
		text: "Zero hidden charges or surprise deductions. Every naira accounted for, always.",
		badge: "0 Hidden Fees",
		color: "text-[#0092DD]",
		bg: "bg-[#0092DD]/10",
		border: "group-hover:border-[#0092DD]/30",
	},
	{
		icon: Headphones,
		title: "Real human support",
		text: "Dedicated customer support team reachable in-app whenever you need assistance.",
		badge: "24/7 Support",
		color: "text-amber-600",
		bg: "bg-amber-500/10",
		border: "group-hover:border-amber-500/30",
	},
];

export default function Trust() {
	return (
		<section
			id="trust"
			className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
			{/* Background Radial Glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0092DD]/10 blur-[120px] rounded-full pointer-events-none" />

			<div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
				{/* Section Header */}
				<div className="max-w-2xl mx-auto text-center mb-16">
					<div className="inline-block text-xs font-extrabold uppercase tracking-wider mb-3 px-3 py-1 rounded-full bg-[#0092DD]/20 text-[#0092DD] border border-[#0092DD]/30">
						Built on trust
					</div>
					<h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
						Your money. Your rules. Our promise.
					</h2>
					<p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
						Security isn't a feature — it's the foundation of everything we
						build at FinCare.
					</p>
				</div>

				{/* Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{items.map((i) => {
						const Icon = i.icon;
						return (
							<div
								key={i.title}
								className={`group p-6 rounded-3xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 ${i.border} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}>
								<div>
									<div className="flex items-center justify-between mb-6">
										<div
											className={`w-12 h-12 rounded-2xl ${i.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
											<Icon size={22} className={i.color} />
										</div>
										<span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/40">
											{i.badge}
										</span>
									</div>

									<h3 className="font-bold text-lg text-white mb-2.5">
										{i.title}
									</h3>
									<p className="text-slate-400 text-sm leading-relaxed">
										{i.text}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
