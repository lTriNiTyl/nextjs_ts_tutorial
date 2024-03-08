/** @type {import('next').NextConfig} */
const nextConfig = {
  // 외부에서 이미지를 가져올 수 있도록 설정. [
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      }
    ]
  }
  // ]
};

export default nextConfig;
