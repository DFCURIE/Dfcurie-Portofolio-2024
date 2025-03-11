import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter()
  },
  
  // Add this configuration to ignore CSS unused selector warnings
  onwarn: (warning, handler) => {
    // Ignore css-unused-selector warnings
    if (warning.code === 'css-unused-selector') return;
    
    // Handle other warnings normally
    handler(warning);
  }
};

export default config;