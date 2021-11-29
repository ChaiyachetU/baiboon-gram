import { useState } from "react";
import Header from "../comps/Header";
import Title from "../comps/Title";
import UploadForm from "../comps/UploadForm";
import ImageGrid from "../comps/ImageGrid";
import Modal from "../comps/Modal";
import Footer from "../comps/Footer";

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Header />
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Footer />
    </>
  );
};

export default Home;
