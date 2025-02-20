import { Toaster } from "@/components/ui/toaster";
import { InteractiveMap } from "@/features/clear-cutting/components/map/InteractiveMap";
import { useReloadPwa } from "@/features/offline/hooks/useReloadPwa";
import { AppLayout } from "@/shared/components/AppLayout";
import { Navigate, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

interface RouterContext {
	auth?: AuthContext;
}
export const Route = createRootRouteWithContext<RouterContext>()({
	component: RootComponent,
	notFoundComponent: () => <Navigate to="/" />
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
