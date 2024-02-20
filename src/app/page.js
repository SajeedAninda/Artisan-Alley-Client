import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import LocalArtisans from "@/components/Local Artisans/LocalArtisans";
import Newsletter from "@/components/Newsletter/Newsletter";
import PeopleSays from "@/components/People Says/PeopleSays";
import RecentProducts from "@/components/Recent Products/RecentProducts";
import WhatIsArtisan from "@/components/What is Artisan/WhatIsArtisan";
import WorkingProcess from "@/components/Working Process/WorkingProcess";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <>
      {/* <Header></Header> */}
      <Banner></Banner>
      <WhatIsArtisan></WhatIsArtisan>
      <WorkingProcess></WorkingProcess>
      <LocalArtisans></LocalArtisans>
      <RecentProducts></RecentProducts>
      <Contact></Contact>
      <PeopleSays></PeopleSays>
      <Newsletter></Newsletter>
      {/* <Footer></Footer> */}
    </>
  );
}
