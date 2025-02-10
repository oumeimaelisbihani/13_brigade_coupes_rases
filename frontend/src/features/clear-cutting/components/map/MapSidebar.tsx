import { SidebarMenu } from "@/core/components/SidebarMenu";
import { List } from "@/features/clear-cutting/components/List";

export function MapSidebar() {
	return (
		<div>
			<SidebarMenu />
			<List />
		</div>
	);
}
