import IconMaster from "../IconMaster/IconMaster";
import "./showcase2.css";
export default function Showcase({ data,id }) {
  return (
    <div className="showcase2" id={id || undefined}>
      <div className="container">
        <div className="showcase2-description">{data?.description}</div>
        <div className="showcase2-header">{data?.header}</div>
        <div className="showcase2-content">
          <div className="showcase2-image">
            <img src="https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>
          <div className="showcase2-items">
            {data?.items.map((item,i) => (
              <div key={i} className="showcase2-item">
                <IconMaster size="65" className="icon2" iconName={item?.icon} />
                <h3>{item?.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
