'use client'

import Button from "@/app/ui/Button";
import clsx from "clsx";
import { useState } from "react";
import MiniSparkChart from "@/app/ui/MiniSparkChart";
import Image from "next/image";


function page() {
    const [activeButton, setActiveButton] = useState('All');
      let filterButtonId = 0;
      let i = 1;
      const filterButtons = ['All', 'Highlights', 'Categories', 'Bridged-Tokens', 'Proof of Work(Pow)', 'World Liberty Financial Portfolio']
      const lossPrices = [
        { time: '2024-08-01', value: 113000 }, 
        { time: '2024-08-02', value: 113500 },
        { time: '2024-08-03', value: 113200 },
        { time: '2024-08-04', value: 112800 },
        { time: '2024-08-05', value: 113100 },
        { time: '2024-08-06', value: 113000 },
        { time: '2024-08-07', value: 112900 },
        { time: '2024-08-08', value: 112950 },
        { time: '2024-08-09', value: 112800 },
        { time: '2024-08-10', value: 112850 },
        { time: '2024-08-11', value: 112700 },
        { time: '2024-08-12', value: 112600 },
       ]; 

    const filteredListData = [
        {s_no: i++, coin: {name: 'Bitcoin', imgPath: '/bitcoin.svg'}, price: "$113,803", hour1: "0.2%", hour24: "0.9%", day7: "3.1%", vol24h: "$52,739,969,293", marketcap: "$2,264,193,781,393", graph: lossPrices},
        {s_no: i++, coin: {name: 'Bitcoin', imgPath: '/bitcoin.svg'}, price: "$113,803", hour1: "0.2%", hour24: "0.9%", day7: "3.1%", vol24h: "$52,739,969,293", marketcap: "$2,264,193,781,393", graph: lossPrices},
        {s_no: i++, coin: {name: 'Bitcoin', imgPath: '/bitcoin.svg'}, price: "$113,803", hour1: "0.2%", hour24: "0.9%", day7: "3.1%", vol24h: "$52,739,969,293", marketcap: "$2,264,193,781,393", graph: lossPrices},
        {s_no: i++, coin: {name: 'Bitcoin', imgPath: '/bitcoin.svg'}, price: "$113,803", hour1: "0.2%", hour24: "0.9%", day7: "3.1%", vol24h: "$52,739,969,293", marketcap: "$2,264,193,781,393", graph: lossPrices},
        {s_no: i++, coin: {name: 'Bitcoin', imgPath: '/bitcoin.svg'}, price: "$113,803", hour1: "0.2%", hour24: "0.9%", day7: "3.1%", vol24h: "$52,739,969,293", marketcap: "$2,264,193,781,393", graph: lossPrices},
        {s_no: i++, coin: {name: 'Bitcoin', imgPath: '/bitcoin.svg'}, price: "$113,803", hour1: "0.2%", hour24: "0.9%", day7: "3.1%", vol24h: "$52,739,969,293", marketcap: "$2,264,193,781,393", graph: lossPrices},
        {s_no: i++, coin: {name: 'Bitcoin', imgPath: '/bitcoin.svg'}, price: "$113,803", hour1: "0.2%", hour24: "0.9%", day7: "3.1%", vol24h: "$52,739,969,293", marketcap: "$2,264,193,781,393", graph: lossPrices},
        {s_no: i++, coin: {name: 'Bitcoin', imgPath: '/bitcoin.svg'}, price: "$113,803", hour1: "0.2%", hour24: "0.9%", day7: "3.1%", vol24h: "$52,739,969,293", marketcap: "$2,264,193,781,393", graph: lossPrices},
        {s_no: i++, coin: {name: 'Bitcoin', imgPath: '/bitcoin.svg'}, price: "$113,803", hour1: "0.2%", hour24: "0.9%", day7: "3.1%", vol24h: "$52,739,969,293", marketcap: "$2,264,193,781,393", graph: lossPrices},
      ]
       const [filteredList, setFilteredList] = useState(filteredListData);
    
       function filterHandler(event, query) {
        setActiveButton(event.target.innerText);
        (query === "Highlights") ? setFilteredList(filteredList.slice(0, 5)) : setFilteredList(filteredListData);
       }
  return (
    <div className="p-2.5">
        <div className="flex justify-between items-center">
          <div className="flex gap-7 text-sm font-bold text-gray-700/85 items-center p-">
            {
              filterButtons.map((name) => <Button key={filterButtonId++} text={name} handler={(e) => filterHandler(e, e.target.innerText)

              } styles={clsx('pt-1 pb-1 ps-2 pe-2 rounded-md', {'bg-lime-300/85 text-green-700' : activeButton == filterButtons[filterButtonId]})} />)
            }
          </div>
          <Button text="Customize" styles="font-extrabold bg-gray-200/75 shadow-xs rounded-md pt-1 pb-1 ps-2 pe-2 text-sm border-gray-200/75 border-1" />
        </div>
        <div className="mt-2.5">
          <div className="grid grid-cols-[minmax(0px,_50px)_4fr_repeat(7,_1fr)] auto-rows-max text-right gap-x-5 items-center font-bold text-[0.8em] border-y-1 border-gray-300 pt-2 pb-2">
            <h4 className="font-extrabold">#</h4>
            <h4 className="text-left">Coin</h4>
            <h4>Price</h4>
            <h4>1h</h4>
            <h4>24h</h4>
            <h4>7d</h4>
            <h4>24h Volume</h4>
            <h4>Market Cap</h4>
            <h4>Last 7 Days</h4>
          </div>
          {filteredList.map((list) => (
            <div key={list.s_no} className="grid grid-cols-[minmax(10px,_50px)_4fr_repeat(7,_1fr)] lg:overflow-visible md:overflow-visible sm:overflow-scroll auto-rows-max text-right gap-x-5 font-bold text-[0.8em] items-center border-b-1 border-gray-300 pt-2 pb-2">
              <h4 className="font-extrabold">{list.s_no}</h4>
              <h4 className="text-left flex justify-between items-center gap-x-7"><div className="flex gap-1.5 items-center"><Image src={list.coin.imgPath} alt="Crytocurrency logo" width={20} height={20}></Image>{list.coin.name}</div><Button text="Buy" styles="text-lime-600 border-1 rounded-md pt-0.5 pb-0.5 ps-2 pe-2 font-normal">{list.coin.buy}</Button></h4>
              <h4>{list.price}</h4>
              <h4>{list.hour1}</h4>
              <h4>{list.hour24}</h4>
              <h4>{list.day7}</h4>
              <h4>{list.vol24h}</h4>
              <h4>{list.marketcap}</h4>
              <MiniSparkChart data={list.graph} color="red" style="h-[100%] w-[100%]" />
            </div>
          ))}
        </div>
      </div>
  )
}

export default page