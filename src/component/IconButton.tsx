export default function IconButton({ children, handleClick }) {
  return (
    <div>
      <button
        onClick={handleClick}
        className="p-1 transition-transform duration-200 hover:scale-95 hover:border-blue-500 rounded-xl border-[3px] border-gray-600"
      >
        {children}
      </button>
    </div>
  );
}
