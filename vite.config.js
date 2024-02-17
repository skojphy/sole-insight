import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { webSocketServer } from './server/webSocket.js';

export default defineConfig({
	server: {
		port: 3001
	},
	preview: {
		port: 3001
	},
	plugins: [sveltekit(), webSocketServer]
});
