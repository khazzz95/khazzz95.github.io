import { useSelector } from 'react-redux'
import './footer.css'

export default function Footer() {
  const company = useSelector(state=>state.content.company)
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="footer-main">
            &copy;2024 {company?.name}. All rights reserved.
        </div>
      </div>
    </div>
  )
}
