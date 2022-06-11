export const isPerferDarkMode = () => {
	if (!window.matchMedia) return;
	return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const setItemToLocalStorage = ({ key, value }: { key: string; value: string }) => {
	return window.localStorage.setItem(key, value);
};

export const getItemFromLocalStorage = (key: string) => {
	return window.localStorage.getItem(key);
};

export const removeItemFromLocalStorage = (key: string) => {
	return window.localStorage.removeItem(key);
};
