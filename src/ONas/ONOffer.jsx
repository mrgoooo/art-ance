function ONOffer() {
  const items = [
    "UX/UI Design",
    "Automatyzacja",
    "Portfolio",
    "Landing Page",
    "Branding",
  ];
  const itemssecondcol = [
    "Web design",
    "E-commerce",
    "SEO",
    "Hosting",
    "Integracja API",
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[95%] flex  h-[600px] items-center">
        <div className="w-1/2 flex flex-col items-center">
          {itemssecondcol.map((item, index) => (
            <div
              key={index}
              className="h-1/5 w-full text-center py-6 text-3xl border-t-2 text-[#060017]/80"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="w-1/2 flex flex-col">
          {items.map((item, index) => (
            <div
              key={index}
              className="h-1/5 w-full text-center py-6 text-3xl border-t-2 text-[#060017]/80"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ONOffer;
