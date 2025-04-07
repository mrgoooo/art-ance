import { useState } from "react";

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
          <div className="pl-10  w-full flex flex-col lg:flex-row items-center justify-center">
            <h2 className=" w-full text-5xl md:text-7xl  xl:text-8xl lg:w-2/3 lg:mb-6 text-left">
              Napisz do Nas!
            </h2>{" "}
            <div className="flex space-x-6 mt-6 w-full lg:w-1/3  text-gray-600 text-lg justify-start lg:justify-end text-[28px] pr-10">
              <a href="#" className="hover:underline">
                facebook
              </a>
              <a href="#" className="hover:underline">
                instagram
              </a>
              <a href="#" className="hover:underline">
                linkedin
              </a>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-[80%] justify-center items-center space-y-6 pt-10 "
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <input
                type="text"
                name="service"
                placeholder="Wybierz rodzaj usługi"
                value={formData.service}
                onChange={handleChange}
                className="border-b p-2 w-full focus:outline-none text-gray-600"
              />
              <input
                type="text"
                name="budget"
                placeholder="Budżet"
                value={formData.budget}
                onChange={handleChange}
                className="border-b p-2 w-full focus:outline-none text-gray-600"
              />
              <input
                type="text"
                name="businessType"
                placeholder="Rodzaj działalności"
                value={formData.businessType}
                onChange={handleChange}
                className="border-b p-2 w-full focus:outline-none text-gray-600"
              />
              <input
                type="text"
                name="name"
                placeholder="Imię i nazwisko"
                value={formData.name}
                onChange={handleChange}
                className="border-b p-2 w-full focus:outline-none text-gray-600"
              />
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Numer telefonu (opcjonalnie)"
              value={formData.phone}
              onChange={handleChange}
              className="border-b p-2 w-full focus:outline-none text-gray-600"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="border-b p-2 w-full focus:outline-none text-gray-600"
            />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="callRequest"
                checked={formData.callRequest}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <label className="text-gray-600">
                Chcę umówić się na 30-minutową rozmowę wstępną, aby omówić moje
                potrzeby i znaleźć najlepsze rozwiązanie.
              </label>
            </div>
            <div className="flex items-center space-x-2 border-t pt-4">
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                className="w-4 h-4"
                required
              />
              <label className="text-gray-600">
                Zgadzam się na przetwarzanie moich danych osobowych przez firmę
                Artance.
              </label>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-full w-full hover:bg-gray-800 transition"
            >
              wyślij
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
