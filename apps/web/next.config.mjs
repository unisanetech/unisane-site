import path from 'node:path';
import process from 'node:process';

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@workspace/ui'],
  turbopack: {
    root: path.join(process.cwd(), '..', '..', '..'),
  },
};

export default nextConfig;
