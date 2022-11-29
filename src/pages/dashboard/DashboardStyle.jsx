import styled from "styled-components";

export const DashboardWrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 37px 40px;
    .rechart-wrapper {
        .barchart-cnt {
            box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
            width: 100%;
            max-width: 628px;
            min-height: 378px;
            background-color: white;
            border-radius: 30px;
            padding: 1.2rem 2.3rem;
            margin-top: 153px;
            .top-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 20px;
                .select-cnt {
                    padding-left: 30px;
                    width: 118px;
                    height: 38px;
                    background: #F9FBFF;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    gap: 18px;
                }
            }
        }
    }
    
`