import { Toaster } from "@/components/ui/toaster";
import { useReloadPwa } from "@/features/offline/hooks/useReloadPwa";
import { AuthContext } from "@/features/user/components/Auth.context";
import { AppLayout } from "@/shared/components/AppLayout";
import { createRootRouteWithContext, Navigate, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

interface RouterContext {
	auth?: AuthContext;
}
export const Route = createRootRouteWithContext<RouterContext>()({
	component: RootComponent,
	notFoundComponent: () => <Navigate to="/" />,
});

function RootComponent() {
	useReloadPwa();
	return (
		<>
			<AppLayout>
				<Outlet />
			</AppLayout>
			<Toaster />
			<TanStackRouterDevtools />
		</>
	);
}
