"use client";

import { Apple, Play } from "lucide-react";

interface Props {
	variant?: "light" | "dark" | "outline";
	size?: "sm" | "md" | "lg";
}

export default function DownloadButtons({
	variant = "light",
	size = "md",
}: Props) {
	const variantStyles = {
		light:
			"bg-white text-slate-900 border border-slate-200/80 shadow-sm hover:border-slate-300 hover:bg-slate-50/50",
		outline:
			"bg-transparent text-slate-900 border border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white",
		dark: "bg-slate-900 text-white border border-slate-900 hover:bg-slate-800",
	}[variant];

	const sizeStyles = {
		sm: {
			padding: "px-3.5 py-2 rounded-lg",
			icon: 18,
			title: "text-xs font-semibold",
			sub: "text-[9px] font-medium opacity-60",
			gap: "gap-2.5",
		},
		md: {
			padding: "px-4.5 py-2.5 rounded-xl",
			icon: 20,
			title: "text-sm font-semibold",
			sub: "text-[10px] font-medium opacity-60",
			gap: "gap-3",
		},
		lg: {
			padding: "px-5 py-3 rounded-xl",
			icon: 24,
			title: "text-base font-semibold",
			sub: "text-[11px] font-medium opacity-60",
			gap: "gap-3.5",
		},
	}[size];

	return (
		<div className="flex flex-wrap items-center gap-3">
			{/* App Store Button */}
			<a
				href="https://apps.apple.com/app/fincare"
				target="_blank"
				rel="noopener noreferrer"
				className={`inline-flex items-center ${sizeStyles.gap} ${sizeStyles.padding} ${variantStyles} transition-colors duration-150`}>
				<Apple size={sizeStyles.icon} className="flex-shrink-0" />
				<div className="text-left leading-none">
					<div className={`${sizeStyles.sub} uppercase tracking-wide mb-1`}>
						Download on the
					</div>
					<div className={`${sizeStyles.title} tracking-tight`}>App Store</div>
				</div>
			</a>

			{/* Google Play Button */}
			<a
				href="https://play.google.com/store/apps/details?id=com.fincare"
				target="_blank"
				rel="noopener noreferrer"
				className={`inline-flex items-center ${sizeStyles.gap} ${sizeStyles.padding} ${variantStyles} transition-colors duration-150`}>
				<Play size={sizeStyles.icon} className="flex-shrink-0 fill-current" />
				<div className="text-left leading-none">
					<div className={`${sizeStyles.sub} uppercase tracking-wide mb-1`}>
						Get it on
					</div>
					<div className={`${sizeStyles.title} tracking-tight`}>
						Google Play
					</div>
				</div>
			</a>
		</div>
	);
}
