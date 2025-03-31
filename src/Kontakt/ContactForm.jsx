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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className=" w-[90%] p-6 text-black bg-white animate-fade-in flex  flex-col rounded-2xl">
      <div className="flex flex-col justify-center items-center ">
        <div className="w-full flex items-center justify-center">
          <h2 className="text-8xl w-2/3  mb-6 text-left">Napisz do Nas!</h2>{" "}
          <div className="flex space-x-6 mt-6 w-1/3  text-gray-600 text-lg justify-end text-[28px] pr-10">
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
          <div className="grid grid-cols-2 gap-6">
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
  );
};

export default ContactForm;
