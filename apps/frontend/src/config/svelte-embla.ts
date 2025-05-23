import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from 'embla-carousel';

export function useEmbla(
	node: HTMLElement,
	options: EmblaOptionsType = {}
): { destroy: () => void; embla: EmblaCarouselType } {
	const embla = EmblaCarousel(node, options);
	return {
		destroy() {
			embla.destroy();
		},
		embla
	};
}
