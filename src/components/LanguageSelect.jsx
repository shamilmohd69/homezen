import { useState } from "react";
import Image from "next/image";

const LanguageSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");

  const languages = [
    { code: "en", label: "English", short: "EN" },
    { code: "ar", label: "العربية", short: "ع" },
    { code: "hi", label: "हिन्दी", short: "ह" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 border rounded-md hover:bg-gray-100 transition"
      >
        <Image src="/translate.svg" alt="Language" width={20} height={20} />
        <span>{languages.find((lang) => lang.code === selectedLang)?.short}</span>
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-2 w-32 bg-white border rounded-md shadow-lg">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => {
                setSelectedLang(lang.code);
                setIsOpen(false);
              }}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 transition"
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelect;
