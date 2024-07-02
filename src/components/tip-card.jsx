export default function TipCard({ color, text }) {
  const colorClass =
    color === "red" ? "border-r-red-600" : "border-r-green-600";
  return (
    <div className="rounded-xl border border-gray-500 h-[200px] p-5 w-[90vw] shrink-0">
      <div
        className={`border-r-2 ${colorClass} h-[150px]  flex flex-col items-end px-5`}
      >
        <div>sign</div>
        <div>{text}</div>
      </div>
    </div>
  );
}
