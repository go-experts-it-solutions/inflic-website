import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                privacyPolicy: resolve(__dirname, 'privacy-policy.html'),
                termsAndConditions: resolve(__dirname, 'terms-and-conditions.html'),
                contactUs: resolve(__dirname, 'contact-us.html'),
                deleteAccount: resolve(__dirname, 'delete-account.html'),
            },
        },
    },
});
