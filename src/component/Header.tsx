import { useState } from "react";
import ArrowDownIcon from "./ArrowDownIcon";
import languages from "../../data";

export default function Header({ setLanguage, currentLanguage }) {
  // const [inputLanguage, setInputLanguage] = useState(currentLanguage);
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    setLanguage(e.target.value);
  };

  const options = Object.entries(languages).map(([key, value]) => {
    return (
      <option value={key} key={key}>
        {value}
      </option>
    );
  });
  return (
    <div>
      <div className="flex gap-4 items-center">
        <div>
          <button
            className={`${
              currentLanguage === "en-IN" && "bg-gray-600"
            } py-1 px-3 rounded-lg`}
            onClick={() => setLanguage("en-IN")}
          >
            English
          </button>
        </div>
        <div>
          <button
            className={`${
              currentLanguage === "hi-IN" && "bg-gray-600"
            } py-1 px-3 rounded-lg`}
            onClick={() => setLanguage("hi-IN")}
          >
            Hindi
          </button>
        </div>
        <div
          className={`items-center flex gap-1 bg-gray-800 ${
            currentLanguage === selectedValue ? "bg-gray-600" : ""
          }`}
        >
          <select
            className="w-[80px] appearance-none text-white bg-gray-800 py-2 text-left rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            onChange={(e) => handleChange(e)}
          >
            {options}
          </select>
          <ArrowDownIcon />
        </div>
      </div>
    </div>
  );
}
