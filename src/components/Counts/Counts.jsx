import IconMaster from "../IconMaster/IconMaster";
import "./counts.css";
export default function Counts({ data }) {
  return (
    <div className="counts">
      <div className="container">
        <div className="counts-items">
            {data?.map((item,i) => (
              <div key={i} className="counts-item">
                <IconMaster iconName={item?.icon} size="55" color="grey"/>
                <span className="counts-count">{item?.count}</span>
                <span className="counts-name">{item?.name}</span>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}
