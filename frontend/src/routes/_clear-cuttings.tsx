import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_clear-cuttings")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Outlet />;
}
