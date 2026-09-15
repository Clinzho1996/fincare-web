"use client";

import { Mail, ShieldCheck } from "lucide-react";
import Image from "next/image";
import DownloadButtons from "./DownloadButtons";

export default function Footer() {
	return (
		<footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
			{/* Background Glow */}
			<div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#0092DD]/5 blur-[120px] rounded-full pointer-events-none" />

			<div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
					{/* Brand Column */}
					<div className="lg:col-span-2">
						<div className="flex items-center gap-2.5 mb-4">
							<Image
								src="/favicon.png"
								alt="FinCare Logo"
								width={40}
								height={40}
								className="w-10 h-10"
							/>
							<span className="font-extrabold text-xl tracking-tight text-white">
								FinCare
							</span>
						</div>
						<p className="text-slate-400 text-sm leading-relaxed max-w-sm">
							Your all-in-one finance companion. Budget, save, borrow, and bid —
							all from a single secure app.
						</p>

						{/* Social Links */}
						<div className="mt-6 flex items-center gap-2.5">
							{[
								{
									icon: Mail,
									href: "mailto:hello@fincare.app",
									label: "Email",
								},
							].map((s) => {
								const Icon = s.icon;
								return (
									<a
										key={s.label}
										href={s.href}
										aria-label={s.label}
										className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0092DD] hover:border-[#0092DD] transition-all duration-200">
										<Icon size={16} />
									</a>
								);
							})}
						</div>

						{/* Download CTA in Footer */}
						<div className="mt-8">
							<p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
								Get the FinCare App
							</p>
							<DownloadButtons size="sm" />
						</div>
					</div>

					{/* Product Links */}
					<div>
						<h4 className="font-bold text-sm uppercase tracking-wider text-slate-300 mb-4">
							Product
						</h4>
						<ul className="space-y-3 text-sm text-slate-400">
							<li>
								<a
									href="#budgeting"
									className="hover:text-[#0092DD] transition-colors">
									Smart Budgeting
								</a>
							</li>
							<li>
								<a
									href="#savings"
									className="hover:text-[#0092DD] transition-colors">
									Automated Savings
								</a>
							</li>
							<li>
								<a
									href="#loans"
									className="hover:text-[#0092DD] transition-colors">
									Transparent Loans
								</a>
							</li>
							<li>
								<a
									href="#auctions"
									className="hover:text-[#0092DD] transition-colors">
									Live Auctions
								</a>
							</li>
						</ul>
					</div>

					{/* Company Links */}
					<div>
						<h4 className="font-bold text-sm uppercase tracking-wider text-slate-300 mb-4">
							Company
						</h4>
						<ul className="space-y-3 text-sm text-slate-400">
							<li>
								<a href="#" className="hover:text-[#0092DD] transition-colors">
									About Us
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-[#0092DD] transition-colors">
									Careers
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-[#0092DD] transition-colors">
									Press & Media
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-[#0092DD] transition-colors">
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Legal Links */}
					<div>
						<h4 className="font-bold text-sm uppercase tracking-wider text-slate-300 mb-4">
							Legal & Security
						</h4>
						<ul className="space-y-3 text-sm text-slate-400">
							<li>
								<a href="#" className="hover:text-[#0092DD] transition-colors">
									Terms of Service
								</a>
							</li>
							<li>
								<a
									href="/privacy"
									className="hover:text-[#0092DD] transition-colors">
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-[#0092DD] border-b border-dotted border-slate-600 pb-0.5 inline-flex items-center gap-1.5 transition-colors">
									<ShieldCheck size={14} className="text-emerald-400" />
									Security First
								</a>
							</li>
							<li>
								<a
									href="mailto:hello@fincare.app"
									className="hover:text-[#0092DD] inline-flex items-center gap-2 text-slate-300 font-medium transition-colors mt-1">
									<Mail size={14} className="text-[#0092DD]" />
									hello@fincare.app
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
					<div>
						© {new Date().getFullYear()} FinCare Technologies Ltd. All rights
						reserved.
					</div>
					<div className="flex items-center gap-6">
						<span>NDPR Compliant</span>
						<span>•</span>
						<span>AES-256 Encrypted</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
