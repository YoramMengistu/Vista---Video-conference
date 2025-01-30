import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface HomeCardProps {
  className: string;
  title: string;
  img: string;
  description: string;
  handleClick: () => void;
}
const HomeCard = ({
  className,
  title,
  img,
  description,
  handleClick,
}: HomeCardProps) => {
  return (
    <div
      className={cn(
        "bg-orange-1 px-4 py-6 flex justify-between w-full xl:max-w-[270px] flex-col rounded-[14px] cursor-pointer min-h-[260px] ",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex justify-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt="meeting" width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
