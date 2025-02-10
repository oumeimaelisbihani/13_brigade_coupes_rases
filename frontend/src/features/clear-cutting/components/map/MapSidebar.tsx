import { List } from "@/features/clear-cutting/components/List";
import { SidebarMenu } from "@/shared/components/SidebarMenu";

export function MapSidebar() {
	return (
		<div>
			<SidebarMenu />
			<List />
		</div>
	);
}
