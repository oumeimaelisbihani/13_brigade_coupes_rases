import { Button } from "@/components/ui/button";
import { Accordion } from "radix-ui";
import { Link, useNavigate } from "@tanstack/react-router";
import { AccordionContent, AccordionTrigger, AccordionItem } from "@/components/ui/accordion";
import { X } from "lucide-react"

type AsideFormProps = {
	clearCuttingId?: string;
};

export function AsideForm({ clearCuttingId }: AsideFormProps) {
	// const { map } = useMapInstance();
	const navigate = useNavigate();

	// useEffect(() => {
	//     if (map) {
	//         map.flyTo(clearCuttingPreview.center, 10, { duration: 1});
	//     }
	// }, [map])

	return (
		<>
			<Link 
			to="/map/list">
				<X />
			</Link>
			<Accordion.Root
				className="w-full"
				type="multiple"
			>
				<AccordionItem value="item-1">
					<AccordionTrigger>Is it accessible?</AccordionTrigger>
					<AccordionContent>
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-2">
					<AccordionTrigger>Is it unstyled?</AccordionTrigger>
					<AccordionContent>
						Yes. It's unstyled by default, giving you freedom over the look and
						feel.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-3">
					<AccordionTrigger>Can it be animated?</AccordionTrigger>
					<AccordionContent>
						Yes! You can animate the Accordion with CSS or JavaScript.
					</AccordionContent>
				</AccordionItem>
			</Accordion.Root>

		</>
	);
}
