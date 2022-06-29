import React from "react";
import{
  HomeIcon,
  CollectionIcon,
  BadgeCheckIcon,
  SearchIcon,
  UserIcon,
  LightningBoltIcon,} from "@heroicons/react/outline"
import Image from "next/image";
import HeaderItems from "./HeaderItems";

const Header = ({title, Icons}) => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
    <div className="flex flex-grow justify-evenly max-w-2xl">
    <HeaderItems title="HOME" Icons={HomeIcon}/>
    <HeaderItems title="TRENDING" Icons={LightningBoltIcon}/>
    <HeaderItems title="VERIFIED" Icons={BadgeCheckIcon}/>
    <HeaderItems title="COLLECTIONS" Icons={CollectionIcon}/>
    <HeaderItems title="SEARCH" Icons={ SearchIcon}/>
    <HeaderItems title="ACCOUNT" Icons={ UserIcon}/>
    </div>
      <Image 
      className="object-contain"
      src="https://links.papareact.com/ua6" width={200} height={100}  alt="hulu"/>
    </header>
  );
};

export default Header;
