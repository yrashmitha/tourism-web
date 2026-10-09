# Sri Lanka Route Atlas

A static Astro website concept for a Sri Lankan travel guide. Japanese is the primary language, with English pages at `/en/`. The site has Home, Packages, Services and Contact pages. Contact and package enquiries use WhatsApp only; there are no forms, payments or reservation tools.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; preview it with `npm run preview`. The project is configured as a static Astro site and can deploy to Vercel without a database or server adapter.

## Client details to update before launch

- Replace the temporary descriptor and blank WhatsApp number in `src/data/site.ts`. Enter the number in international format using digits only, without `+` or spaces.
- Review the Japanese and English package descriptions in `src/components/DetailPage.astro`. The four tour outlines are paraphrased from [Travel with Sampath's public Packages page](https://travelwithsampath.com/packages/) for this client presentation. Confirm the client's routes, day-by-day schedule, included items, exclusions and current availability before publishing.
- Confirm which services are actually provided and whether Japanese-language guiding or support is available.
- Replace, reorder or add package entries in the same component as the client provides confirmed content. Prices are intentionally omitted until supplied.
- The route map and generated destination images are illustrative design assets; they are not photographs of the client, staff or vehicles.

## Visual system

The selected direction is **The Island Route Atlas**, composed as **Route Story**. Main colors: map paper `#F5F3EC`, deep ink `#172D3B`, botanical green `#3E7566` and vermilion `#D24C36`. Production images are in `public/images/`, and source plates used by the site are in `assets/plates/`. Local Impeccable review output is excluded from the Git repository.
