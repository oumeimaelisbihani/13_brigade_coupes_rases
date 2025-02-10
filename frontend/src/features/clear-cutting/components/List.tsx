import { Filters } from "@/features/clear-cutting/components/shared/Filters";
import { useGetClearCuttingsQuery } from "@/features/clear-cutting/store/api";

export function List() {
	const { data } = useGetClearCuttingsQuery();
	return (
		<div>
			<Filters />
			<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{data?.clearCuttings.map((clearCutting) => (
					<li
						key={clearCutting.id}
						className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
					>
						<div className="flex flex-1 flex-col p-8">
							<h3 className="mt-6 text-sm font-medium text-gray-900">
								{clearCutting.name}
							</h3>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
