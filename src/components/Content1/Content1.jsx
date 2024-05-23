import React from 'react'
import './content1.css'
export default function Content1({data,id}) {
  return (
    <div className="content1" id={id || undefined} >
      <div className="container">
        <div className="content1-description">{data?.desc}</div>
        <div className="content1-header">{data?.title}</div>
        <div className="content1-content">
          <div className="content1-items">
            {
                data?.messages.map((m,i)=>(
                    <p key={i} className='content1-p'>{m}</p>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
