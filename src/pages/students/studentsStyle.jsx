import styled from "styled-components";

export const StudentsWrapper = styled.div`
    padding: 3rem;
    .table_wrapper {
        padding: 30px 40px;
        margin-top: 50px;
        background-color: white;
        box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
        border-radius: 30px;
        .top-container {
            display: flex;
            justify-content:space-between;
            margin-bottom: 30px;
            .title-cnt {
                h2{
                    font-weight: 600;
                    font-size: 22px;
                    line-height: 33px;
                    letter-spacing: -0.01em;
                    color: #000000;
                }
                h4 {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 21px;
                    letter-spacing: -0.01em;
                    color: #16C098;
                }
            }
            .search-cnt {
                max-width: 227.38px;
                height: 38px;
                position: relative;
                background-color: #F9FBFF;
                border-radius: 12px;
                overflow: hidden;
                svg {
                    top: 6px;
                    left: 5px;
                    position: absolute;
                }
                input {
                    width: 100%;
                    height: 100%;
                    padding-left: 35px;
                    border: none;
                    outline: none;
                    background-color: transparent;
                }
            }
            .search-and-select-container {
                display: flex;
                align-items: center;
                gap: 12px;
                .select-cnt {
                    width: 162.11px;
                    height: 38px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    background-color: #F9FBFF;
                    border-radius: 10px;
                    padding: 10px;
                    p{
                        font-style: normal;
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 18px;
                        letter-spacing: -0.01em;
                        color: #7E7E7E;
                    }
                    span {
                        color: #000000;
                    }
                }
            }
        }
    }
`