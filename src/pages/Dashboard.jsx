import React from "react";
import ButtonAppBar from "../components/NavBar";
import VeteranCard from "../components/Veteran/VeteranCard";
import SponsorCard from "../components/Sponsor/SponsorCard";
import StickyFooter from "../components/Footer";

function Dashboard() {
  return (
    <div>
      <ButtonAppBar />
      <div class="flex h-screen justify-center items-center">
        <VeteranCard />
        <SponsorCard />
        <StickyFooter />
      </div>
    </div>
  );
}

export default Dashboard;
