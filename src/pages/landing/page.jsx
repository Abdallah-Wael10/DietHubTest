import React from "react";
import LandingForm from "../../components/LandingFrom"; // المسار الصحيح لمكون الفورم
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center w-full h-full">
      <LandingForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
