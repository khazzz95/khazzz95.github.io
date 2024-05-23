import { useEffect, useState } from "react";
import "./languageselector.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/contentSlice";
import IconMaster from "../IconMaster/IconMaster";

export default function LanguageSelector() {
    const options = useSelector(state=>state.content.languages)
    const language = useSelector(state=>state.content.language)
    const texts = useSelector(state=>state.content.texts)
    const dispatch = useDispatch()
    const [languageToggle, setLanguageToggle] = useState(false);


  const handleSelectLanguage = (value)=>{
    if(options[value] && texts[value]){
        dispatch(setLanguage(value))
    }
    setLanguageToggle(false)
  }

  return (
    <>
      <div className="language-selector">
        <div className="language-selector-container">
          <div
            className="language-selector-selected"
            onClick={(e) => setLanguageToggle((prev) => !prev)}
          >
            <span className={`fi fi-${options[language]?.icon}`}></span>
            {languageToggle ? (
                <IconMaster iconName='arrowup' className="icon" size="19px"/>
            ) : (
                <IconMaster iconName='arrowdown' className="icon" size="19px" />
            )}
          </div>
          <div
            className={`language-selector-items ${!languageToggle && `hidden`}`}
          >
            {options.map((o) => (
              <div key={o.value} className="language-selector-item" onClick={()=>{handleSelectLanguage(o.value)}}>
                <span className={`fi fi-${o.icon}`}></span>
                {o.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
