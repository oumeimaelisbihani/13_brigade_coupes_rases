import { AppLayout } from "@/core/components/AppLayout";
import { InteractiveMap } from "@/features/clear-cutting/components/map/InteractiveMap";
import { MapSidebar } from "@/features/clear-cutting/components/map/MapSidebar";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_clear-cuttings/map")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<AppLayout sideBar={<MapSidebar />}>
			<InteractiveMap />
		</AppLayout>
	);
}
