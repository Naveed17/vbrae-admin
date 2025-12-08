import * as React from 'react';
import Providers from '@/providers';
import 'simplebar-react/dist/simplebar.min.css';
import '@/styles/scrollbar.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// API services (direct fetch here or via service layer)
// API services (direct fetch here or via service layer)

export const revalidate = 60; // ISR: Revalidate every 60 seconds
// export async function generateMetadata() {
//   const res = await fetch(`${baseUrl}/api/settings/main`, {
//     next: { revalidate: 60 },
//   });

//   const { data } = await res.json();

//   const seo = data.seo || {};

//   return {
//     title: seo.metaTitle || data.businessName,
//     description: seo.metaDescription || seo.description || "",
//     keywords: Array.isArray(seo.tags) ? seo.tags.join(", ") : "",
//     icons: {
//       icon: data.favicon?.url,
//     },
//     openGraph: {
//       title: seo.metaTitle || data.businessName || "",
//       description: seo.metaDescription || seo.description || "",
//       url: data.domainName || "",
//       siteName: data.businessName || "",
//       type: "website",
//       images: [data.logoLight?.url || data.logoDark?.url || data.favicon?.url],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: seo.metaTitle || data.businessName || "",
//       description: seo.metaDescription || seo.description || "",
//       images: [data.logoLight?.url || data.logoDark?.url || data.favicon?.url],
//     },
//   };
// }

export default async function RootLayout({ children }) {
  return (
    <html lang={'en-US'}>
      <body suppressHydrationWarning={true}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Providers baseCurrency={'USD'}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
