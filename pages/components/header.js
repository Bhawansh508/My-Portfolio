import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="flex-row mt-10">
        <div
          className=" -mr-560 ml-50 h-50 w-50 rounded-full
        justify-end inline-flex"
        >
          <Image
            className="avatar  "
            src={"/logo.png"}
            height={50}
            width={50}
          />
        </div>
        <nav className="space-x-3 text-white text-center -mt-8 ">
          <Link href={<div></div>}>
            <a className="link link-underline-white link-underline-white">
              Home
            </a>
          </Link>
          <Link href={<div></div>}>
            <a className="link link-underline-white link-underline-white">
              About
            </a>
          </Link>
          <Link href="{<div></div>}">
            <a className="link link-underline-white link-underline-white">
              My Projects
            </a>
          </Link>
          <Link href={<div></div>}>
            <a className="link link-underline-white link-underline-white">
              My Services
            </a>
          </Link>
        </nav>
      </div>
    </>
  );
}
