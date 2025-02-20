import { useEffect, useState } from "react";
import Inputbox from "./component/Inputbox";
import Outputbox from "./component/Outputbox";

function App() {
  const [fromLanguage, setFromLanguage] = useState("en-IN");
  const [toLanguage, setToLanguage] = useState("hi-IN");
  const [content, setContent] = useState("");
  const [translatedContent, setTranslatedContent] = useState("");
  const [translate, setTranslate] = useState(false);
  console.log(fromLanguage, toLanguage);
  // console.log(content);
  const fetchData = async () => {
    if (content.trim() === "") {
      return;
    }

    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          content
        )}&langpair=${fromLanguage}|${toLanguage}`
      );

      const data = await response.json();
      setTranslatedContent(data.responseData.translatedText);
    } catch (err) {
      console.log(err);
      alert("Something went wrong check your input is corrct and try again!");
    }
  };
  useEffect(() => {
    // console.log(fromLanguage, toLanguage);
    if (translate) {
      fetchData();
    }
    setTranslate(false);
  }, [translate]);

  const flipLanguage = () => {
    const tempFromLanguage = fromLanguage;
    setFromLanguage(toLanguage);
    setToLanguage(tempFromLanguage);
  };

  const handleCopy = (text: string) => {
    if (text.trim() === "") {
      return;
    }

    // User the clipbard API to copy the text
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  return (
    <div className="h-screen">
      <div className=" my-8 md:my-16 flex items-center justify-center">
        <img src={"/logo.svg"} className="inline-block" />
      </div>
      <div className="  max-w-[1150px] mx-auto  items-center flex gap-3 px-5 sm:px-10 flex-col md:flex-row">
        <div className="flex-1    ">
          <Inputbox
            currentLanguage={fromLanguage}
            setLanguage={setFromLanguage}
            content={content}
            setContent={setContent}
            setTranslate={setTranslate}
            handleCopy={handleCopy}
          />
        </div>
        <div className="flex-1    ">
          <Outputbox
            currentLanguage={toLanguage}
            setLanguage={setToLanguage}
            flipLanguage={flipLanguage}
            content={translatedContent}
            handleCopy={handleCopy}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
