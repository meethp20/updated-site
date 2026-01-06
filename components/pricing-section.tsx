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
import { type FREQUENCY, FrequencyToggle } from "@/components/frequency-toggle";

export type Plan = {
	name: string;
	info: string;
	price: {
		monthly: number;
		yearly: number;
	};
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
}

export function PricingSection({
	plans,
	heading,
	description,
	...props
}: PricingSectionProps) {
	const [frequency, setFrequency] = React.useState<"monthly" | "yearly">(
		"monthly"
	);

	return (
		<div
			className={cn(
				"flex w-full flex-col items-center justify-center space-y-8 p-4",
				props.className
			)}
			{...props}
		>
			<div className="mx-auto max-w-4xl space-y-4">
				<h2
					className="text-center font-coolvetica text-4xl tracking-wide md:text-5xl lg:text-6xl"
					style={{ fontFamily: "Coolvetica, 'Coolvetica Hv Comp', sans-serif" }}
				>
					{heading}
				</h2>
				{description && (
					<p className="text-center text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
						{description}
					</p>
				)}
			</div>

			<FrequencyToggle frequency={frequency} setFrequency={setFrequency} />
			<div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 pt-8">
				{plans.map((plan) => (
					<PricingCard frequency={frequency} key={plan.name} plan={plan} />
				))}
			</div>
		</div>
	);
}

type PricingCardProps = React.ComponentProps<"div"> & {
	plan: Plan;
	frequency?: FREQUENCY;
};

export function PricingCard({
	plan,
	className,
	frequency = "monthly",
	...props
}: PricingCardProps) {
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
					{frequency === "yearly" && (
						<p className="flex items-center gap-1 rounded-full border bg-black px-3 py-1 text-white text-xs font-medium">
							{Math.round(
								((plan.price.monthly * 12 - plan.price.yearly) /
									plan.price.monthly /
									12) *
								100
							)}
							% off
						</p>
					)}
				</div>

				<div className="font-coolvetica text-2xl tracking-wide">{plan.name}</div>
				<p className="font-sans text-muted-foreground text-sm mt-1">{plan.info}</p>
				<h3 className="mt-8 mb-2 flex items-end gap-1">
					<span className="font-coolvetica text-4xl">
						${plan.price[frequency]}
					</span>
					<span className="text-muted-foreground font-medium mb-1">
						{plan.name !== "Free"
							? `/${frequency === "monthly" ? "mo" : "yr"}`
							: ""}
					</span>
				</h3>
			</div>
			<div
				className={cn(
					"space-y-4 px-6 pt-8 pb-10 text-muted-foreground text-sm flex-1",
					plan.highlighted && "bg-transparent"
				)}
			>
				{plan.features.map((feature, index) => (
					<div className="flex items-start gap-3" key={index}>
						<CheckCircleIcon className={cn("h-5 w-5 shrink-0", plan.highlighted ? "text-lime-600" : "text-gray-400")} />
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
}
