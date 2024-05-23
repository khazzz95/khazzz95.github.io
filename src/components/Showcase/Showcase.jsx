import IconMaster from "../IconMaster/IconMaster";
import "./showcase.css";
export default function Showcase({ data,id }) {
  return (
    <div className="showcase" id={id || undefined}>
      <div className="container">
        <div className="showcase-description">{data?.description}</div>
        <div className="showcase-header">{data?.header}</div>
        <div className="showcase-items">
          {data?.items.map((item,i) => (
            <div key={i} className="showcase-item">
              <IconMaster className="icon" iconName={item?.icon} />
              <h3>{item?.title}</h3>
              <p>
                {item?.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
