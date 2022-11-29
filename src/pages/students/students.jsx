import React from 'react'
import { Button, Table } from 'antd'
import { Searchbar } from '../../components/navbar/searchbar'
import { StudentStatistics } from '../../components/student-statistics/student-statistics'
import { StudentsWrapper } from './studentsStyle'
import { data } from "../../data/tableData"
import { ReactComponent as SearchIcon } from "../../assets/search 1.svg"
import { ReactComponent as ArrowIcon } from "../../assets/Vector (40).svg"

export const Students = () => {
    const columns = [
        {
            title: "F.I.O",
            dataIndex: "fio",
            key: "key"
        },
        {
            title: "Yo’nalish",
            dataIndex: "yonalish",
            key: "key"
        },
        {
            title: "Telefon nomer",
            dataIndex: "telNumber",
            key: "key"
        },
        {
            title: "To’lov",
            dataIndex: "tolov",
            key: "key"
        },
        {
            title: "Guruh",
            dataIndex: "guruh",
            key: "key"
        },
        {
            title: "Status",
            render: () => {
                return (
                    <>
                        <Button 
                            style={{
                                color: "#008767",
                                backgroundColor: "#00876738",
                                border: "1px solid #008767"
                            }}  
                            size='defauld'
                        >
                            Active
                        </Button>
                    </>
                )
            } ,
            key: "key"
        },
    ]

    return (
        <StudentsWrapper>
            <Searchbar />
            <StudentStatistics isActive={true} />
            <div className="table_wrapper">
                <div className="top-container">
                    <div className="title-cnt">
                        <h2>Hamma O’quvchilar</h2>
                        <h4>Faol o’quvchilar</h4>
                    </div>
                    <div className="search-and-select-container">
                        <form className="search-cnt">
                            <SearchIcon />
                            <input type="text" placeholder='Qidiruv'/>
                        </form>
                        <div className='select-cnt'>
                            <p>Short Status<span>: Faol</span></p>
                            <ArrowIcon />
                        </div>
                    </div>
                </div>
                <Table columns={columns} dataSource={data}></Table>
            </div>
        </StudentsWrapper>
    )
}
