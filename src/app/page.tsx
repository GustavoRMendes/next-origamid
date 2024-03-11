import Acesso from "@/components/acesso";
import ClientFetch from "@/components/client-fetch";

export default async function HomePage() {
  
  return (
    <main>
     <h1>Home</h1>
     <Acesso/>
     <ClientFetch/>
    </main>
  );
}
