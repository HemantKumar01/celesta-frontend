// @Copyright https://github.com/HemantKumar01

/**
 * Wraps a string around each word
 *
 * @param {string} str The string to transform
 * @param {string} tmpl Template that gets interpolated
 * @returns {string} The given input splitted by words
 */
function wrapWords(str, tmpl) {
	return str.replace(/\w+[,.!?;:"'()\&\[\]{}-]*\w*\s*/g, tmpl || '<span>$&</span> ');
}

/**
 * Adds span element with class text-wipe-in-parts-word around each word with inside elements with class text-wipe-in-parts
 * @param {float} delayDuration the delay duration between appearing of adjacent words
 */
function textWipeInParts(delayDuration = 0.2) {
	console.log('Animation Injected');
	const elements = document.querySelectorAll('.text-wipe-in-parts');
	console.log('animated text elements', elements);
	for (var element of elements) {
		element.classList.toggle('.text-wipe-in-parts');
		var tmpText = wrapWords(
			element.innerHTML,
			"<span class='text-wipe-in-parts-word' style='transition-delay:$TRANSITION-DELAY-TEMPLATE;'>$&</span> "
		);
		var transitionDelayTime = 0;
		while (tmpText.includes('$TRANSITION-DELAY-TEMPLATE')) {
			let final_delay_duration = element.getAttribute('data-delay') ?? delayDuration;
			tmpText = tmpText.replace(
				'$TRANSITION-DELAY-TEMPLATE',
				(transitionDelayTime * final_delay_duration).toFixed(4) + 's'
			);
			transitionDelayTime++;
		}
		element.innerHTML = tmpText;
	}

	const words = document.querySelectorAll('.text-wipe-in-parts-word');
	for (var word of words) {
		observer.observe(word);
	}
}

let options = {
	rootMargin: '0px',
	threshold: 1,
};

let intersectionObserverCallback = (entries, observer) => {
	entries.forEach((entry) => {
		// Each entry describes an intersection change for one observed
		// target element:
		//   entry.boundingClientRect
		//   entry.intersectionRatio
		//   entry.intersectionRect
		//   entry.isIntersecting
		//   entry.rootBounds
		//   entry.target
		//   entry.time
		if (
			entry.target.classList.contains('text-wipe-in-parts-word') &&
			!entry.target.classList.contains('text-wipe-in-parts-word-show')
		) {
			entry.target.classList.toggle('text-wipe-in-parts-word-show', entry.isIntersecting);
		}
	});
};
let observer = new IntersectionObserver(intersectionObserverCallback, options);
