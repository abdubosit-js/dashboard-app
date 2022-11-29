import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Groups } from "../../assets/Group 10.svg"
import { ReactComponent as Students } from "../../assets/Group 36646.svg"
import { ReactComponent as Graduate } from "../../assets/Group 10 (2).svg"
import { ReactComponent as Actives } from "../../assets/Group 10 (3).svg"
import { ReactComponent as ArrowUp } from "../../assets/arrow-up 1.svg"
import { ReactComponent as ArrowDown } from "../../assets/arrow-up 1 (1).svg"
import CountUp from 'react-countup';

export const StudentStatistics = ({isActive}) => {
    return (
        <Wrapper>
            <div className="students-wrapper">
                <Groups />
                <div className="title-cnt">
                    <p>Hamma o’quvchilar</p>
                    <h1><CountUp end={125} duration={2} />ta</h1>
                    <h4><ArrowUp/>16%<span>Oylik</span></h4>
                </div>
            </div>
           {isActive ? <div className="students-wrapper">
                <Graduate />
                <div className="title-cnt">
                    <p>Bitirgan o’quvchilar</p>
                    <h1><CountUp end={61} duration={2} />ta</h1>
                </div>
            </div> : ""}
            <div className="students-wrapper">
                <Students />
                <div className="title-cnt">
                    <p>Ketgan o’quvchilar</p>
                    <h1><CountUp end={10} duration={2} />ta</h1>
                    <h4 className='red-cnt'><ArrowDown/>1%<span>Oylik</span></h4>
                </div>
            </div>
            <div className="students-wrapper">
                <Actives />
                <div className="title-cnt">
                    <p>Faol o’quvchilar</p>
                    <h1><CountUp end={54} duration={2} />ta</h1>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    min-height: 151px;
    background-color: white;
    border-radius: 12px;
    padding: 2.8rem 4rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
    margin-top: 41px;
    .students-wrapper {
        display: flex;
        align-items: center;
        gap: 20px;
        width: 100%;
        max-width: 230px;
        .title-cnt {
            p {
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                letter-spacing: -0.01em;
                color: #ACACAC;
            }
            h1 {
                font-style: normal;
                font-weight: 600;
                font-size: 32px;
                line-height: 100%;
                letter-spacing: -0.01em;
                color: #333333;
            }
            h4 {
                margin-top: 8px;
                font-style: normal;
                font-weight: 700;
                font-size: 12px;
                line-height: 18px;
                letter-spacing: -0.01em;
                color: #00AC4F;
                display: flex;
                align-items: center;
            }
            .red-cnt{
                font-style: normal;
                font-weight: 700;
                font-size: 12px;
                line-height: 18px;
                letter-spacing: -0.01em;
                color: #D0004B;
                display: flex;
                align-items: center;
            }
        }
    }
`