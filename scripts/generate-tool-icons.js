import fs from "fs";
import path from "path";

const targetDir = path.resolve(process.cwd(), "public/assets/tools");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const icons = {
  // 1. Google Ads (Official clean geometry, no duplicate or merged clutter)
  "google-ads.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <path fill="#FBBC04" d="M37.8 14.6c-7.9-13.7-25.4-18.4-39.1-10.5-13.7 7.9-18.4 25.4-10.5 39.1L32 118.8c7.9 13.7 25.4 18.4 39.1 10.5 13.7-7.9 18.4-25.4 10.5-39.1L37.8 14.6z" transform="translate(26, 8) scale(0.48)"/>
  <path fill="#4285F4" d="M86.4 75.6L42.6-.2C34.7-13.9 17.2-18.6 3.5-10.7-10.2-2.8-14.9 14.7-7 28.4l43.8 75.8c7.9 13.7 25.4 18.4 39.1 10.5 13.7-7.9 18.4-25.4 10.5-39.1z" transform="translate(36, 12) scale(0.48)"/>
  <circle cx="27" cy="72" r="14.5" fill="#34A853"/>
</svg>`,

  // 2. Meta Ads / Meta (Official infinity symbol)
  "meta-ads.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="metaOfficial" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0064E0"/>
      <stop offset="50%" stop-color="#0082FB"/>
      <stop offset="100%" stop-color="#00C8FF"/>
    </linearGradient>
  </defs>
  <path fill="url(#metaOfficial)" d="M50 56.8c-4.9-7.5-9.6-13.6-15.1-18.4-5.3-4.9-11.4-7.4-18-7.4C7.6 31 0 38.6 0 48s7.6 17 16.9 17c6.7 0 12.7-2.6 17.9-7 5.5-4.7 10.3-10.9 15.2-18.6 4.9 7.7 9.7 13.9 15.2 18.6 5.2 4.4 11.2 7 17.9 7 9.3 0 16.9-7.6 16.9-17s-7.6-17-16.9-17c-6.6 0-12.7 2.5-18 7-5.5 4.8-10.2 10.9-15.1 18.4zm-33.1-2.4c-3.3 0-6-2.7-6-6s2.7-6 6-6c3.2 0 6.2 1.8 9.5 5.6-3.3 3.8-6.3 6.4-9.5 6.4zm66.2 0c-3.2 0-6.2-2.6-9.5-6.4 3.3-3.8 6.3-5.6 9.5-5.6 3.3 0 6 2.7 6 6s-2.7 6-6 6z" transform="translate(10, 8) scale(0.8)"/>
</svg>`,

  // 3. LinkedIn Ads (Official LinkedIn rounded badge)
  "linkedin-ads.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="20" fill="#0A66C2"/>
  <path fill="#FFFFFF" d="M26 38H16v38h10V38zm-5-17.5c-3.6 0-6.5 2.7-6.5 6.1 0 3.3 2.9 6.1 6.5 6.1s6.5-2.8 6.5-6.1c0-3.4-2.9-6.1-6.5-6.1zM84 54.5c0-11.2-6-16.5-14-16.5-6.5 0-9.4 3.6-11 6.1V38H49v38h10V56.8c0-5.1 1-10 7.3-10 6.2 0 6.3 5.8 6.3 10.3V76H84V54.5z"/>
</svg>`,

  // 4. Triple Whale (Official Whale Fin & Gradient)
  "triple-whale.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="twOfficial" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00D2FF"/>
      <stop offset="100%" stop-color="#0066FF"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="#090E17"/>
  <path fill="url(#twOfficial)" d="M78 48c-3.8-10.5-13.8-18-25.5-18-17.2 0-31 11.5-36 25-2 5.5-.5 11 4 14.5 4.5 3.5 11 3.5 16.5 1.5 5.5-2 11.5-4 17.5-4 7.5 0 13 3 19 3 5 0 9-3 10.5-7l4-9.5c.5-1.2 0-2.5-.8-2.8l-4-.7c.8-1 1-1.6 1-2.5z"/>
  <circle cx="36" cy="48" r="3.5" fill="#FFFFFF"/>
  <path fill="url(#twOfficial)" d="M47 18c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2zm8 4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2zm-16 0c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2z"/>
</svg>`,

  // 5. Figma (Official 5-piece color palette)
  "figma.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <g transform="translate(14, 8) scale(0.72)">
    <path fill="#F24E1E" d="M25 0h25v25H25a12.5 12.5 0 0 1 0-25z"/>
    <path fill="#FF7262" d="M50 0h25a12.5 12.5 0 0 1 0 25H50V0z"/>
    <path fill="#A259FF" d="M25 25h25v25H25a12.5 12.5 0 0 1 0-25z"/>
    <path fill="#1ABCFE" d="M50 25h25a12.5 12.5 0 1 1-25 12.5V25z"/>
    <path fill="#0ACF83" d="M25 50h25v12.5a12.5 12.5 0 1 1-25 0A12.5 12.5 0 0 1 25 50z"/>
  </g>
</svg>`,

  // 6. ProtoPie (Official ProtoPie monogram)
  "protopie.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#FF2E63"/>
  <circle cx="50" cy="50" r="28" fill="#FFFFFF" fill-opacity="0.2"/>
  <path fill="#FFFFFF" d="M50 24c-14.4 0-26 11.6-26 26s11.6 26 26 26 26-11.6 26-26-11.6-26-26-26zm0 10c8.8 0 16 7.2 16 16H50V34zm-16 16c0-8.8 7.2-16 16-16v16H34zm0 6h31.6c-2.4 9.6-11 16-21.6 16-11.8 0-21.4-9.3-21.9-21 .1.2.2.4.3.6l11.6 4.4z"/>
</svg>`,

  // 7. Framer (Official Framer geometric icon)
  "framer.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#000000"/>
  <path fill="#0055FF" d="M26 16h48L50 40H26zM26 40h24l24 24H50l-24 24V40z"/>
</svg>`,

  // 8. Lottie (Official LottieFiles icon)
  "lottie.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#00DDB3"/>
  <path fill="#0C1D24" d="M50 20L22 46l26 30 30-14z" opacity="0.85"/>
  <path fill="#FFFFFF" d="M50 20L30 58l30 16 16-30z"/>
  <path fill="#00DDB3" d="M34 58l16 16 12-6z"/>
</svg>`,

  // 9. Webflow (Official Webflow W)
  "webflow.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#146EF5"/>
  <path fill="#FFFFFF" d="M80 32c-4 0-7.7 2.1-9.7 5.5-.3-.2-.6-.3-.9-.5l-7.3-10.8c-.7-.9-1.8-1.5-3-1.5H35c-2 0-3.6 1.6-3.6 3.6v18.5c0 .3.1.6.3.9l8.6 12.8c.7 1 1.8 1.6 3 1.6h17.5c2 0 3.6-1.6 3.6-3.6v-5.5c2.3 2.2 5.5 3.6 9.1 3.6 7 0 12.7-5.7 12.7-12.7S87 32 80 32zm-37 9.2V29h15.4l7.1 10.6c-1.5 1.2-2.8 2.5-4 4.1L54 33.4c-.6-1-1.7-1.6-2.9-1.6H43v9.4zm12.5 18.5h-8.8l-6.3-9.4V42h4.7l8.8 13.1v4.6zm24.5-7.3c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
</svg>`,

  // 10. Spline 3D (Official Spline sphere + orbit)
  "spline.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <radialGradient id="splineOfficial" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#FF5E97"/>
      <stop offset="40%" stop-color="#9C44F7"/>
      <stop offset="75%" stop-color="#34C8E8"/>
      <stop offset="100%" stop-color="#080B1E"/>
    </radialGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="#0D1117"/>
  <circle cx="50" cy="50" r="28" fill="url(#splineOfficial)"/>
  <ellipse cx="50" cy="50" rx="36" ry="14" fill="none" stroke="#34C8E8" stroke-width="3" transform="rotate(-30 50 50)"/>
</svg>`,

  // 11. Adobe Illustrator (Official Adobe CC Ai emblem)
  "illustrator.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#330000"/>
  <rect x="2" y="2" width="96" height="96" rx="20" fill="none" stroke="#FF9A00" stroke-width="4"/>
  <path fill="#FF9A00" d="M43.5 66.5h-6.2l-3.2-9.6H21.5l-3.2 9.6H12l13.5-38h8.5l9.5 38zm-11.2-16.2L28 36.8l-4.4 13.5h8.7zM53.5 35.8c-2.4 0-4.2-1.8-4.2-4.2s1.8-4.2 4.2-4.2 4.2 1.8 4.2 4.2-1.8 4.2-4.2 4.2zm3.1 30.7h-6.2V41.5h6.2v25z"/>
</svg>`,

  // 12. Adobe Photoshop (Official Adobe CC Ps emblem)
  "photoshop.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#001E36"/>
  <rect x="2" y="2" width="96" height="96" rx="20" fill="none" stroke="#31A8FF" stroke-width="4"/>
  <path fill="#31A8FF" d="M19 28.5h16c8.5 0 14 5 14 13s-5.5 13-14 13H26.5v12H19v-38zm7.5 19.5H34c4.5 0 7.5-2.5 7.5-6.5s-3-6.5-7.5-6.5h-7.5V48zM57 59c3 2 7 3.5 10.5 3.5 4.5 0 6.5-2 6.5-4.5 0-3-3-4-7.5-5.5-6.5-2-10-5.5-10-10.5 0-6.5 5.5-11 13.5-11 4.5 0 8 1.5 10.5 3l-2.5 5.5c-2.5-1.5-5.5-2.5-8-2.5-4.5 0-6.5 2-6.5 4.5 0 2.5 3 3.5 7.5 5 7 2.5 10.5 5.5 10.5 11 0 7-5.5 11.5-14.5 11.5-4.5 0-9.5-1.5-12.5-3.5L57 59z"/>
</svg>`,

  // 13. Adobe InDesign (Official Adobe CC Id emblem)
  "indesign.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#49021F"/>
  <rect x="2" y="2" width="96" height="96" rx="20" fill="none" stroke="#FF3366" stroke-width="4"/>
  <path fill="#FF3366" d="M26 28.5h7.5v38H26v-38zm25.5 16.5h6.5v4.5c2.5-3.5 6.5-5.5 11-5.5 8 0 13.5 6 13.5 14.5s-5.5 14.5-13.5 14.5c-4.5 0-8.5-2-11-5.5v5.5H51.5v-28zm7 13.5c0 5 3.5 8.5 8 8.5s8-3.5 8-8.5-3.5-8.5-8-8.5-8 3.5-8 8.5z"/>
</svg>`,

  // 14. Adobe Premiere Pro (Official Adobe CC Pr emblem)
  "premiere.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#2D004B"/>
  <rect x="2" y="2" width="96" height="96" rx="20" fill="none" stroke="#EA77FF" stroke-width="4"/>
  <path fill="#EA77FF" d="M19 28.5h16c8.5 0 14 5 14 13s-5.5 13-14 13H26.5v12H19v-38zm7.5 19.5H34c4.5 0 7.5-2.5 7.5-6.5s-3-6.5-7.5-6.5h-7.5V48zm30-6.5h7v5.5c2-4 5.5-6.5 10.5-6.5 1.5 0 2.5.2 3.5.5v7.5c-1.5-.5-2.5-.5-4-.5-4.5 0-8 3-9.5 7v15h-7.5v-28.5z"/>
</svg>`,

  // 15. Apple Xcode (Official Xcode Blueprint Hammer)
  "xcode.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#147EFB"/>
  <path fill="none" stroke="#FFFFFF" stroke-opacity="0.35" stroke-width="1.5" d="M20 20h60M20 35h60M20 50h60M20 65h60M20 80h60M20 20v60M35 20v60M50 20v60M65 20v60M80 20v60"/>
  <g transform="rotate(45 50 50) translate(0, -6)">
    <rect x="44" y="22" width="12" height="52" rx="4" fill="#E2E8F0"/>
    <path fill="#94A3B8" d="M32 18h36v12H32z"/>
    <rect x="42" y="14" width="16" height="8" rx="2" fill="#475569"/>
    <rect x="47" y="30" width="6" height="38" fill="#CBD5E1"/>
  </g>
</svg>`,

  // 16. WordPress (Official exact W mark)
  "wordpress.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <circle cx="50" cy="50" r="48" fill="#21759B"/>
  <circle cx="50" cy="50" r="42" fill="none" stroke="#FFFFFF" stroke-width="3"/>
  <path fill="#FFFFFF" d="M18 50c0 14.1 9.4 26 22.4 29.8L22.5 34.2C19.7 38.8 18 44.2 18 50zm49.8-2.3c0-4.7-1.7-8-3.2-10.6-2-3.3-3.9-6.1-3.9-9.4 0-3.7 2.8-7.1 6.8-7.1.2 0 .4 0 .5.1C61.6 17 55 15 50 15c-13.1 0-24.5 6.8-30.8 17.1 1.1 0 2.2.1 3.3.1 5.4 0 13.8-.7 13.8-.7 2.8-.2 3.1 3.9.3 4.2 0 0-2.8.3-5.9.5l18.8 56 11.3-33.9-8.1-22.1c-2.8-.2-5.4-.5-5.4-.5-2.8-.2-2.5-4.2.3-4.2 0 0 8.5.7 13.6.7 1 0 2.1 0 3.3-.1-.2 1.3-.4 2.7-.4 4.2 0 4 1.5 7.8 3.5 11.1 2.3 3.9 4.8 8.4 4.8 13.9 0 3.7-1.4 8-3.4 12.6l-10.9 31.7C73.8 68.3 80.5 59.8 80.5 50c0-6-1.5-11.7-4.1-16.7l-8.6 24.4z"/>
</svg>`,

  // 17. Advanced Custom Fields (Official ACF isometric block logo)
  "acf.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#0C1D24"/>
  <path fill="#00E5A3" d="M50 16L18 34v32l32 18 32-18V34L50 16zm0 8.8l23.5 13.2-9.4 5.3L40.6 30 50 24.8zm-24 16.5l22.5 12.6v25.2L26 66.5V41.3zm26.5 37.8V53.9l22.5-12.6v25.2L52.5 79.1z"/>
</svg>`,

  // 18. PHP (Official PHP blue elephant emblem)
  "php.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#202336"/>
  <ellipse cx="50" cy="50" rx="42" ry="26" fill="#777BB4"/>
  <ellipse cx="50" cy="50" rx="39" ry="23" fill="#8892BF"/>
  <path fill="#232531" d="M34.5 40h-8l-5 20h5l1.8-7.2h3.2c5.5 0 9-3 10-7.8 1-4.8-1.5-5-7-5zm-3.2 7.8h-2.5l1.2-4.8h2.5c2 0 3.5.2 3 2.5-.5 2.2-2.2 2.3-4.2 2.3zM54.5 40h-5l-5 20h5l1.8-7.2h4.5l-1.8 7.2h5L64 40h-5l-1.5 6h-4.5l1.5-6zm25 0h-8l-5 20h5l1.8-7.2h3.2c5.5 0 9-3 10-7.8 1-4.8-1.5-5-7-5zm-3.2 7.8h-2.5l1.2-4.8h2.5c2 0 3.5.2 3 2.5-.5 2.2-2.2 2.3-4.2 2.3z"/>
</svg>`,

  // 19. MySQL (Official MySQL Dolphin logo)
  "mysql.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#00618A"/>
  <path fill="#E48E00" d="M68 28c-7-5-16-7-25-5-12 3-21 13-23 25-2 11 3 22 13 28 2 1 4 2 6 2l-3-7c-5-4-8-10-7-17 1-8 7-15 15-17 7-2 15 0 20 5l4-7z"/>
  <path fill="#FFFFFF" d="M46 36c4-2 9-2 13 0 6 3 10 9 10 16 0 4-1 8-4 11l6 5c5-5 7-12 7-19 0-10-6-19-15-23-6-3-13-3-19 0l2 7z"/>
  <circle cx="64" cy="46" r="3" fill="#00618A"/>
</svg>`,

  // 20. Shopify (Official Shopify bag with S monogram)
  "shopify.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#95BF47"/>
  <path fill="#5E8E3E" d="M63 22l-10-3.2c-1-.3-2 .3-2.3 1.2L41 57l17 3.5 12-30.5c.3-1-.2-2-.9-2.2L63 22z"/>
  <path fill="#FFFFFF" d="M60.5 21.2l-8.5-2.6c-.8-.2-1.7.3-2 1.1L30 76.5c-.3 1 .3 2 1.2 2.2l20 5.4c.8.2 1.7-.3 2-1.1L70.5 26c.3-1-.3-2-1.2-2.2L60.5 21.2zm-14 36c-4.2-1.1-6-4.5-5.3-7.2.7-2.7 3.6-4.3 7.8-3.2 4.2 1.1 6 4.5 5.3 7.2-.7 2.7-3.6 4.3-7.8 3.2z"/>
  <path fill="#004C3F" d="M49.5 48.5c-3-.8-4.5-2.8-4-4.7.5-1.9 2.7-2.9 5.7-2.1 3 .8 4.5 2.8 4 4.7-.5 1.9-2.7 2.9-5.7 2.1z"/>
</svg>`,

  // 21. GraphQL (Official Hexagram mark)
  "graphql.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#171E26"/>
  <g stroke="#E10098" stroke-width="3.5" fill="none">
    <polygon points="50,18 78,34 78,66 50,82 22,66 22,34"/>
    <polygon points="50,26 71,62 29,62"/>
    <polygon points="50,74 29,38 71,38"/>
  </g>
  <g fill="#E10098">
    <circle cx="50" cy="18" r="5.5"/><circle cx="78" cy="34" r="5.5"/><circle cx="78" cy="66" r="5.5"/>
    <circle cx="50" cy="82" r="5.5"/><circle cx="22" cy="66" r="5.5"/><circle cx="22" cy="34" r="5.5"/>
  </g>
</svg>`,

  // 22. Klaviyo (Official Klaviyo mark)
  "klaviyo.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#1A1A1A"/>
  <path fill="#FF6950" d="M22 30h16v40H22zM44 30h22l-12 20 12 20H44l12-20z"/>
  <circle cx="76" cy="50" r="8" fill="#FF6950"/>
</svg>`,

  // 23. Finsweet (Official Finsweet F + Dot logo)
  "finsweet.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#181818"/>
  <path fill="#F4B728" d="M26 22h48v13H42v12h26v13H42v18H26V22z"/>
  <circle cx="75" cy="71" r="7.5" fill="#F4B728"/>
</svg>`,

  // 24. GSAP (Official GreenSock logo)
  "gsap.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#0E1712"/>
  <circle cx="50" cy="50" r="32" fill="#0AE448"/>
  <path fill="#0E1712" d="M38 34h8v32h-8zM54 34h8v32h-8z"/>
  <path fill="#0E1712" d="M38 46h24v8H38z"/>
  <polygon points="46,24 54,24 50,16" fill="#0AE448"/>
</svg>`,

  // 25. Zapier (Official Zapier Asterisk)
  "zapier.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#FF4F00"/>
  <g fill="#FFFFFF" transform="translate(50, 50)">
    <rect x="-6" y="-32" width="12" height="64" rx="6"/>
    <rect x="-6" y="-32" width="12" height="64" rx="6" transform="rotate(72)"/>
    <rect x="-6" y="-32" width="12" height="64" rx="6" transform="rotate(144)"/>
    <rect x="-6" y="-32" width="12" height="64" rx="6" transform="rotate(216)"/>
    <rect x="-6" y="-32" width="12" height="64" rx="6" transform="rotate(288)"/>
  </g>
</svg>`,

  // 26. Google Analytics 4 (Official GA4 3-bar logo)
  "ga4.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#202124"/>
  <circle cx="32" cy="70" r="10" fill="#F9AB00"/>
  <path fill="#E37400" d="M46 44c0-5.5 4.5-10 10-10s10 4.5 10 10v36H46V44z"/>
  <path fill="#F9AB00" d="M68 24c0-5.5 4.5-10 10-10s10 4.5 10 10v56H68V24z"/>
</svg>`,

  // 27. HubSpot (Official HubSpot Sprocket)
  "hubspot.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#FF7A59"/>
  <g fill="#FFFFFF">
    <circle cx="50" cy="50" r="13"/>
    <circle cx="50" cy="22" r="6"/>
    <circle cx="76" cy="38" r="6"/>
    <circle cx="76" cy="65" r="6"/>
    <rect x="47" y="24" width="6" height="15"/>
    <line x1="58" y1="44" x2="72" y2="38" stroke="#FFFFFF" stroke-width="6"/>
    <line x1="58" y1="56" x2="72" y2="65" stroke="#FFFFFF" stroke-width="6"/>
    <line x1="24" y1="50" x2="38" y2="50" stroke="#FFFFFF" stroke-width="6"/>
  </g>
</svg>`,

  // 28. Segment (Official Segment 4-connected nodes)
  "segment.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#52BD94"/>
  <g fill="#FFFFFF">
    <circle cx="34" cy="34" r="8"/>
    <circle cx="66" cy="34" r="8"/>
    <circle cx="66" cy="66" r="8"/>
    <circle cx="34" cy="66" r="8"/>
    <line x1="34" y1="34" x2="66" y2="34" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
    <line x1="66" y1="34" x2="34" y2="66" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
    <line x1="34" y1="66" x2="66" y2="66" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
  </g>
</svg>`,

  // 29. Ahrefs (Official Ahrefs logo)
  "ahrefs.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#0058FF"/>
  <path fill="#FF6000" d="M66 60l14-14-14-14v8H50v12h16v8z"/>
  <path fill="#FFFFFF" d="M28 66L44 26h8l16 40h-8l-4.5-12H39.5L35 66h-7zm14.5-18h11L48 34l-5.5 14z"/>
</svg>`,

  // 30. Semrush (Official Semrush flame spark)
  "semrush.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#FF642D"/>
  <path fill="#FFFFFF" d="M72 38c-4-8-12-14-22-14-14 0-26 12-26 26s12 26 26 26c11 0 20-7 24-17l-10-3c-3 6-8 10-14 10-9 0-16-7-16-16s7-16 16-16c6 0 11 3 14 8l8-4z"/>
  <polygon points="56,36 78,42 66,56" fill="#1C1844"/>
</svg>`,

  // 31. Google Search Console (Official GSC search chart)
  "gsc.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#202124"/>
  <circle cx="44" cy="44" r="20" fill="none" stroke="#4285F4" stroke-width="6"/>
  <line x1="58" y1="58" x2="78" y2="78" stroke="#EA4335" stroke-width="7" stroke-linecap="round"/>
  <path d="M34 50l6-8 8 6 10-12" fill="none" stroke="#34A853" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  // 32. Screaming Frog (Official Screaming Frog SEO Spider)
  "screaming-frog.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#1E281E"/>
  <ellipse cx="50" cy="56" rx="28" ry="22" fill="#7EC138"/>
  <circle cx="36" cy="36" r="10" fill="#7EC138"/>
  <circle cx="64" cy="36" r="10" fill="#7EC138"/>
  <circle cx="36" cy="36" r="5" fill="#FFFFFF"/>
  <circle cx="64" cy="36" r="5" fill="#FFFFFF"/>
  <circle cx="36" cy="36" r="2.5" fill="#000000"/>
  <circle cx="64" cy="36" r="2.5" fill="#000000"/>
  <path d="M34 62q16 8 32 0" stroke="#1E281E" stroke-width="4" fill="none" stroke-linecap="round"/>
</svg>`,

  // 33. CreatorIQ (Official CreatorIQ logo)
  "creatoriq.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#635BFF"/>
  <circle cx="50" cy="50" r="26" fill="none" stroke="#FFFFFF" stroke-width="8"/>
  <rect x="46" y="24" width="8" height="52" fill="#FFFFFF" transform="rotate(45 50 50)"/>
  <circle cx="50" cy="50" r="10" fill="#635BFF"/>
</svg>`,

  // 34. CapCut (Official CapCut scissor blades)
  "capcut.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#000000"/>
  <path fill="#FFFFFF" d="M22 34l28 16-28 16V34zm56 0L50 50l28 16V34z"/>
  <rect x="46" y="26" width="8" height="48" rx="4" fill="#FFFFFF"/>
</svg>`,

  // 35. Sprout Social (Official Sprout Social leaf)
  "sprout-social.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#28D180"/>
  <path fill="#FFFFFF" d="M50 18C36 32 28 46 28 60c0 12 10 22 22 22s22-10 22-22c0-14-8-28-22-42zm0 48c-4.8 0-9-4-9-9 0-7 5-14 9-20 4 6 9 13 9 20 0 5-4.2 9-9 9z"/>
</svg>`,

  // 36. React (Official React atom)
  "react.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#181818"/>
  <circle cx="50" cy="50" r="7.5" fill="#61DAFB"/>
  <ellipse cx="50" cy="50" rx="36" ry="14" fill="none" stroke="#61DAFB" stroke-width="3" transform="rotate(30 50 50)"/>
  <ellipse cx="50" cy="50" rx="36" ry="14" fill="none" stroke="#61DAFB" stroke-width="3" transform="rotate(90 50 50)"/>
  <ellipse cx="50" cy="50" rx="36" ry="14" fill="none" stroke="#61DAFB" stroke-width="3" transform="rotate(150 50 50)"/>
</svg>`,

  // 37. Next.js (Official Next.js N mark)
  "nextjs.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <circle cx="50" cy="50" r="48" fill="#000000" stroke="#333333" stroke-width="2"/>
  <path fill="#FFFFFF" d="M38 30h7v40h-7z"/>
  <path fill="url(#nextOfficialGrad)" d="M45 30l25 38h-7.5L42 36z"/>
  <path fill="#FFFFFF" d="M63 30h7v23h-7z"/>
  <defs>
    <linearGradient id="nextOfficialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>`,

  // 38. TypeScript (Official TypeScript TS icon)
  "typescript.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#3178C6"/>
  <path fill="#FFFFFF" d="M26 38h24v7H42v29h-8V45H26v-7zm28 20.5c2 2 5.5 3.5 9 3.5 3.5 0 5-1.5 5-3.5 0-2.5-2.5-3.5-6-4.5-5-1.5-8.5-4-8.5-8.5 0-5 4.5-8.5 11-8.5 4 0 7.5 1.5 9.5 3l-2.5 5.5c-1.5-1-4-2-7-2-3 0-4.5 1.2-4.5 2.5 0 2 2 3 5.5 4 6 1.8 9.5 4 9.5 9 0 5.5-4.5 9.5-12 9.5-4.5 0-9-1.5-11.5-3.5l2.5-5z"/>
</svg>`,

  // 39. JavaScript (Official JavaScript JS icon)
  "javascript.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#F7DF1E"/>
  <path fill="#000000" d="M30 63c1.5 2.5 3.5 4 7 4 3.5 0 6-2 6-6V38h8v23c0 7.5-5 11-13 11-6.5 0-10.5-3-12-7l4-2zm28-4.5c2 2 5.5 3.5 9 3.5 3.5 0 5-1.5 5-3.5 0-2.5-2.5-3.5-6-4.5-5-1.5-8.5-4-8.5-8.5 0-5 4.5-8.5 11-8.5 4 0 7.5 1.5 9.5 3l-2.5 5.5c-1.5-1-4-2-7-2-3 0-4.5 1.2-4.5 2.5 0 2 2 3 5.5 4 6 1.8 9.5 4 9.5 9 0 5.5-4.5 9.5-12 9.5-4.5 0-9-1.5-11.5-3.5l2.5-5z"/>
</svg>`,
};

for (const [filename, content] of Object.entries(icons)) {
  fs.writeFileSync(path.join(targetDir, filename), content.trim());
}

console.log(
  "Successfully generated " +
    Object.keys(icons).length +
    " authentic official tool SVG icons in public/assets/tools/",
);
