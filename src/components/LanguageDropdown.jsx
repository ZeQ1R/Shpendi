import { useState } from "react";
import i18n from "../i18n";

const LanguageDropdown = () => {
  const languages = {
    en: { label: "English", flag: "🇬🇧" },
    al: { label: "Shqip", flag: "🇦🇱" },
    mk: { label: "Македонски", flag: "🇲🇰" },
  };

  const [currentLang, setCurrentLang] = useState("en");
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button shows current flag */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700"
      >
        <span>{languages[currentLang].flag}</span>
        <span className="hidden sm:inline">{languages[currentLang].label}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 w-32 rounded-md bg-gray-800 shadow-lg border border-gray-700">
          {Object.entries(languages).map(([code, { label, flag }]) => (
            <button
              key={code}
              onClick={() => changeLanguage(code)}
              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
            >
              <span>{flag}</span> {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
