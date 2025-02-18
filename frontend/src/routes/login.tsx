import { Login } from "@/features/user/components/Login";
import { selectLoggedUser } from "@/features/user/store/user.slice";
import { AppLayout } from "@/shared/components/AppLayout";
import { useAppSelector } from "@/shared/hooks/store";
import { sleep } from "@/shared/thread";
import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import { z } from "zod";

export const Route = createFileRoute("/login")({
	validateSearch: z.object({
		redirect: z.string().optional().catch(""),
	}),
	beforeLoad: ({ context, search }) => {
		if (context.auth.isAuthenticated) {
			throw redirect({ to: search.redirect || "" });
		}
	},
	component: RouteComponent,
});
function RouteComponent() {
	const router = useRouter();
	const search = Route.useSearch();
	const navigate = Route.useNavigate();
	const loggedUser = useAppSelector(selectLoggedUser);

	useEffect(() => {
		const redirect = async () => {
			if (loggedUser === undefined) {
				return;
			}
			await router.invalidate();
			await sleep(1);
			await navigate({ to: search.redirect || "" });
		};
		redirect();
	}, [loggedUser, router, search.redirect, navigate]);
	return (
		<AppLayout>
			<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
				<div className="w-full max-w-sm">
					<Login />
				</div>
			</div>
		</AppLayout>
	);
}
