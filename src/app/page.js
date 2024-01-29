import Banner from "@/components/Banner/Banner";
import LocalArtisans from "@/components/Local Artisans/LocalArtisans";
import WhatIsArtisan from "@/components/What is Artisan/WhatIsArtisan";
import WorkingProcess from "@/components/Working Process/WorkingProcess";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <WhatIsArtisan></WhatIsArtisan>
      <WorkingProcess></WorkingProcess>
      <LocalArtisans></LocalArtisans>
    </>
  );
}
