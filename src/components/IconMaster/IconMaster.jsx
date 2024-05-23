import React from "react";
import { BsChatQuote } from "react-icons/bs";
import { MdOutlinePriceChange, MdOutlineSupportAgent,MdBusiness,MdPerson,MdWorkHistory } from "react-icons/md";
import { FaInstagram,FaTwitter,FaFacebook,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile,HiSquaresPlus } from "react-icons/hi2";
import { GrNavigate } from "react-icons/gr";
import { CiMail } from "react-icons/ci";
import { PiMapPinLine } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdMoreTime } from "react-icons/md";
import { FaCalculator } from "react-icons/fa6";
import { MdOutlineCalculate } from "react-icons/md";





const iconMap = {
  chat: BsChatQuote,
  price: MdOutlinePriceChange,
  support: MdOutlineSupportAgent,
  instagram:FaInstagram,
  twitter:FaTwitter,
  facebook:FaFacebook,
  linkedin:FaLinkedinIn,
  youtube:FaYoutube,
  phone:HiOutlineDevicePhoneMobile,
  address:PiMapPinLine,
  mail:CiMail,
  burger:GiHamburgerMenu,
  arrowup:FaAngleUp,
  arrowdown:FaAngleDown,
  time:MdMoreTime,
  calc:MdOutlineCalculate,
  plus:HiSquaresPlus,
  business:MdBusiness,
  individual:MdPerson,
  project:MdWorkHistory
};

const IconComponent = ({ iconName,size,color }) => {
  const Icon = iconMap[iconName];
  return Icon ? <Icon className='icon' size={size} color={color}/> : <BsChatQuote className='icon' size={size} color={color}/>;
};

export default function IconMaster({ iconName ,size='75', color='gray'}) {
  return <IconComponent iconName={iconName} size={size} color={color} />;
}
