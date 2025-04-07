import Navbar from "../Components/Navbar";
import ContactForm from "./ContactForm";
import LastFooter from "../Components/LastFooter";
const KontaktPage = () => {
  return (
    <div className="w-full bg-black text-white flex flex-col">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className=" relative flex flex-col items-center justify-center w-full">
        <div className="w-full">
          <ContactForm />
        </div>
      </main>
      <div className="flex justify-center">
        <LastFooter />
      </div>
    </div>
  );
};
export default KontaktPage;
