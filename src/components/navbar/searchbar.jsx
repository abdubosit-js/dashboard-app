import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Moon } from '../../assets/Vector (39).svg'
import { ReactComponent as Add } from '../../assets/Add.svg'
import { ReactComponent as Akar } from '../../assets/Group (5).svg'
import { ReactComponent as SearchIcon } from '../../assets/search 1.svg'

export const Searchbar = () => {
    const setDarkToggle = () => {
        document.body.classList.toggle('dark')
    }
    return (
        <Wrapper>
            <h1>Salom Sheroz 👋🏼,</h1>
            <div className='search-wrapper'>
                <Moon onClick={() => setDarkToggle()} />
                <Add />
                <Akar />
                <form className="search-cnt">
                    <SearchIcon />
                    <input type="text" placeholder='Qidiruv' />
                </form>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .search-wrapper {
        display: flex;
        align-items: center;
        gap: 7px;
        .search-cnt {
            max-width: 216px;
            height: 38px;
            position: relative;
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
            }
        }
    }

`
