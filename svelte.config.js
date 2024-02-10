import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/components/*',
			$data: 'src/data/*',
			$lib: 'src/lib/*',
			$routes: 'src/routes/*',
			$utils: 'src/utils/*',
			$styles: 'src/styles/*'
		}
	}
};

export default config;
