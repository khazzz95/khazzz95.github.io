import { useSelector } from "react-redux";
import IconMaster from "../IconMaster/IconMaster";
import "./socials.css";
export default function Socials({ data }) {
  const company = useSelector(state=>state.content.company)
  return (
    <div className="socials">
      <div className="container">
        <div className="socials-items">
            {company.social?.map((item,i) => (
              <div key={i} className="socials-item">
                <a href={item?.link} target="_blank" rel="noreferrer"><IconMaster iconName={item?.icon} size="25" color="grey"/></a>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}
