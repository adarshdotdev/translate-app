export default function Button({ setTranslate }) {
  return (
    <button
      onClick={() => setTranslate(true)}
      className="border transition-transform duration-200 hover:scale-95 hover:border-blue-500 border-white flex gap-2 rounded-lg bg-blue-600 px-5 py-3"
    >
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 20H18" stroke="#F9FAFB" stroke-width="2" />
          <path d="M9 12H15" stroke="#F9FAFB" stroke-width="2" />
          <path
            d="M7 17L10.1165 8.27376C10.9024 6.0734 11.2953 4.97321 12 4.97321C12.7047 4.97321 13.0976 6.07339 13.8835 8.27375L17 17"
            stroke="#F9FAFB"
            stroke-width="2"
          />
        </svg>
      </div>
      <span className="text-md font-semibold text-white">Translate</span>
    </button>
  );
}
