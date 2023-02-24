import React from 'react';
import './navbar.css'
import MyTabs from "../UI/myTabs/myTabs";


function Navbar({stateAPI_URL , search_API_URL}) {
    const [search, setSearch] = React.useState('')



    const searchAPI =  (event) => {
        setSearch(event.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleClick();
        }
    }

    const handleClick = () =>{
        search_API_URL(search,'Search')
        setSearch('')
    }

    return (
        <div className='navbar_window'>
            <div className={'name'}><h1><a href={'/'} className={'link'}>MoviEvening</a></h1></div>
            <div className="d-flex justify-content-end">
                <a href={'/'}><p className={'p-2 link'}>Регистрация</p></a>
                <a href={'/'}><p className={'p-2 link'}>Вход</p></a>
            </div>
            <div className="d-flex justify-content-end">
                <input type='text' value={search} onChange={searchAPI} onKeyDown={handleKeyDown} className={'navbar_search'}/>
                <button onClick={handleClick} className={'p-1 _button'}>Поиск</button>
            </div>
            <div className="d-flex justify-content-end">
              <MyTabs
              stateAPI_URL={stateAPI_URL}/>
            </div>
        </div>

    );
}

export default Navbar;