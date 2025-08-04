import Link from "next/link"
import Image from "next/image"


function ListCard(card) {
  return (
    <div className={`${card.style} bg-white rounded-md p-2 border-gray-200/75 shadow-xs border-2 overflow-auto flex flex-col justify-between`}>
        <div className="flex justify-between">
            <h3 className="font-black">{card.heading}</h3>
            <Link className="text-gray-800/97 font-black text-[0.85em]" href="">{card.link}</Link>
        </div>
        
            { card.list.map((item) => (
                <div key={item.id} className="flex justify-between items-center flex-1">
                    <div className="flex gap-2 items-center">
                        <Image src={item.imgPath} alt={item.imgDesc} width={item.imgWidth} height={item.imgHeight} />
                        <h5 className="font-black text-[0.9em]">{item.title}</h5>
                    </div>
                    <p className="text-[0.9em] font-bold">{item.price}<span className="ps-2 text-green-700">{item.percent}</span></p>
                </div>
            )) }
        
    </div>
  )
}

export default ListCard