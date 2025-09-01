"use client";
import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { toggleMenu } from "@/state/menu/menuSlice";
import Product from "../Product/Product";
import Solutions from "../Solutions/Solutions";
import Resources from "../Resources/Resources";
import LinkAnime from "../Extras/LinkAnime";
import Button from "./Button";

export default function Modal() {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      // Disable body scroll when modal is open
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      // Re-enable body scroll when modal is closed
      document.body.style.overflow = "unset";
      document.body.style.height = "unset";
    }

    // Cleanup function to ensure scroll is re-enabled
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.height = "unset";
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Close modal if clicking on backdrop (not on content)
    if (e.target === e.currentTarget) {
      dispatch(toggleMenu());
    }
  };

  return isOpen ? (
    <div
      className="fixed inset-0 bg-white text-black z-30 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="w-full min-h-full flex flex-col">
        {/* Header spacer to account for fixed navbar if needed */}
        <div className="h-16"></div>

        {/* Modal content */}
        <div className="flex-1 pb-8">
          <Product />
          <Solutions />
          <Resources />
          <LinkAnime goTo="/pricing">
            <p className="text-[1.1rem] font-semibold px-1.5">Pricing</p>
          </LinkAnime>
          <div className="w-full h-[1px] bg-[#f0f0ff]" />

          <div className="flex flex-col gap-3 mt-8">
            <Button className="rounded-sm w-5/6 py-3 mx-auto border-2 border-black font-semibold tracking-wide hover:bg-orange-300 hover:text-black hover:border-orange-300 transition-all duration-300">
              Get started
            </Button>
            <Button className="rounded-sm w-5/6 py-3 mx-auto border-2 border-black font-semibold tracking-wide bg-transparent text-black hover:bg-orange-300 hover:text-black hover:border-orange-300 transition-all duration-300">
              Log in
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
