"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
	{ label: "Features", href: "#features" },
	{ label: "Budgeting", href: "#budgeting" },
	{ label: "Savings", href: "#savings" },
	{ label: "Loans", href: "#loans" },
	{ label: "Auctions", href: "#auctions" },
];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.window.scrollY > 20);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "unset";
	}, [open]);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 transition-all duration-300">
			<nav
				className={`max-w-6xl mx-auto h-14 px-4 sm:px-6 flex items-center justify-between rounded-full transition-all duration-300 ${
					scrolled
						? "bg-white dark:bg-white backdrop-blur-xl border border-neutral-200/80 dark:border-white/10 shadow-sm"
						: "bg-transparent border border-transparent"
				}`}>
				{/* Logo Image Placeholder */}
				<a href="/" className="flex items-center gap-2.5 group">
					<div className="relative  overflow-hidden flex items-center justify-center ">
						{/* Replace src with your image path */}
						<img
							src="/logo.png"
							alt="FinCare Logo"
							className="w-20 h-full object-contain p-1.5 transition-transform group-hover:scale-105"
							onError={(e) => {
								(e.currentTarget as HTMLImageElement).style.display = "none";
							}}
						/>
					</div>
				</a>

				{/* Desktop Nav Links */}
				<ul className="hidden md:flex items-center gap-1 bg-neutral-100/70 dark:bg-white p-1 rounded-full border border-neutral-200/60 dark:border-neutral-700/50">
					{links.map((l) => (
						<li key={l.href}>
							<a
								href={l.href}
								className="px-3.5 py-1.5 text-xs font-medium text-neutral-600 hover:text-[#0092DD] dark:text-neutral-400 dark:hover:text-[#0092DD] rounded-full transition-colors hover:bg-white dark:hover:bg-neutral-900">
								{l.label}
							</a>
						</li>
					))}
				</ul>

				{/* Desktop CTA Button */}
				<div className="hidden md:flex items-center">
					<a
						href="#download"
						className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0092DD] hover:bg-[#0082c5] text-white text-xs font-medium transition-all shadow-sm shadow-[#0092DD]/20 active:scale-[0.98]">
						<span>Get the App</span>
						<ArrowUpRight size={14} className="opacity-80" />
					</a>
				</div>

				{/* Mobile Menu Toggle Button */}
				<button
					className="md:hidden p-2 text-neutral-700 dark:text-neutral-300 hover:text-[#0092DD] rounded-full transition-colors"
					onClick={() => setOpen(!open)}
					aria-label="Toggle navigation menu"
					aria-expanded={open}>
					{open ? <X size={20} /> : <Menu size={20} />}
				</button>
			</nav>

			{/* Mobile Navigation Sheet */}
			{open && (
				<div className="fixed inset-0 top-[72px] z-40 bg-neutral-950/20 dark:bg-black/40 backdrop-blur-sm md:hidden animate-in fade-in duration-200">
					<div className="mx-4 p-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xl flex flex-col gap-3 animate-in slide-in-from-top-4 duration-200">
						<div className="flex flex-col gap-1">
							{links.map((l) => (
								<a
									key={l.href}
									href={l.href}
									onClick={() => setOpen(false)}
									className="px-3 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-[#0092DD] hover:bg-[#0092DD]/5 rounded-xl transition-colors">
									{l.label}
								</a>
							))}
						</div>
						<div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
							<a
								href="#download"
								onClick={() => setOpen(false)}
								className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-[#0092DD] hover:bg-[#0082c5] text-white text-sm font-medium transition-colors">
								<span>Get the App</span>
								<ArrowUpRight size={16} />
							</a>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
