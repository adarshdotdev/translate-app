import CopyIcon from "./CopyIcon";
import FlipIcon from "./FlipIcon";
import Header from "./Header";
import IconButton from "./IconButton";
import SoundIcon from "./SoundIcon";
import Wrapper from "./Wrapper";
import handleAudio from "../utils/handleAudio";

export default function ({
  currentLanguage,
  setLanguage,
  flipLanguage,
  content,
  handleCopy,
}) {
  const handleCopyClick = () => {
    handleCopy(content, currentLanguage);
  };
  const playAudio = () => {
    handleAudio(content, currentLanguage);
  };
  return (
    <div>
      <Wrapper>
        <div className="flex  justify-between gap-10 items-center p-3 border-b-2 border-gray-600">
          <div>
            <Header
              currentLanguage={currentLanguage}
              setLanguage={setLanguage}
            />
          </div>
          <div>
            <IconButton handleClick={flipLanguage}>
              <FlipIcon />
            </IconButton>
          </div>
        </div>
        <div>
          <textarea
            value={content}
            disabled
            className="w-full  h-[130px] sm:h-[180px]  bg-gray-800 overflow-hidden border-none py-3"
          />
        </div>
        <div>
          <div className="flex gap-3 p-2 mb-2">
            <IconButton handleClick={playAudio}>
              <SoundIcon />
            </IconButton>
            <IconButton handleClick={handleCopyClick}>
              <CopyIcon />
            </IconButton>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
