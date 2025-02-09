"use client";

import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	TransitionChild,
} from "@headlessui/react";

import { type ReactNode, useState } from "react";
import { Navbar } from "./Navbar";

interface Props {
	children: ReactNode;
	sideBar?: ReactNode;
}
export function AppLayout({ children, sideBar }: Props) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<>
			<div className="h-screen">
				<Navbar className="h-20" />
				<div className="flex pt-20 h-full ">
					<main className="flex-grow ">{children}</main>
					{sideBar && (
						<div className="hidden right-0 lg:inset-y-0 lg:z-50 lg:flex lg:w-200 lg:flex-col  px-8">
							{sideBar}
						</div>
					)}
				</div>
				<Dialog
					open={sidebarOpen}
					onClose={setSidebarOpen}
					className="relative z-50 lg:hidden"
				>
					<DialogBackdrop
						transition
						className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
					/>

					<div className="fixed inset-0 flex">
						<DialogPanel
							transition
							className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
						>
							<TransitionChild>
								<div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
									<button
										type="button"
										onClick={() => setSidebarOpen(false)}
										className="-m-2.5 p-2.5"
									>
										<span className="sr-only">Close sidebar</span>
									</button>
								</div>
							</TransitionChild>
							{/* Sidebar component, swap this element with another sidebar if you like */}
							<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
								<div className="flex flex-1 flex-col">{sideBar}</div>
							</div>
						</DialogPanel>
					</div>
				</Dialog>
			</div>
		</>
	);
}
