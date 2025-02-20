export default function Wrapper({ children }) {
  return (
    <div className="flex   text-white  flex-col  border-2 border-gray-600 bg-gray-800 p-5 rounded-3xl gap-3  ">
      {children}
    </div>
  );
}
