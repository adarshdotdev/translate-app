export default function ArrowDownIcon({ className = "" }) {
  return (
    <div className={`${className}  flex items-center pointer-events-none`}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 6L8 10L4 6" stroke="#6C727F" stroke-width="2" />
      </svg>
    </div>
  );
}
