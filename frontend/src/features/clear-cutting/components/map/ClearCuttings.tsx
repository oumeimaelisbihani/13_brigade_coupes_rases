import { setGeoBounds } from "@/features/clear-cutting/store/filters.slice";
import { useAppDispatch } from "@/shared/hooks/store";
import { useCallback, useEffect } from "react";
import { useMap, useMapEvents } from "react-leaflet";
export function ClearCuttings() {
	const map = useMap();
	const dispatch = useAppDispatch();
	const dispatchGeoBounds = useCallback(() => {
		const bounds = map.getBounds();
		const northEast = bounds.getNorthEast();
		const southWest = bounds.getSouthWest();
		dispatch(
			setGeoBounds([
				[northEast.lat, northEast.lng],
				[southWest.lat, southWest.lng],
			]),
		);
	}, [map, dispatch]);

	useMapEvents({
		zoomend: dispatchGeoBounds,
		moveend: dispatchGeoBounds,
		resize: dispatchGeoBounds,
	});
	useEffect(() => dispatchGeoBounds());
	return <></>;
}
