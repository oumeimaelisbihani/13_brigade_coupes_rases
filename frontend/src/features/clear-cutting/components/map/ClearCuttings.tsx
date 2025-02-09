import { useMap } from "react-leaflet";
export function ClearCuttings() {
	const map = useMap();
	console.log(map.getCenter(), map.getBounds());
	return <></>;
}
