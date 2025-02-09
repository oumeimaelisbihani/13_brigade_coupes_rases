import { Disclosure } from "@headlessui/react";
import clsx from "clsx";

interface Props {
	className?: string;
}
export function Navbar({ className }: Props) {
	return (
		<Disclosure
			as="nav"
			className={clsx(className, "fixed top-0 bg-white shadow w-full z-max")}
		>
			<div className="max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="flex flex-1 items-center justify-start sm:items-stretch ">
					<div className="flex shrink-0 items-center">
						<img
							alt="Canopée"
							src="https://www.canopee.ong/wp-content/uploads/2023/08/logo-canopee.png"
							className="h-8 w-auto"
						/>
					</div>
				</div>
			</div>
		</Disclosure>
	);
}
