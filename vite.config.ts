import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import { extractorSvelte } from '@unocss/core';
import presetUno from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';

export default defineConfig({
	plugins: [
		sveltekit(),
		UnoCSS({
			presets: [presetUno(), presetIcons()],
			theme: {
				colors: {
					primary: '#e5255f'
				}
			},
			extractors: [extractorSvelte],
			rules: [[/^spacing-(\d)$/, ([, d]) => ({ 'letter-spacing': `${d}px` })]]
		})
	]
});
