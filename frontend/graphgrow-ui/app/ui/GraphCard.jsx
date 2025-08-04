import MiniSparkChart from "@/app/ui/MiniSparkChart"


function GraphCard(card) {
  return (
    <div className={`${card.style} bg-white rounded-md p-2 border-gray-200/75 shadow-xs min-w-[150px] border-2 overflow-auto flex justify-between items-center gap-7`}>
        <div className={`${card.headingContainerStyle}`}>
            <h3 className={`${card.headingStyle} font-bold`}>{card.heading}</h3>
            <h4 className={`${card.subHeadingStyle} text-gray-600 font-bold text-[0.75em]`}>{card.subHeading}</h4>
        </div>
        <MiniSparkChart data={card.graph} color={card.graphColor} />
    </div>
  )
}

export default GraphCard