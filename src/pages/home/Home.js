import React from 'react'
import "./styles/home.css"

export default function Home() {

  const homeContents = [
    {id:1, title:"Registered Users",  number: 1 },
    {id:2, title:"Total Sales",  number: 0 },
    {id:3, title:"Total Affiliates",  number: 0 },
    {id:4, title:"Total Profit $",  number: 0 },
    {id:5, title:"Pending Withdrawal",  number: 0 },
    {id:6, title:"Pending Transfer",  number: 0 },
  ]

  return (
    <div className="home">
      <div className="home-container">
        {homeContents.map((item)=>(
          <div key={item.id} className="total-users">
            <div className="total-users-container">
                <div className="title">
                  <h4>{item.title}</h4>
                </div>
                <div className="number">
                  <h4>{item.number}</h4>
                </div>
            </div>
        </div>
        )) }
      </div>
    </div>
  )
}
