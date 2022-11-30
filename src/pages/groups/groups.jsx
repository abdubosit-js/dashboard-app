import { Col, Row } from 'antd'
import React from 'react'
import { Searchbar } from '../../components/navbar/searchbar'
import { StudentStatistics } from '../../components/student-statistics/student-statistics'
import { GroupWrapper } from './GroupsStyle'
import { groupsData } from '../../data/groupsData'
import { ReactComponent as MenuIcon } from "../../assets/Vector (41).svg"
import ProgressBar from '@ramonak/react-progress-bar'

export const Groups = () => {
  return (
    <GroupWrapper>
        <Searchbar />
        <StudentStatistics />
        <div className="grid-container">
          <div className="title-flex">
            <h1>Guruhlar</h1>
            <h3>Oktabr, 27</h3>
          </div>
          <div className="group-count-cnt">
            <div className='group-count'>
              <h2>7</h2>
              <p>Faol Guruhlar</p>
            </div>
            <div className='group-count'>
              <h2>2</h2>
              <p>Tugatgan guruh</p>
            </div>
            <div className='group-count'>
              <h2>9</h2>
              <p>Umumiy guruh</p>
            </div>
          </div>
          <div className='grid-cnt' >
              {groupsData.map((item) => {
                return (
                  <div className='col-bar' key={item.id} span={8} style={{background: item.color}}>
                    <div className='top-flex'>
                      <p>{item.date}</p>
                      <MenuIcon/>
                    </div>
                    <h1>{item.title}</h1>
                    <p className='students-count-p'>O'quvchilar soni:{item.students}</p>
                    <div className='progress-container'>
                      <b>ortacha o'z</b>
                      <ProgressBar
                        height='5px' 
                        labelColor='transparent'
                        bgColor='#FF942E'
                        completed={item.progress}
                        baseBgColor="white"
                      />
                      <h5>{item.progress}%</h5>
                    </div>
                    <p className='bottom-p'>{item.oqtuvchi}</p>
                  </div>
                )
              } )}
          </div>
        </div>
    </GroupWrapper>
  )
}
