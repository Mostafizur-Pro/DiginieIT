/** @type {import('next').NextConfig} */

module.exports = {
    output: "export",
    images: {
        unoptimized: true,
    },
    // images: {
    //   remotePatterns: [
    //     {
    //       protocol: "https",
    //       hostname: "hr.mediusware.xyz",
    //       port: "",
    //       pathname: "/media/**",
    //     },
    //     {
    //       protocol: "https",
    //       hostname: "upload.wikimedia.org",
    //       port: "",
    //       pathname: "/wikipedia/commons/thumb/a/a7/React-icon.svg/**",
    //     },
    //   ],
    // },
};
