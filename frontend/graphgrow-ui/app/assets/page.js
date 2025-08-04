import NavBar from "@/app/ui/NavBar";
import GraphCard from "@/app/ui/GraphCard";
import ListCard from "@/app/ui/ListCard";



function page() {
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
   const profitPrices = [
    { time: '2024-08-01', value: 113000 }, 
    { time: '2024-08-02', value: 113500 },
    { time: '2024-08-03', value: 113200 },
    { time: '2024-08-04', value: 112800 },
    { time: '2024-08-05', value: 113100 },
    { time: '2024-08-06', value: 113000 },
    { time: '2024-08-07', value: 113400 },
    { time: '2024-08-08', value: 113950 },
    { time: '2024-08-09', value: 113800 },
    { time: '2024-08-10', value: 113850 },
    { time: '2024-08-11', value: 113700 },
    { time: '2024-08-12', value: 113900 },
   ]; 

   const list = [
    {id: 1, imgPath: "/toncoin.svg", imgDesc: "", imgWidth: 20, imgHeight: 20, title: "Toncoin", price: "$3.61", percent: "7.1%"},
    {id: 2, imgPath: "/toncoin.svg", imgDesc: "", imgWidth: 20, imgHeight: 20, title: "Toncoin", price: "$3.61", percent: "7.1%"},
    {id: 3, imgPath: "/toncoin.svg", imgDesc: "", imgWidth: 20, imgHeight: 20, title: "Toncoin", price: "$3.61", percent: "7.1%"},
    {id: 4, imgPath: "/toncoin.svg", imgDesc: "", imgWidth: 20, imgHeight: 20, title: "Toncoin", price: "$3.61", percent: "7.1%"},
   ];
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-3 grid-rows-2 gap-1 p-2">
        <GraphCard graph={lossPrices} graphColor="red" style="" heading="$3,760,508,833,964" subHeading="Market Cap"/>
        <GraphCard graph={profitPrices} graphColor="green" style="row-start-2" heading="$169,608,819,880" subHeading="24h Trading volume" />
        <ListCard list={list} style="row-span-2" heading="Trending" link="View more" />
        <ListCard list={list} style="row-span-2" heading="Top Gainers" link="View more" />
      </div>
    </>
  )
}

export default page