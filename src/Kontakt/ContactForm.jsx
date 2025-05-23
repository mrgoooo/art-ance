import { useState } from "react";

function PlusIcon({ className = "h-5 w-5 text-gray-600" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
  );
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    service: "",
    budget: "",
    businessType: "",
    name: "",
    phone: "",
    email: "",
    agreement: false,
    callRequest: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Dane zostały wysłane pomyślnie!");
        // opcjonalnie: wyczyść formularz
        setFormData({
          service: "",
          budget: "",
          businessType: "",
          name: "",
          phone: "",
          email: "",
          agreement: false,
          callRequest: false,
        });
      } else {
        console.error("Błąd podczas wysyłania danych:", response.statusText);
      }
    } catch (error) {
      console.error("Błąd sieci:", error);
    }
  };

  return (
    <div className="w-full bg-black text-white flex flex-col items-center justify-center">
      <div className=" w-[90%] p-6 text-black bg-white animate-fade-in flex  flex-col rounded-2xl">
        <div className="flex flex-col justify-center items-center ">
          <div className="sm:pl-10   w-full md:h-[100px] flex md:flex-col flex-col-reverse lg:flex-row items-center justify-center  md:mt-10">
            <h2 className="font-normal w-full text-[45px] md:text-7xl  xl:text-8xl lg:w-2/3 text-left ">
              Napisz do Nas!
            </h2>{" "}
            <div className="flex justify-end space-x-3 sm:space-x-6  w-full lg:w-1/3 h-full  text-black   items-start  pr-1 md:pr-10">
              <a
                href="https://www.facebook.com/profile.php?id=61574673092422"
                className="hover:underline sm:text-[20px] lg:text-[28px]"
              >
                facebook
              </a>
              <a
                href="https://www.instagram.com/artance.cc/"
                className="hover:underline sm:text-[20px] lg:text-[28px]"
              >
                instagram
              </a>
              <a
                href="https://www.linkedin.com/company/artance-web-solutions/about/"
                className="hover:underline sm:text-[20px] lg:text-[28px]"
              >
                linkedin
              </a>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className=" w-full sm:w-[80%] justify-center items-center space-y-6 mt-4 mt:pt-10 lg:pt-20 "
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative w-full">
                <input
                  type="text"
                  name="service"
                  placeholder="Wybierz rodzaj usługi"
                  value={formData.service}
                  onChange={handleChange}
                  className="border-b-2 p-2 w-full focus:outline-none border-black  placeholder:text-black placeholder:font-normal text-xs sm:text-lg"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">
                  <PlusIcon />
                </div>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  name="budget"
                  placeholder="Budżet"
                  value={formData.budget}
                  onChange={handleChange}
                  className="border-b-2 p-2 w-full focus:outline-none border-black  placeholder:text-black placeholder:font-normal text-xs sm:text-lg"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">
                  <PlusIcon />
                </div>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  name="businessType"
                  placeholder="Rodzaj działalności"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="border-b-2 p-2 w-full focus:outline-none border-black text-lg placeholder:text-black placeholder:font-normal text-xs sm:text-lg"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">
                  <PlusIcon />
                </div>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Imię i nazwisko"
                value={formData.name}
                onChange={handleChange}
                className="border-b p-2 w-full focus:outline-none placeholder:text-[#757575] border-[#757575] placeholder:font-normal text-xs sm:text-lg"
              />

              <input
                type="text"
                name="phone"
                placeholder="Numer telefonu (opcjonalnie)"
                value={formData.phone}
                onChange={handleChange}
                className="border-b p-2 w-full focus:outline-none placeholder:text-[#757575] border-[#757575] placeholder:font-normal text-xs sm:text-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="border-b p-2 w-full focus:outline-none placeholder:text-[#757575] border-[#757575] placeholder:font-normal text-xs sm:text-lg"
              />
            </div>
            <div className="flex items-center space-x-2 pt-4 md:pb-10">
              <input
                type="checkbox"
                name="callRequest"
                checked={formData.callRequest}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <label className="text-black text-xs md:text-[17px] font-normal w-full lg:w-4/5 xl:w-[55%] leading-snug">
                Chcę umówić się na 30-minutową rozmowę wstępną, aby omówić moje
                potrzeby i znaleźć najlepsze rozwiązanie.
              </label>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start border-t pb-6 md:pb-20 pt-8 ">
              <div className="flex space-x-2 items-center pb-4 md:pb-0">
                <input
                  type="checkbox"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleChange}
                  className="w-4 h-4"
                  required
                />
                <label className="text-black w-[300px] sm:w-4/5 md:w-[75%] font-normal  text-xs md:text-[17px] leading-snug">
                  Zgadzam się na przetwarzanie moich danych osobowych przez
                  firmę Artance.
                </label>
              </div>
              <div className="flex w-full justify-end">
                <button
                  type="submit"
                  className="text-black px-10 md:px-20 py-2 md:py-4 rounded-full text-xs sm:text-15 md:text-[23px]  hover:bg-gray-800 transition border-[2px] border-black bg-white hover:bg-black/5  "
                >
                  wyślij
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
