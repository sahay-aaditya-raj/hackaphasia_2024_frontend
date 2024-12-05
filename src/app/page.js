'use client'
import Hero from "@/components/heroComponent";
import Header from "@/components/header";
import Footer from "@/components/footer";
export default function Home() {
  
  return (
    
    <>
      <Header/>
      <Hero />
      <main className="md:mx-16 mt-2 flex justify-between gap-4">
        <div className="w-full">
          <div className="rounded-md bg-primaryHover">
            4
          </div>
        </div>
        <div className="w-full">
        <div className="rounded-md bg-primaryHover">
            4
          </div>
        </div>
      </main>
      <Footer />
    </>

  );
}
