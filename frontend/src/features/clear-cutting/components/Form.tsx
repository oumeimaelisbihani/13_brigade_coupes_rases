import { AccordionFullItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
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

const titleSection = [
	"Informations générales",
	"Terrain",
	"Zonages écologiques",
	"Acteurs engagés",
	"Réglementations",
	"Autres informations",
	"Sratégie juridique",
];

export function AsideForm({ clearCuttingId }: AsideFormProps) {
	const { data } = useGetClearCuttingQuery(clearCuttingId ?? skipToken);
	const { map } = useMapInstance();

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
					{titleSection.map((sectionName) => (
						<AccordionFullItem key={sectionName} title={sectionName} />
					))}
				</Accordion.Root>

				<Button className="mx-auto mt-12 cursor-pointer" size="lg">
					Valider
				</Button>
			</div>
		</>
	);
}
