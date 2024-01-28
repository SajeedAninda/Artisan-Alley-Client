import Banner from "@/components/Banner/Banner";
import WhatIsArtisan from "@/components/What is Artisan/WhatIsArtisan";
import Header from "@/components/header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <WhatIsArtisan></WhatIsArtisan>
    </>
  );
}
