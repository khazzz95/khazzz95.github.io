import IconMaster from "../IconMaster/IconMaster";
import "./testimonials.css";
export default function Testimonials({ data }) {
  return (
    <div className="testimonials">
      <div className="testimonials-description">{data?.description}</div>
      <div className="testimonials-header">{data?.header}</div>
      <div className="testimonials-container">
        <div className="container">
          <div className="testimonials-items">
            {data?.items.map((item,i) => (
              <div key={i} className="testimonials-item">
                <img src={`${process.env.PUBLIC_URL}/${item?.photo}`} alt="" />
                <div className="testimonials-message">{item?.message}</div>
                <span className="testimonials-name">{item?.name}</span>
                <IconMaster size="29" color="gold" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
