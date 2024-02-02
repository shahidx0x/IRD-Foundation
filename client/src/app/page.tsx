/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./component/Sidebar";
import Topbar from "./component/Topbar";

export default function Home() {
  return (
    <main>
      <div className="flex g-0">
        <div className="w-[100px]  border-2 border-black">
          <Sidebar />
        </div>
        <div className="ml-10 w-4/5 border-2 border-black">
          <Topbar />
        </div>
        <div className="w-1/5 border-2 border-black"></div>
      </div>
    </main>
  );
}
