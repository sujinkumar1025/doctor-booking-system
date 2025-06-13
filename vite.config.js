import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/doctor-booking-system/', // Make sure this matches your repo name
  plugins: [react()],
});
