import { Button } from "@/components/ui/button"
import { assignClearCutting, isUserConnected } from "@/mocks/clear-cuttings";

type GeneralInformationsProps = {
	clearCuttingId?: string;
};

export function GeneralInformations({ clearCuttingId }: GeneralInformationsProps) {
    return (
		<>
          {isUserConnected() && <Button v-if={isUserConnected()} className="w-full" onClick={() => assignClearCutting(clearCuttingId)}>S'assigner la coupe rase</Button>}
        </>
    )
}
export default GeneralInformations;