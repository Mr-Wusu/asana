import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";
import appStore from "@/public/asana files/App_Store.svg";
import playStore from "@/public/asana files/Play_Store.svg"


export default function Footer() {
  return (
    <footer className="bg-[#710C3A] flex flex-col gap-7 text-white  items-center justify-center pt-10 pb-11 ">
      <p>© 2025 Asana, Inc.</p>
      <div className="flex items-center gap-2">
        <TbWorld className="text-2xl" />
        <Link className="border-b border-b-transparent hover:border-b-white transition-all duration-300" href="/#i18n">English</Link>
      </div>
      <ul className="flex gap-1">
        <Link
          className="bg-black h-8 w-8 rounded-full grid place-content-center cursor-pointer hover:bg-amber-50 hover:text-black transition-colors delay-100 duration-200"
          href="https://x.com/intent/follow?screen_name=asana"
        >
          <FaXTwitter />
        </Link>

        <Link
          className="bg-black h-8 w-8 rounded-full grid place-content-center cursor-pointer hover:bg-amber-50 hover:text-black transition-colors delay-100 duration-200"
          href="https://www.linkedin.com/company/asana/"
        >
          <FaLinkedinIn />
        </Link>

        <Link
          className="bg-black h-8 w-8 rounded-full grid place-content-center cursor-pointer hover:bg-amber-50 hover:text-black transition-colors delay-100 duration-200"
          href="https://www.instagram.com/asana/"
        >
          <FaInstagram />
        </Link>

        <Link
          className="bg-black h-8 w-8 rounded-full grid place-content-center cursor-pointer hover:bg-amber-50 hover:text-black transition-colors delay-100 duration-200"
          href="https://web.facebook.com/asana?_rdc=1&_rdr#"
        >
          <FaFacebookF />
        </Link>

        <Link
          className="bg-black h-8 w-8 rounded-full grid place-content-center cursor-pointer hover:bg-amber-50 hover:text-black transition-colors delay-100 duration-200"
          href="https://www.youtube.com/channel/UC2BoogM0AqwOJyoSp1S4ClQ"
        >
          <FaYoutube />
        </Link>
      </ul>
      <div className="flex gap-0.5">
        <Link
          href="/terms"
          className="border-b border-b-transparent hover:border-b-white transition-all delay-150"
        >
          Terms
        </Link>
        &
        <Link
          href="/terms/privacy-statement"
          className=" border-b border-b-transparent hover:border-b-white"
        >
          Privacy
        </Link>
      </div>
      <div className="flex gap-2">
        <Link
          href="https://apps.apple.com/us/app/asana-work-management/id489969512"
          className="cursor-pointer"
        >
          <Image src={appStore} alt="Applestore download image" />
        </Link>
        <Link
          href="https://play.google.com/store/apps/details?id=com.asana.app&pli=1"
          className="cursor-pointer"
        >
          <Image src={playStore} alt="Playstore download image" />
        </Link>
      </div>
    </footer>
  );
}
