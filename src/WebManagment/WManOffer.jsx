import React from "react";

export default function WManOffer() {
  const plans = [
    {
      title: "Serwerowanie",
      price: "100 PLN/Msc",
      features: [
        "Stałe nadzorowanie stanu strony",
        "Instalowanie poprawek",
        "Dbanie o stabilność",
        "Zabezpieczenia przed atakami",
        "Regularne kopie zapasowe",
      ],
    },
    {
      title: "Basic Management",
      price: "500+ PLN/Msc",
      features: [
        "Serwerowanie + Wsparcie techniczne",
        "Bieżąca pomoc w rozwiązywaniu problemów",
        "Konsultacje rozwojowe",
        "Zarządzanie treścią (CMS)",
        "Regularne aktualizacje, tworzenie, edycja treści",
        "Zarządzanie blogiem",
      ],
    },
    {
      title: "AFP",
      price: "Indywidualna wycena",
      features: [
        "Pełny zakres wsparcia",
        "Optymalizacja SEO",
        "Konsultacje strategiczne",
      ],
    },
  ];

  return (
    <section className=" w-[95%] py-12 md:px-12  lg:bg-white rounded-2xl">
      <h2 className="text-center text-2xl tracking-tighter mb-8">
        Porównaj Ofertę:
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className=" bg-white lg:bg-transparent lg:border-2 border-black/30 rounded-2xl  p-6 text-center flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl md:text-3xl tracking-tighter   mb-6">
                {plan.title}
              </h3>
              <p className="text-black/70 tracking-tighter mb-16">
                {plan.price}
              </p>
              <ul className="text-xs md:text-sm text-black/60 space-y-2 tracking-tighter pb-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
