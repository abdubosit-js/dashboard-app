import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavBarWrapper } from './navbarStyle'
import { ReactComponent as Logo } from '../../assets/setting 1.svg'
import { ReactComponent as KeyIcon } from '../../assets/key-square.svg'
import { ReactComponent as Dquare } from '../../assets/3d-square 1.svg'
import { ReactComponent as UserIcon } from '../../assets/user-square 1.svg'
import { ReactComponent as WallentMoney } from '../../assets/wallet-money 2.svg'
import { ReactComponent as DiscountIcon } from '../../assets/discount-shape 1.svg'
import { ReactComponent as MessageIcon } from '../../assets/message-question 1.svg'
import { ReactComponent as Arrow } from '../../assets/Vector (38).svg'
import { ReactComponent as ArrowDown } from '../../assets/Vector (40).svg'
import UserImg from "../../assets/Ellipse 8.png"

export const Navbar = ({setIsActive, isActive}) => {

    const navData = [
        {
            id: 1 ,
            url: "/",
            title: "dashboard",
            image: <KeyIcon />,
            arrowImage: "",
        },
        {
            id: 2 ,
            url: "guruhlar",
            title: "gururhlar",
            image: <Dquare/>,
            arrowImage: <Arrow/>,
        },
        {
            id: 3 ,
            url: "oquvchilar",
            title: "O’quvchilar",
            image: <UserIcon/>,
            arrowImage: <Arrow/>,
        },
        {
            id: 4 ,
            url: "bugalteriya",
            title: "Bug’alteriya",
            image: <WallentMoney /> ,
            arrowImage: <Arrow/>,
        },
        {
            id: 5 ,
            url: "sozlamalar",
            title: "Sozlamalar",
            image: <DiscountIcon />,
            arrowImage: <Arrow/>,
        },
        {
            id: 6 ,
            url: "yordam",
            title: "Yordam",
            image: <MessageIcon />,
            arrowImage: <Arrow/>,
        },
    ]

    return (
        <NavBarWrapper onMouseEnter={() => setIsActive(true)} isActive={isActive}>
            <div className='logo_wrapper'>
                <Logo/>
                <h1>Dashboard</h1>
            </div>
            <nav className='nav-container'>
                <ul>
                    {navData.map(item => {
                        return (
                            <li key={item.id}>
                                <NavLink to={item.url}>
                                    <div className='a-cnt'>
                                        <div className="icon-cnt">
                                            {item.image}
                                        </div>
                                        <p>{item.title}</p>
                                    </div>
                                    <div className="arrow-cnt">
                                        {item.arrowImage}
                                    </div>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div className="user-container">
                <img src={UserImg} alt="" />
                <div className="title-cnt">
                    <b>Turdiyev Sheroz</b>
                    <p>Project Manager</p>
                </div>
                <ArrowDown/>
            </div>
        </NavBarWrapper>
    )
}
