import TipCard from "./tip-card";

export default function DailyTips() {
  return (
    <div className="w-screen bg-gray-50 overflow-y-scroll flex flex-nowrap gap-2 p-2">
        <TipCard color='red' text='لباس گرم بپوش' />
        <TipCard color='red' text='لباس گرم بپوش' />
        <TipCard color='green' text='لباس گرم بپوش' />
    </div>
  )
}
