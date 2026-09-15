import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "FinCare — Smart Finance, Real Growth",
	description:
		"Budget smarter, save effortlessly, borrow safely, and turn assets into cash. FinCare is your all-in-one personal finance companion.",
	keywords: [
		"FinCare",
		"personal finance",
		"budgeting app",
		"savings",
		"loans",
		"auctions",
		"Nigeria finance",
	],
	openGraph: {
		title: "FinCare — Smart Finance, Real Growth",
		description:
			"Your all-in-one finance companion. Budget, save, borrow, and bid — all in one app.",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Navbar />
			<body>{children}</body>
			<Footer />
		</html>
	);
}
