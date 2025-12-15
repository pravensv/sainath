import React, { useState } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import FAQs from "./components/FAQs/FAQs";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

type Page = "home" | "about" | "contact" | "faqs";

const App: React.FC = () => {
  const [page, setPage] = useState<Page>("home");

  let content: React.ReactElement;
  switch (page) {
    case "about":
      content = <About />;
      break;
    case "contact":
      content = <ContactUs />;
      break;
    case "faqs":
      content = <FAQs />;
      break;
    default:
      content = <Home />;
      break;
  }

  return (
    <div>
      <Header onNavigate={setPage} activePage={page} />
      <main>{content}</main>
      <Footer />
    </div>
  );
};

export default App;
