import React from "react";
import ButtonAppBar from "../components/NavBar";
import VeteranCard from "../components/Veteran/VeteranCard";
import SponsorCard from "../components/Sponsor/SponsorCard";
function Dashboard() {
  return (
    <div>
      <ButtonAppBar />
      <VeteranCard />
      <SponsorCard />
    </div>
  );
}

export default Dashboard;
