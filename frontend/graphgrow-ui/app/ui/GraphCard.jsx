import MiniSparkChart from "@/app/ui/MiniSparkChart"


function GraphCard(card) {
  return (
    <div className={`${card.style} bg-white rounded-md p-2 border-gray-200/75 shadow-xs min-w-[150px] border-2 lg:overflow-visible md:overflow-visible sm:overflow-scroll flex justify-between items-center gap-3`}>
        <div className={`${card.headingContainerStyle}`}>
            <h3 className={`${card.headingStyle} font-bold text-[100%]`}>{card.heading}</h3>
            <h4 className={`${card.subHeadingStyle} text-gray-600 font-bold text-[0.8em]`}>{card.subHeading}</h4>
        </div>
        <MiniSparkChart data={card.graph} color={card.graphColor} style="h-[100%] w-[40%]"/>
    </div>
  )
}

export default GraphCard