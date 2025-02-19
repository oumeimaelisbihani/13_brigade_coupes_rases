import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { selectLoggedUser, userSlice } from "@/features/user/store/user.slice";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/store";
import {
	DropdownMenu,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Link, useNavigate, useRouter } from "@tanstack/react-router";
import clsx from "clsx";

interface Props {
	className?: string;
}
export function Navbar({ className }: Props) {
	const user = useAppSelector(selectLoggedUser);
	const router = useRouter();
	const navigate = useNavigate();
	const handleLogout = () => {
		dispatch(userSlice.actions.logoutUser());
		router.invalidate().finally(() => {
			navigate({ to: "/" });
		});
	};
	const dispatch = useAppDispatch();
	return (
		<nav
			className={clsx(
				className,
				"flex-col h-screen bg-[#204933] shadow items-center z-max w-32",
			)}
		>
			<img
				alt="Canopée"
				src="src/assets/canopee_icon-blanc-simplifiee-rvb.png"
				className="h-auto w-auto aspect-square object-cover pt-6 px-4"
			/>
			<div className="flex grow">
				{/* <Link
					to="/clear-cuttings/map"
					activeProps={{
						className: "border-green-500  text-gray-900",
					}}
					inactiveProps={{
						className:
							"border-transparent  text-gray-500 hover:border-gray-300 hover:text-gray-700",
					}}
					className="inline-flex items-center border-b-2 h-full px-1 pt-1 text-sm font-medium "
				>
					Coupes rases
				</Link> */}
				{!user && (
					<Link
						to="/login"
						activeProps={{
							className: "border-green-500  text-gray-900",
						}}
						inactiveProps={{
							className:
								"border-transparent  text-gray-500 hover:border-gray-300 hover:text-gray-700",
						}}
						className="inline-flex items-center border-b-2 h-full px-1 pt-1 text-sm font-medium "
					>
						Connexion
					</Link>
				)}
			</div>
			{user && (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						{user?.avatarUrl && (
							<Avatar>
								<AvatarImage alt="Avatar" src={user.avatarUrl} />
								<AvatarFallback>{user.login}</AvatarFallback>
							</Avatar>
						)}
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56">
						<DropdownMenuLabel>Mon compte</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem onClick={handleLogout}>
							Déconnexion
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)}
		</nav>
	);
}
