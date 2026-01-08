"use client";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CheckCircleIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export type Plan = {
	name: string;
	info: string;
	price: string;
	features: {
		text: string;
		tooltip?: string;
	}[];
	btn: {
		text: string;
		href: string;
	};
	highlighted?: boolean;
};

interface PricingSectionProps extends React.ComponentProps<"div"> {
	plans: Plan[];
	heading: string;
	description?: string;
	footer?: string;
}

export const PricingSection = React.memo(({
	plans,
	heading,
	description,
	footer,
	...props
}: PricingSectionProps) => {
	return (
		<div
			className={cn(
				"flex w-full flex-col items-center justify-center space-y-8 p-4",
				props.className
			)}
			{...props}
		>
			<div className="mx-auto max-w-4xl space-y-4">
				<div className="flex justify-center">
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="inline-flex items-center justify-center gap-2 text-lime-600 font-semibold tracking-wide uppercase text-xs md:text-sm"
					>
						<span className="w-8 h-[2px] bg-lime-500 rounded-full" />
						Fair Pricing
						<span className="w-8 h-[2px] bg-lime-500 rounded-full" />
					</motion.div>
				</div>
				<h2
					className="text-center font-coolvetica text-3xl tracking-wide md:text-4xl lg:text-5xl font-normal leading-tight"
				>
					Plans that{" "}
					<span className="bg-gradient-to-r from-lime-400 to-lime-200 text-gray-900 px-4 md:px-5 py-1 md:py-2 inline-block font-bold rounded-lg shadow-lg shadow-lime-500/20">
						Scale
					</span>{" "}
					With You
				</h2>
				{description && (
					<p className="text-center text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
						{description}
					</p>
				)}
			</div>

			<div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 pt-8">
				{plans.map((plan) => (
					<PricingCard key={plan.name} plan={plan} />
				))}
			</div>
			{footer && (
				<p className="text-center text-muted-foreground text-sm mt-8 italic">
					{footer}
				</p>
			)}
		</div>
	);
});

PricingSection.displayName = "PricingSection";

type PricingCardProps = React.ComponentProps<"div"> & {
	plan: Plan;
};

export const PricingCard = React.memo(({
	plan,
	className,
	...props
}: PricingCardProps) => {
	return (
		<div
			className={cn(
				"relative flex w-full flex-col rounded-2xl border bg-white/70 backdrop-blur-sm shadow-sm transition-all duration-300",
				plan.highlighted
					? "scale-105 border-lime-400 shadow-xl shadow-lime-500/10 z-10"
					: "border-gray-200 hover:border-lime-200 hover:shadow-lg",
				className
			)}
			key={plan.name}
			{...props}
		>
			<div
				className={cn(
					"rounded-t-2xl border-b p-6",
					plan.highlighted && "bg-lime-50/30"
				)}
			>
				<div className="absolute top-4 right-4 z-10 flex items-center gap-2">
					{plan.highlighted && (
						<p className="flex items-center gap-1 rounded-full border border-lime-400 bg-lime-400 px-3 py-1 text-xs font-bold text-black shadow-sm">
							<StarIcon className="h-3 w-3 fill-current" />
							Popular
						</p>
					)}
				</div>

				<div className="font-coolvetica text-2xl tracking-wide">{plan.name}</div>
				<p className="font-sans text-muted-foreground text-sm mt-1">{plan.info}</p>
				<h3 className="mt-8 mb-2 flex items-baseline gap-1">
					<span className="font-coolvetica text-4xl font-bold text-gray-900">
						{plan.price}
					</span>
				</h3>
			</div>
			<div
				className={cn(
					"space-y-4 px-6 pt-8 pb-10 text-muted-foreground text-sm flex-1",
					plan.highlighted ? "bg-transparent" : "bg-gray-50/50"
				)}
			>
				{plan.features.map((feature, index) => (
					<div className="flex items-start gap-3" key={index}>
						<CheckCircleIcon className={cn("h-5 w-5 shrink-0 text-lime-500")} />
						<TooltipProvider>
							<Tooltip delayDuration={0}>
								<TooltipTrigger asChild>
									<p
										className={cn(feature.tooltip && "cursor-pointer border-b border-dashed border-gray-300")}
									>
										{feature.text}
									</p>
								</TooltipTrigger>
								{feature.tooltip && (
									<TooltipContent>
										<p>{feature.tooltip}</p>
									</TooltipContent>
								)}
							</Tooltip>
						</TooltipProvider>
					</div>
				))}
			</div>
			<div
				className={cn(
					"mt-auto w-full rounded-b-2xl p-6 pt-0"
				)}
			>
				<Button
					asChild
					className={cn(
						"w-full h-12 rounded-xl text-base font-semibold shadow-none transition-all duration-300",
						plan.highlighted
							? "bg-black text-white hover:bg-gray-800 hover:shadow-lg hover:scale-[1.02]"
							: "bg-white border-2 border-gray-100 text-gray-900 hover:bg-lime-50 hover:border-lime-200"
					)}
					variant="default"
				>
					<Link href={plan.btn.href}>{plan.btn.text}</Link>
				</Button>
			</div>
		</div>
	);
});

PricingCard.displayName = "PricingCard";
