import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.7.0',
  nodeVersion: '18',
  ssgName: 'custom',
  devCommand: 'npm run dev', // Replace with your project's development command
  postInstallCommand: 'npm install', // Optional: install dependencies after Stackbit setup
});

