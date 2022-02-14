import Header from "./components/header";
import Landing from "./components/landing";
import Body from "./components/body";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="content w-screen h-screen">
        <Header />

        <Landing />
        <Body />
      </div>
    </>
  );
}
