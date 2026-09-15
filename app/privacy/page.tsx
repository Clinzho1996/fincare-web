"use client";

import {
	ArrowLeft,
	FileText,
	Lock,
	Mail,
	Scale,
	ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navigationSections = [
	{ id: "privacy-policy", title: "1. Privacy & Data Protection" },
	{ id: "information-collected", title: "1.1 Information We Collect" },
	{ id: "how-we-use-data", title: "1.2 How We Use Your Data" },
	{ id: "closed-loop-policy", title: "1.3 Closed-Loop Payment System" },
	{ id: "zero-third-party", title: "1.4 Zero Third-Party Sharing" },
	{ id: "security-retention", title: "1.5 Security & Retention" },
	{ id: "user-rights", title: "1.6 Your Data Rights" },
	{
		id: "jurisdiction-nigeria",
		title: "1.7 Jurisdiction: Nigeria (NDPA/NDPR)",
	},
	{ id: "auction-terms", title: "2. Investment Auction & Bidding Terms" },
	{ id: "auction-eligibility", title: "2.1 Eligibility & Access" },
	{ id: "auction-seller-rules", title: "2.2 Seller Listings & Rules" },
	{ id: "auction-bidding-rules", title: "2.3 Bidding Mechanics" },
	{ id: "auction-resolution", title: "2.4 Resolution, Fees & Settlement" },
	{ id: "anti-manipulation", title: "2.5 Anti-Market Manipulation" },
];

export default function PrivacyPolicyPage() {
	const [activeSection, setActiveSection] = useState("privacy-policy");

	const scrollToSection = (id: string) => {
		setActiveSection(id);
		const element = document.getElementById(id);
		if (element) {
			const offset = 100;
			const bodyRect = document.body.getBoundingClientRect().top;
			const elementRect = element.getBoundingClientRect().top;
			const elementPosition = elementRect - bodyRect;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="bg-slate-50 min-h-screen text-slate-800 font-sans pb-24 pt-20">
			{/* Header / Hero */}
			<header className="bg-slate-900 text-white pt-16 pb-20 border-b border-slate-800 relative overflow-hidden">
				<div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-[#0092DD]/10 blur-[120px] rounded-full pointer-events-none" />

				<div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
					<Link
						href="/"
						className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors mb-8">
						<ArrowLeft size={14} /> Back to Home
					</Link>

					<div className="flex items-center gap-3 mb-4">
						<div className="w-10 h-10 rounded-2xl bg-[#0092DD]/20 border border-[#0092DD]/30 flex items-center justify-center text-[#0092DD]">
							<ShieldCheck size={22} />
						</div>
						<span className="text-xs font-extrabold uppercase tracking-wider text-[#0092DD]">
							Legal & Compliance
						</span>
					</div>

					<h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
						Privacy Policy & Investment Auction Terms
					</h1>
					<p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
						Learn how FinCare protects your financial data and governs
						fractional investment trading with industry-grade security
						protocols.
					</p>

					<div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium">
						<span>Last Updated: September 2026</span>
						<span>•</span>
						<span>Effective Date: Immediate</span>
						<span>•</span>
						<span className="text-emerald-400 flex items-center gap-1.5">
							<Lock size={12} /> NDPR & NDPA Compliant
						</span>
					</div>
				</div>
			</header>

			{/* Main Content Area */}
			<main className="max-w-7xl mx-auto px-5 sm:px-8 pt-12">
				<div className="grid lg:grid-cols-12 gap-12 items-start">
					{/* Sticky Table of Contents Sidebar */}
					<aside className="hidden lg:block lg:col-span-4 sticky top-8">
						<div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
							<h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
								<FileText size={14} /> Policy Navigation
							</h3>
							<nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 scrollbar-thin">
								{navigationSections.map((sec) => (
									<button
										key={sec.id}
										onClick={() => scrollToSection(sec.id)}
										className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-150 block truncate ${
											activeSection === sec.id
												? "bg-[#0092DD]/10 text-[#0092DD]"
												: "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
										}`}>
										{sec.title}
									</button>
								))}
							</nav>
						</div>
					</aside>

					{/* Legal Document Content */}
					<article className="lg:col-span-8 bg-white p-6 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xs space-y-12">
						{/* SECTION 1: PRIVACY & DATA PROTECTION */}
						<section id="privacy-policy" className="scroll-mt-28">
							<div className="border-b border-slate-100 pb-6 mb-8">
								<span className="text-xs font-bold uppercase tracking-wider text-[#0092DD]">
									Part 1
								</span>
								<h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
									Privacy and Data Protection Policy
								</h2>
								<p className="mt-3 text-slate-600 leading-relaxed text-sm">
									FinCare protects your personal and financial information with
									the highest security standards. This policy outlines how we
									collect, use, and secure your data.
								</p>
							</div>

							<div className="space-y-8 text-sm leading-relaxed text-slate-700">
								{/* 1.1 Information We Collect */}
								<div id="information-collected" className="scroll-mt-28">
									<h3 className="text-lg font-bold text-slate-900 mb-3">
										1.1 Information We Collect
									</h3>
									<p className="mb-4">
										We only collect data necessary to provide our budgeting,
										cooperative savings, and fractional investment services.
									</p>
									<div className="grid sm:grid-cols-2 gap-4">
										<div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
											<span className="font-bold text-slate-900 block mb-1">
												Identity Data
											</span>
											<p className="text-xs text-slate-600">
												Full name, date of birth, and government-issued
												identification.
											</p>
										</div>
										<div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
											<span className="font-bold text-slate-900 block mb-1">
												Contact Data
											</span>
											<p className="text-xs text-slate-600">
												Email address, phone number, and physical residential
												address.
											</p>
										</div>
										<div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
											<span className="font-bold text-slate-900 block mb-1">
												Financial Data
											</span>
											<p className="text-xs text-slate-600">
												Verified bank account details for funding deposits and
												withdrawals.
											</p>
										</div>
										<div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
											<span className="font-bold text-slate-900 block mb-1">
												Transaction Data
											</span>
											<p className="text-xs text-slate-600">
												Details of your budgets, savings vaults, investments,
												bids, and auctions.
											</p>
										</div>
									</div>
								</div>

								{/* 1.2 How We Use Your Data */}
								<div id="how-we-use-data" className="scroll-mt-28 pt-4">
									<h3 className="text-lg font-bold text-slate-900 mb-3">
										1.2 How We Use Your Data
									</h3>
									<p className="mb-3">
										Your data is used strictly to run the FinCare platform and
										comply with regulatory financial requirements:
									</p>
									<ul className="list-disc pl-5 space-y-2 text-slate-600">
										<li>
											<strong className="text-slate-800">
												Account Management:
											</strong>{" "}
											Creating, verifying, and maintaining your account profile.
										</li>
										<li>
											<strong className="text-slate-800">
												Platform Services:
											</strong>{" "}
											Operating automated budget tools, cooperative savings
											vaults, and the investment auction system.
										</li>
										<li>
											<strong className="text-slate-800">
												Security & Compliance:
											</strong>{" "}
											Monitoring, detecting, and preventing fraud, money
											laundering, or unauthorized system access.
										</li>
									</ul>
								</div>

								{/* 1.3 Strict Closed-Loop Payment Policy */}
								<div
									id="closed-loop-policy"
									className="scroll-mt-28 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20">
									<h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
										<Scale size={18} className="text-amber-600" />
										1.3 Strict Closed-Loop Payment Policy
									</h3>
									<p className="text-slate-700 mb-3 text-xs leading-relaxed">
										To prevent fraud, identity theft, and money laundering,
										FinCare enforces a strict closed-loop payment system across
										all accounts:
									</p>
									<ul className="space-y-2 text-xs text-slate-800 font-medium">
										<li className="flex items-start gap-2">
											<span className="text-amber-600 font-bold">✓</span>
											<span>
												<strong>Matching Accounts:</strong> The bank account
												used to fund your FinCare wallet must strictly match the
												name on your withdrawal account.
											</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-amber-600 font-bold">✓</span>
											<span>
												<strong>No Third-Party Payouts:</strong> We will not
												transfer funds to any bank account registered under a
												different name.
											</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-amber-600 font-bold">✓</span>
											<span>
												<strong>Verification:</strong> We rigorously verify
												account ownership before processing any outbound
												transaction.
											</span>
										</li>
									</ul>
								</div>

								{/* 1.4 Zero Third-Party Data Sharing */}
								<div id="zero-third-party" className="scroll-mt-28 pt-4">
									<h3 className="text-lg font-bold text-slate-900 mb-3">
										1.4 Zero Third-Party Data Sharing
									</h3>
									<p className="mb-3">
										We value your privacy and maintain strict boundaries with
										your personal information:
									</p>
									<ul className="list-disc pl-5 space-y-2 text-slate-600">
										<li>
											<strong>No Data Selling:</strong> We never sell, rent, or
											trade your personal or transaction data to anyone.
										</li>
										<li>
											<strong>No Third-Party Marketing:</strong> We do not share
											your information with external marketing agencies or
											advertisers.
										</li>
										<li>
											<strong>Legal Exceptions:</strong> Information is
											disclosed only when required by valid court order,
											financial law, or regulatory authority.
										</li>
									</ul>
								</div>

								{/* 1.5 Data Security and Retention */}
								<div id="security-retention" className="scroll-mt-28 pt-4">
									<h3 className="text-lg font-bold text-slate-900 mb-3">
										1.5 Data Security and Retention
									</h3>
									<p className="mb-3">
										We store and protect your data using industry-standard
										protocols:
									</p>
									<div className="space-y-3">
										<p>
											<strong>Encryption:</strong> All data is encrypted during
											transit using TLS 1.3 and at rest using AES-256 standards.
										</p>
										<p>
											<strong>Access Control:</strong> Only authorized FinCare
											personnel with explicit operational need can access your
											records.
										</p>
										<p>
											<strong>Retention:</strong> We store data while your
											account is active, or as long as required by anti-money
											laundering (AML) and financial record-keeping laws.
										</p>
									</div>
								</div>

								{/* 1.6 Your Rights */}
								<div id="user-rights" className="scroll-mt-28 pt-4">
									<h3 className="text-lg font-bold text-slate-900 mb-3">
										1.6 Your Data Rights
									</h3>
									<p className="mb-3">
										You retain full control over your personal data:
									</p>
									<div className="grid sm:grid-cols-3 gap-3 text-xs">
										<div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
											<strong className="text-slate-900 block mb-1">
												Access
											</strong>
											Request a copy of all personal records FinCare holds about
											you.
										</div>
										<div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
											<strong className="text-slate-900 block mb-1">
												Correction
											</strong>
											Update or modify inaccurate or incomplete user
											information.
										</div>
										<div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
											<strong className="text-slate-900 block mb-1">
												Deletion
											</strong>
											Request complete account closure, subject to statutory
											retention limits.
										</div>
									</div>
								</div>

								{/* 1.7 Jurisdiction-Specific: Nigeria */}
								<div
									id="jurisdiction-nigeria"
									className="scroll-mt-28 p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
									<h3 className="text-lg font-bold text-slate-900 mb-2">
										1.7 Jurisdiction: Nigeria (NDPA & NDPR)
									</h3>
									<p className="text-slate-600 text-xs leading-relaxed mb-4">
										For users in Nigeria, we process personal data in compliance
										with the Nigeria Data Protection Act (NDPA) and the Nigeria
										Data Protection Regulation (NDPR).
									</p>
									<div className="space-y-2 text-xs text-slate-700">
										<p>
											<strong>Data Controller:</strong> FinCare Technologies Ltd
											acts as the designated Data Controller.
										</p>
										<p>
											<strong>Lawful Basis:</strong> Data processing is grounded
											on contract fulfillment, legal obligation, and explicit
											user consent.
										</p>
										<p className="flex items-center gap-1.5 pt-1">
											<strong>Data Protection Officer (DPO):</strong>
											<a
												href="mailto:dpo@fincareapp.com"
												className="text-[#0092DD] font-semibold hover:underline inline-flex items-center gap-1">
												<Mail size={12} /> dpo@fincareapp.com
											</a>
										</p>
										<p className="pt-1">
											<strong>Remedies:</strong> You have the right to submit
											grievances directly to the Nigeria Data Protection
											Commission (NDPC).
										</p>
									</div>
								</div>
							</div>
						</section>

						<hr className="border-slate-100 my-10" />

						{/* SECTION 2: INVESTMENT AUCTION AND BIDDING TERMS */}
						<section id="auction-terms" className="scroll-mt-28">
							<div className="border-b border-slate-100 pb-6 mb-8">
								<span className="text-xs font-bold uppercase tracking-wider text-amber-600">
									Part 2
								</span>
								<h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
									Investment Auction and Bidding Terms
								</h2>
								<p className="mt-3 text-slate-600 leading-relaxed text-sm">
									These Terms and Conditions govern the use of the FinCare
									fractional investment auction and bidding system. By
									participating in any auction, you agree to these legally
									binding rules.
								</p>
							</div>

							<div className="space-y-8 text-sm leading-relaxed text-slate-700">
								{/* 2.1 Eligibility and Access */}
								<div id="auction-eligibility" className="scroll-mt-28">
									<h3 className="text-lg font-bold text-slate-900 mb-3">
										2.1 Eligibility and Access
									</h3>
									<p className="mb-3">
										Access to the secondary auction marketplace is restricted to
										verified users:
									</p>
									<ul className="list-disc pl-5 space-y-2 text-slate-600">
										<li>
											<strong>KYC Requirement:</strong> Full identity
											verification is mandatory prior to submitting bids or
											listing assets.
										</li>
										<li>
											<strong>Fund Sufficiency:</strong> Bidders must maintain
											sufficient cleared wallet balances to cover bid amounts.
										</li>
										<li>
											<strong>Asset Ownership:</strong> Sellers must hold
											unencumbered title to listed fractional assets.
										</li>
									</ul>
								</div>

								{/* 2.2 Seller Listings and Rules */}
								<div id="auction-seller-rules" className="scroll-mt-28 pt-4">
									<h3 className="text-lg font-bold text-slate-900 mb-3">
										2.2 Seller Listings and Rules
									</h3>
									<p className="mb-3">
										Sellers may liquidate fractional investment holdings under
										the following parameters:
									</p>
									<ul className="list-disc pl-5 space-y-2 text-slate-600">
										<li>
											<strong>Reserve Price:</strong> Sellers may configure a
											confidential minimum price required to complete the sale.
										</li>
										<li>
											<strong>Irrevocable Listing:</strong> Listings cannot be
											withdrawn or modified once a valid qualifying bid is
											registered.
										</li>
										<li>
											<strong>Marketing:</strong> FinCare displays listings on
											the marketplace platform but makes no guarantee of
											completed liquidation.
										</li>
									</ul>
								</div>

								{/* 2.3 Bidding Mechanics */}
								<div id="auction-bidding-rules" className="scroll-mt-28 pt-4">
									<h3 className="text-lg font-bold text-slate-900 mb-3">
										2.3 Bidding Rules and Mechanics
									</h3>
									<div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
										<p>
											<strong>Binding Commitment:</strong> Placed bids
											constitute irrevocable financial commitments and cannot be
											canceled.
										</p>
										<p>
											<strong>Fund Hold:</strong> Placed bid amounts are
											instantly locked in the bidder’s wallet balance until
											outbid or settled.
										</p>
										<p>
											<strong>Auto-Extension:</strong> Bids registered in the
											final two minutes extend the closing window by two
											additional minutes to prevent sniping.
										</p>
									</div>
								</div>

								{/* 2.4 Resolution, Fees, and Settlement */}
								<div
									id="auction-resolution"
									className="scroll-mt-28 p-6 rounded-2xl bg-slate-900 text-white space-y-4">
									<h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
										<Scale size={18} className="text-[#0092DD]" />
										2.4 Auction Resolution, Fees, and Settlement
									</h3>
									<div className="space-y-3 text-xs text-slate-300 leading-relaxed">
										<p>
											<strong className="text-white">Winning Bid:</strong> The
											highest valid bid wins, provided it meets or exceeds the
											seller's minimum hidden price.
										</p>
										<p>
											<strong className="text-white">Unsold Status:</strong> If
											the highest bid is below the hidden price when the auction
											ends, the asset remains unsold, and locked buyer funds are
											released.
										</p>
										<p>
											<strong className="text-white">
												FinCare Discretionary Fees:
											</strong>{" "}
											The seller agrees to pay a transaction fee determined
											solely by FinCare.
										</p>
										<p>
											<strong className="text-white">
												Automatic Deduction:
											</strong>{" "}
											FinCare automatically calculates and deducts this fee from
											the final sale proceeds before transferring the remaining
											balance to the seller.
										</p>
										<p>
											<strong className="text-white">All Sales Final:</strong>{" "}
											Once the hidden price is met and the auction closes, the
											transaction is instant, final, and irreversible.
										</p>
									</div>
								</div>

								{/* 2.5 Anti-Market Manipulation */}
								<div id="anti-manipulation" className="scroll-mt-28 pt-4">
									<h3 className="text-lg font-bold text-slate-900 mb-3">
										2.5 Anti-Market Manipulation
									</h3>
									<p className="mb-3">
										FinCare strictly monitors bidding activity to preserve fair
										market standards:
									</p>
									<ul className="list-disc pl-5 space-y-2 text-slate-600">
										<li>
											<strong>Shill Bidding Prohibited:</strong> Asset owners
											and related parties are barred from bidding on their own
											listings.
										</li>
										<li>
											<strong>Collusion Prohibition:</strong> Coordinating bids
											to artificially suppress or inflate asset valuations is
											strictly forbidden.
										</li>
										<li>
											<strong>Enforcement:</strong> Identified manipulation
											results in immediate account suspension, wallet
											forfeiture, and regulatory reporting.
										</li>
									</ul>
								</div>
							</div>
						</section>

						{/* Contact & Support Section */}
						<div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
							<div className="text-slate-500">
								Have questions regarding our legal or data policies?
							</div>
							<a
								href="mailto:hello@fincareapp.com"
								className="px-4 py-2 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors inline-flex items-center gap-2">
								<Mail size={14} /> Contact Legal Team
							</a>
						</div>
					</article>
				</div>
			</main>
		</div>
	);
}
