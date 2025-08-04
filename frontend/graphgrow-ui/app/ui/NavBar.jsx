import Button from "@/app/ui/Button";

function NavBar() {
    const btnstyle = "bg-sky-200/75 pr-3 pl-3 pt-1.5 pb-1.5 rounded-md shadow-sm text-gray-700 self-center";
  return (
    <div className="flex justify-between p-2.5">
        <h1 className="text-2xl p-2 pt-2.5 text-black font-medium">GraphGrow</h1>
        <Button styles={btnstyle} text="Connect Wallet" />
    </div>
  )
}

export default NavBar;