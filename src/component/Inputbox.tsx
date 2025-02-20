import Button from "./Button";
import IconButton from "./IconButton";
import CopyIcon from "./CopyIcon";
import SoundIcon from "./SoundIcon";
import Header from "./Header";
import Wrapper from "./Wrapper";
import handleAudio from "../utils/handleAudio";

export default function Inputbox({
  setLanguage,
  currentLanguage,
  content,
  setContent,
  setTranslate,
  handleCopy,
}) {
  const handleCopyClick = () => {
    handleCopy(content);
  };
  const playAudio = () => {
    handleAudio(content, currentLanguage);
  };
  return (
    <div>
      <Wrapper>
        <div className="border-b-2 border-gray-600 px-3 pb-4 mb-3   flex gap-4">
          <div className=" pt-2">Language</div>
          <div>
            <Header
              setLanguage={setLanguage}
              currentLanguage={currentLanguage}
            />
          </div>
        </div>
        <div>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            className="w-full h-[130px] sm:h-[180px] bg-gray-800 overflow-hidden border-none"
          />
        </div>
        <div className=" flex justify-between items-center p-1">
          <div>
            <div className=" flex gap-2">
              <div>
                <IconButton handleClick={playAudio}>
                  <SoundIcon />
                </IconButton>
              </div>
              <div>
                <IconButton handleClick={handleCopyClick}>
                  <CopyIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <div>
            <Button setTranslate={setTranslate} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
