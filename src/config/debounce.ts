export function debounce(func:any, wait:number, immediate:boolean = false) {
	var timeout;
	return function() {
    debugger
    //@ts-ignore
		var context: any = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};