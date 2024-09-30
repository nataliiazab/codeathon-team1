const Spinner: React.FC = () => (
  <div className="flex flex-col justify-center items-center h-48">
    <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-[#37AB87] border-solid"></div>
    <p className="mt-2 text-gray-700">Loading data...</p>{" "}
  </div>
);

export default Spinner;