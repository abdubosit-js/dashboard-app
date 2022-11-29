import styled from "styled-components";

export const NavBarWrapper = styled.div`
    max-width: 306px;
    min-height: 100vh;
    padding: 36px 28px;
    background-color: white;
    transition: 0.3s;
    position: relative;
    .logo_wrapper {
        display: flex;
        align-items: center;
        gap: 15px;
        h1 {
            display: ${({isActive}) => isActive ? "inline" : "none"};
        }
    }
    .user-container {
        position: absolute;
        bottom: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title-cnt {
            margin-left: 10px;
            display: ${({isActive}) => isActive ? "inline" : "none"};
            b {
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 21px;
                letter-spacing: 0.01em;
                color: #000000;
            }
            p {
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 18px;
                letter-spacing: 0.01em;
                color: #757575;
            }
        }
        svg {
            display: ${({isActive}) => isActive ? "inline" : "none"};
            margin-left: 10px;
        }
    }
    .nav-container {
        margin-top: 33px;
        ul{
            li {
                list-style: none;
                margin-top: 20px;
                a {
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.9rem;
                    color: #9197B3;
                    .icon-cnt {
                    }
                    p {
                        display: ${({isActive}) => isActive ? "inline" : "none"};
                        margin-top: -5px;
                    }
                    .a-cnt{
                        display: flex;
                        align-items: center;
                        gap: 16px;
                    }
                }
            }
        }
        .arrow-cnt {
            display: ${({isActive}) => isActive ? "inline" : "none"};
        }
        .active {
            background: #5932EA;
            color: white;
            border-radius: 8px;
            .icon-cnt {
                svg{
                    path {
                        stroke: white;
                    }
                }
            }
            .arrow-cnt {
                svg{
                    path {
                        stroke: white;
                    }
                }
            }
        }
    }
`