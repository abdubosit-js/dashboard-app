import styled from "styled-components";

export const GroupWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 3rem;
    .grid-container {
        height: 876px;
        background: #FFFFFF;
        border-radius: 40px 40px 0px 0px;
        padding: 2.1rem 2.7rem;
        margin-top: 32px;
        .title-flex{
            display: flex;
            align-items: center;
            justify-content: space-between;    
            h1 {
                font-style: normal;
                font-weight: 600;
                font-size: 32px;
                line-height: 39px;
            }
            h3 {
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 22px;
            }
        }
        .group-count-cnt {
            display: flex;
            gap: 20px;
            margin-top: 28px;
            .group-count {
                h2 {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 28px;
                    line-height: 34px;
                }
                p {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                    color: #838383;
                }
            }
        }
        .grid-cnt {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(287.57px,1fr));
            gap: 30px; 
            margin-top: 32px;
            .col-bar {
                height: 221.07px;
                border-radius: 25px;
                padding: 1rem 1.3rem;
                .top-flex {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    p {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 10px;
                        line-height: 12px;
                        color: #6F6F6F;
                    }
                }
                h1{
                    font-style: normal;
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 24px;
                    color: #000000;
                    margin-top: 20px;
                }
                .students-count-p {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 15px;
                    color: #6F6F6F;
                    margin-top: 7px;
                }
                b {
                    display: block;
                    margin-top: 17px;
                    margin-left: 5px;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 12px;
                    line-height: 14px;
                    color: #242424;
                }
                .progressbar {
                    margin-top: 5px;
                    span {
                        text-align: center;
                    }
                }
                .progress-container{
                    position: relative;
                    h5 {
                        position: absolute;
                        right: 0;
                    }
                }
                .bottom-p {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 15px;
                    color: #6F6F6F;
                    margin-top: 50px;
                }
            }
        }
    }
`