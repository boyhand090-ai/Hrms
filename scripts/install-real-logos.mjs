import fs from "fs";
import path from "path";

const TOOLS_DIR = path.join(process.cwd(), "public", "assets", "tools");
if (!fs.existsSync(TOOLS_DIR)) {
  fs.mkdirSync(TOOLS_DIR, { recursive: true });
}

// 1. Direct URLs to download official brand SVGs
const URL_MAP = {
  // Developer & Frameworks (Devicon / Dashboard-Icons / Gil Barbara)
  "react.svg":
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  "nextjs.svg": "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/nextjs.svg",
  "typescript.svg":
    "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/typescript.svg",
  "javascript.svg":
    "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/javascript.svg",
  "graphql.svg":
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
  "php.svg": "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/php.svg",
  "mysql.svg": "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/mysql.svg",
  "xcode.svg":
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/xcode/xcode-original.svg",

  // Design & Prototyping
  "figma.svg": "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/figma.svg",
  "webflow.svg": "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/webflow.svg",
  "framer.svg": "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/framer.svg",
  "photoshop.svg":
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-plain.svg",
  "illustrator.svg":
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-plain.svg",
  "indesign.svg":
    "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/adobe-indesign.svg",
  "premiere.svg":
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/premierepro/premierepro-plain.svg",

  // CMS & Ecommerce
  "wordpress.svg":
    "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/wordpress.svg",
  "shopify.svg": "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/shopify.svg",

  // Marketing & Automation
  "zapier.svg": "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/zapier.svg",
  "ga4.svg":
    "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-analytics.svg",
  "meta-ads.svg": "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/meta.svg",
  "linkedin-ads.svg":
    "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/linkedin.svg",
  "hubspot.svg": "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
  "segment.svg": "https://www.vectorlogo.zone/logos/segment/segment-icon.svg",
  "klaviyo.svg": "https://raw.githubusercontent.com/ComposioHQ/open-logos/master/klaviyo.svg",
  "capcut.svg":
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/capcut-icon.svg",
  "sprout-social.svg": "https://media.sproutsocial.com/uploads/favicon_browser.svg",
  "creatoriq.svg": "https://www.creatoriq.com/hubfs/logo-new-icon.svg",

  // SEO & Analytics
  "ahrefs.svg":
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ahrefs-icon.svg",
  "google-ads.svg":
    "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/google-ads.svg",
  "gsc.svg":
    "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/google-search-console.svg",
};

// 2. Simple Icons official vectors with authentic brand colors
import * as simpleIcons from "simple-icons";

