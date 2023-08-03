"use client";
import Aos from "aos";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import Form from "./components/Form/Form";
import Popup from "./components/Popup/Pop";
import Pop from "./components/Popup/Pop";
import Footer from "./components/Footer/Foooter";
export default function Home() {
  const [buttonPop, setButtonPop] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setButtonPop(true);
    }, 5000);
  }, []);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <Navbar />
      <main>
       < Form/>
      </main>
      <Popup trigger={buttonPop} setTrigger={setButtonPop}>
        <Pop />
      </Popup>

      <Footer />
    </>
  );
}
