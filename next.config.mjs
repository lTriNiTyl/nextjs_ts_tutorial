/** @type {import('next').NextConfig} */
const nextConfig = {
  // 웹팩을 통해 svg 파일을 리액트 컴포넌트로 변환하는 설정이다
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });

    return config;
  },
  // 외부에서 이미지를 가져올 수 있도록 설정. [
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      }
    ]
  }
  // ]
};

export default nextConfig;
