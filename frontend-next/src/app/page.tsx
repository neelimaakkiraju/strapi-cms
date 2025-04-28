import { Button } from "@/components/ui/button";

async function getData(url: string) {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const strapiData = await getData("/api/home-page");
  console.log(strapiData);
  const {Title, Description} = await strapiData.data.attributes;
  return (
    <main>
      <h1>{Title}</h1>
      <p>{Description}</p>
    </main>
  );
}
