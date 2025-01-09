import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        transportation: './transportation.html',
        technics: './technics.html',
        contacts: './contacts.html',
        policy: './policy.html',
      },
    },
  },
});