import { useSelector } from "react-redux";
import IconMaster from "../IconMaster/IconMaster";
import "./contactform.css";
export default function ContactForm({ data,id }) {
  const company = useSelector(state=>state.content.company)
  return (
    <div className="contactform" >
      <div className="container">
        <div className="contactform-description">{data?.header}</div>
        <div className="contactform-header">{data?.description}</div>
        <form>
          <div className="form-row">
            <div className="form-col">
              <input type="text" placeholder={data?.yourname} />
              <input type="text" placeholder={data?.yourmail} />
            </div>
            <div className="form-col">
              <textarea name="" id="" placeholder={data?.yourmessage}></textarea>
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <input type="submit" value={data?.send} />
            </div>
          </div>
        </form>
        <div className="contactform-items" id={id || undefined}>
          <div className="contactform-item">
            <IconMaster className="icon" iconName={`phone`} />

            {company?.mobile.map((m,i) => (
              <a key={i} href={`tel:${m}`}>
                <p>{m}</p>
              </a>
            ))}
          </div>
          <div className="contactform-item">
            <IconMaster className="icon" iconName={`address`} />
            {company?.address.map((a,i) => (
              <a key={i} href={a.value} target="_blank">
                <p>{a.label}</p>
              </a>
            ))}
          </div>
          <div className="contactform-item">
            <IconMaster className="icon" iconName={`mail`} />
            {company?.mail.map((m,i) => (
              <a key={i} href={`mailto:${m}`}>
                <p>{m}</p>
              </a>
            ))}
          </div>
          <div className="contactform-item">
            <IconMaster className="icon" iconName={`business`} />
            {company?.info.map((m,i) => (
              <div key={i}>{m}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
