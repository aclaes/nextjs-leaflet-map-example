import dynamic from "next/dynamic";

/*
 * Leaflet.js make direct calls to the DOM.
 * Therefore it requires a browser and can't be used with server-side rendering.
 *
 * Use Next.js dynamic imports to load and render the Map component only client-side.
 *
 * https://stackoverflow.com/questions/57704196/leaflet-with-next-js
 * https://codesandbox.io/s/leafletjs-with-nextjs-m7qnb?file=/pages/index.js
 */
export default function Home() {
  const Map = dynamic(() => import("../components/Map"), {
    loading: () => <p>A map is loading</p>, // This is optional: alternative content for server-side rendering
    ssr: false, // This line important.
  });

  return (
    <main>
      <h1>Next.js Leaflet Map Example</h1>
      <Map />
    </main>
  );
}
