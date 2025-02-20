import CopyIcon from "./CopyIcon";
import SoundIcon from "./SoundIcon";
import IconButton from "./IconButton";
export default function Footer({ handleCopy }) {
  return (
    <div className=" flex gap-2">
      <div>
        <IconButton>
          <SoundIcon />
        </IconButton>
      </div>
      <div>
        <IconButton>
          <CopyIcon />
        </IconButton>
      </div>
    </div>
  );
}
