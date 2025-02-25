import { Button } from "@/components/ui/button"
import { assignClearCutting, isUserConnected, isClearCuttingAssigned } from "@/mocks/clear-cuttings";

type GeneralInformationsProps = {
	clearCuttingId?: string;
};

export function GeneralInformations({ clearCuttingId }: GeneralInformationsProps) {
    return (
		<>
          {isUserConnected() && <Button v-if={isUserConnected()} className="sm" disabled={isClearCuttingAssigned(clearCuttingId)} onClick={() => assignClearCutting(clearCuttingId)}>S'assigner la coupe rase</Button>}
        </>
    )
}
export default GeneralInformations;