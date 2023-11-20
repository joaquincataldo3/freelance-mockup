import { Navbar } from "../../shared-components/navbar/Navbar";
import { Carousel } from "./components/auto-play-carousel/Carousel";
import './home.css'
import { ServicesSectionBox } from "./components/services-section-box/ServicesSectionBox";
import { ClientReviews } from "./components/client-reviews/ClientReviews";

export const Home = () => {
  return (
    <div className="all-content-container">
      <Navbar />
      <main className="home-main-container">
        <Carousel />
        <ServicesSectionBox />
        <ClientReviews />
      </main>
    </div>
  )
}
