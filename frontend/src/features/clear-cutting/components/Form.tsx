import { AccordionFullItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import GeneralInformations from "@/features/clear-cutting/components/details/General";
import { useMapInstance } from "@/features/clear-cutting/components/map/Map.context";
import { useGetClearCuttingQuery } from "@/features/clear-cutting/store/api";
import { skipToken } from "@reduxjs/toolkit/query";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { Accordion } from "radix-ui";
import { useEffect } from "react";

type AsideFormProps = {
	clearCuttingId?: string;
};

export function AsideForm({ clearCuttingId }: AsideFormProps) {
	const { data } = useGetClearCuttingQuery(clearCuttingId ?? skipToken);
	const { map } = useMapInstance();
	const sections = [
		{
		   title: "Informations générales",
		   component: <GeneralInformations clearCuttingId={clearCuttingId} />
		},
		{
		   title: "Terrain",
		},
		{
		   title: "Zonages écologiques",
		},
		{
		   title: "Acteurs engagés",
		},
		{
		   title: "Réglementations",
		},
		{
		   title: "Autres informations",
		},
		{
		   title: 	"Sratégie juridique",
		}
   ];
	useEffect(() => {
		if (map && data) {
			map.flyTo(data?.geoCoordinates[0], 10, { duration: 1 });
		}
	}, [map, data]);

	return (
		<>
			<div className="flex m-4 text-3xl font-bold align-baseline">
				<Link to="/map/list">
					<X size={40} />
				</Link>
				<h1 className="ml-6">{`${data?.address.city.toLocaleUpperCase()} - ${data?.cutYear}`}</h1>
			</div>
			<div className="overflow-scroll p-2 flex flex-col">
				<Accordion.Root type="multiple">
					{sections.map((section) => (
						<AccordionFullItem key={section.title} title={section.title} content={section.component} />
					))}
				</Accordion.Root>

				<Button className="mx-auto mt-12 cursor-pointer" size="lg">
					Valider
				</Button>
			</div>
		</>
	);
}