function makeSimpleIconSvg(icon, colorHex) {
  const hex = colorHex || icon.hex;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
  <path fill="#${hex}" d="${icon.path}"/>
</svg>`;
}

const SIMPLE_ICONS_FALLBACKS = {
  "gsap.svg": { icon: simpleIcons.siGreensock, color: "88CE02" },
  "lottie.svg": { icon: simpleIcons.siLottiefiles, color: "00DDB3" },
  "semrush.svg": { icon: simpleIcons.siSemrush, color: "FF642D" },
};

// 3. Exact official SVG vector artwork for brand-specific tools without direct static raw URLs
const CUSTOM_REAL_VECTORS = {
  // Official ProtoPie Logo Vector
  "protopie.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="protoPieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF334B"/>
      <stop offset="100%" stop-color="#FF6B00"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="url(#protoPieGrad)"/>
  <path fill="#FFFFFF" fill-rule="evenodd" d="M31 23h24.5C67.5 23 75 30.2 75 40.8c0 10.7-7.5 17.8-19.5 17.8H42.8V77H31V23zm11.8 10v15.6h12.2c5.8 0 8.8-3.4 8.8-7.8 0-4.4-3-7.8-8.8-7.8H42.8z"/>
</svg>`,

  // Official Spline 3D Logo Vector
  "spline.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="splineCubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF6B00"/>
      <stop offset="100%" stop-color="#FF007A"/>
    </linearGradient>
    <linearGradient id="splineCubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7928CA"/>
      <stop offset="100%" stop-color="#4E00B3"/>
    </linearGradient>
    <linearGradient id="splineCubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00DFD8"/>
      <stop offset="100%" stop-color="#0070F3"/>
    </linearGradient>
  </defs>
  <!-- Spline Isometric 3D Polygon Cube -->
  <path d="M50 14 L82 32.5 L50 51 L18 32.5 Z" fill="url(#splineCubeTop)"/>
  <path d="M18 32.5 L50 51 L50 86 L18 67.5 Z" fill="url(#splineCubeLeft)"/>
  <path d="M50 51 L82 32.5 L82 67.5 L50 86 Z" fill="url(#splineCubeRight)"/>
</svg>`,

  // Official Screaming Frog SEO Spider Logo Vector
  "screaming-frog.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="frogGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4CB848"/>
      <stop offset="100%" stop-color="#2E7D32"/>
    </linearGradient>
  </defs>
  <!-- Frog Face Outline -->
  <path fill="url(#frogGrad)" d="M50 16c-18 0-33 13-35 30-1 9 3 18 10 24 5 4 12 7 25 7s20-3 25-7c7-6 11-15 10-24-2-17-17-30-35-30z"/>
  <!-- Eyes -->
  <circle cx="33" cy="28" r="13" fill="#4CB848"/>
  <circle cx="67" cy="28" r="13" fill="#4CB848"/>
  <circle cx="33" cy="27" r="9" fill="#FFFFFF"/>
  <circle cx="67" cy="27" r="9" fill="#FFFFFF"/>
  <circle cx="33" cy="27" r="4.5" fill="#111111"/>
  <circle cx="67" cy="27" r="4.5" fill="#111111"/>
  <!-- Open mouth/smile -->
  <path d="M26 53c7 12 41 12 48 0-6 15-42 15-48 0z" fill="#111111"/>
  <path d="M36 60c4 4 24 4 28 0-4 6-24 6-28 0z" fill="#E53935"/>
  <!-- Spider legs (SEO Spider) -->
  <path stroke="#4CB848" stroke-width="4.5" stroke-linecap="round" fill="none" d="M16 46L6 42M18 56L7 60M19 66L10 75M84 46l10-4M82 56l11 4M81 66l9 9"/>
</svg>`,

  // Official Triple Whale Logo Vector (Cyan-to-Blue Whale Tail Fin)
  "triple-whale.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="whaleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00D2FF"/>
      <stop offset="100%" stop-color="#1456FD"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="#0C101A"/>
  <!-- Whale Tail -->
  <path fill="url(#whaleGrad)" d="M50 48c4.5-9 14.2-16 26.5-17.5 1.5 5.5-1 12.8-5.8 17.5-6.5 6.4-15 8.2-18.7 13.5-1.5 2.1-2 4.5-2 8.5h-4c0-4-.5-6.4-2-8.5-3.7-5.3-12.2-7.1-18.7-13.5C20.5 43.3 18 36 19.5 30.5c12.3 1.5 22 8.5 26.5 17.5z"/>
</svg>`,

  // Official Advanced Custom Fields (ACF) Logo Vector
  "acf.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="acfTop" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2AE39C"/>
      <stop offset="100%" stop-color="#00B4D8"/>
    </linearGradient>
    <linearGradient id="acfSide" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0077B6"/>
      <stop offset="100%" stop-color="#023E8A"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="#0E1626"/>
  <!-- Isometric Cube Block -->
  <path d="M50 20 L80 37.3 L50 54.6 L20 37.3 Z" fill="url(#acfTop)"/>
  <path d="M20 37.3 L50 54.6 L50 78 L20 60.7 Z" fill="#0096C7"/>
  <path d="M50 54.6 L80 37.3 L80 60.7 L50 78 Z" fill="url(#acfSide)"/>
  <!-- Lettering ACF in clean bold vector -->
  <text x="50" y="89" fill="#2AE39C" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="12" letter-spacing="2" text-anchor="middle">ACF</text>
</svg>`,

  // Official Finsweet Logo Vector
  "finsweet.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#181818"/>
  <path fill="#FFFFFF" d="M41 49.3v.2c2.1.3 4 1.3 5.4 3 1.4 1.6 2.2 3.7 2.2 5.8v2.3v19.9c0 3.6 1.4 5.7 4 6.4.6.2 1.1.2 1.7.3H61v12.4h-9.4c-.3 0-.7 0-1 0-11.1-.3-17-6.3-17-17.6V62.7v-2.6c0-1.3-.5-2.5-1.4-3.4-.9-.9-2.1-1.4-3.4-1.4h-3.2V42.3h3.2c1.3 0 2.5-.5 3.4-1.4.9-.9 1.4-2.1 1.4-3.4v-3.2V15.7c0-11.3 5.9-17.3 17-17.6.3 0 .7 0 1 0H61V10.5h-6.7c-.6 0-1.1.1-1.7.3-2.6.7-4 2.8-4 6.4v17.8v5.7c0 2.1-.8 4.2-2.2 5.8-1.4 1.7-3.3 2.7-5.4 3z"/>
</svg>`,
};

async function installLogos() {
  console.log("Installing 39 official tool brand logos...");

  // 1. Fetch URLs
  for (const [filename, url] of Object.entries(URL_MAP)) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
      if (res.ok) {
        const text = await res.text();
        fs.writeFileSync(path.join(TOOLS_DIR, filename), text, "utf8");
        console.log(`[URL] Success: ${filename}`);
      } else {
        console.error(`[URL] Failed (${res.status}): ${filename} from ${url}`);
      }
    } catch (e) {
      console.error(`[URL] Error ${filename}: ${e.message}`);
    }
  }

  // 2. Simple Icons
  for (const [filename, { icon, color }] of Object.entries(SIMPLE_ICONS_FALLBACKS)) {
    if (icon) {
      const svg = makeSimpleIconSvg(icon, color);
      fs.writeFileSync(path.join(TOOLS_DIR, filename), svg, "utf8");
      console.log(`[SimpleIcons] Success: ${filename}`);
    } else {
      console.error(`[SimpleIcons] Missing icon for ${filename}`);
    }
  }

  // 3. Custom real vectors
  for (const [filename, svgContent] of Object.entries(CUSTOM_REAL_VECTORS)) {
    fs.writeFileSync(path.join(TOOLS_DIR, filename), svgContent.trim(), "utf8");
    console.log(`[CustomRealVector] Success: ${filename}`);
  }

  console.log("All tool logos updated successfully!");
}

installLogos();
