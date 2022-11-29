import React, { useState } from 'react'
import { BarChart, Bar, XAxis, Cell } from 'recharts'
import { Searchbar } from '../../components/navbar/searchbar'
import { DashboardWrapper } from './DashboardStyle'
import { ReactComponent as Arrow } from "../../assets/Vector (40).svg"

export const Dashboard = () => {
  const [activeIndex, setActiveindex] = useState(false)
  const data = [
      {
        name: 'jan',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'feb',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Mar',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Apr',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'May',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Jun',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Jul',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: 'Aug',
        uv: 3090,
        pv: 4300,
        amt: 2100,
      },
      {
        name: 'Sep',
        uv: 2490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: 'Oct',
        uv: 3000,
        pv: 4300,
        amt: 2100,
      },
      {
        name: 'Nov',
        uv: 2222,
        pv: 4300,
        amt: 2100,
      },
      {
        name: 'Dec',
        uv: 3190,
        pv: 4300,
        amt: 2100,
      },
  ];

  
  return (
      <DashboardWrapper>
          <Searchbar />
          <div className="rechart-wrapper">
              <div className='barchart-cnt'>
                  <div className="top-content">
                      <h1>Yillik Statistika</h1>
                      <div className='select-cnt'>
                          <p>Yillar</p>
                          <Arrow />
                      </div>
                  </div>
                  <BarChart width={550} height={335} data={data}>
                      <Bar dataKey="uv" fill="#F2EFFF" radius={[12, 12,12,12]}  onMouseEnter={() => setActiveindex(true)}>
                      {data.map((entry, index) => (
                          <Cell cursor="pointer" fill={index === activeIndex ? '#5932EA' : '#F2EFFF'} key={`cell-${index}`} />
                        ))}
                      </Bar>
                      <XAxis dataKey="name" />
                  </BarChart>
              </div>
          </div>
      </DashboardWrapper>
  )
}

