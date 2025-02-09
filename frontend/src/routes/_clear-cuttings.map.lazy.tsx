import { AppLayout } from "@/core/components/AppLayout";
import { SidebarMenu } from "@/core/components/SidebarMenu";
import * as InteractiveMap from "@/features/clear-cutting/components/map/InteractiveMap";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_clear-cuttings/map")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<AppLayout sideBar={<SidebarMenu />}>
			<InteractiveMap.InteractiveMap />
		</AppLayout>
	);
}
