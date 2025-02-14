export const range = <T>(n: number, generator: () => T) => {
	return Array.from({ length: 500 }, generator);
};
