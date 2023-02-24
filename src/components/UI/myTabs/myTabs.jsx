import React, {useState} from 'react';
import './myTabs.css'


function MyTabs({stateAPI_URL}) {

    const [id, setId] = useState('Фильмы')


    function handleClick(id) {
        stateAPI_URL(id)
        setId(id)
    }

    return (
        <div className={'tabs_window'}>
            <div className={'group_one'}>
                <button className={`button_one tabs__nav-btn ${(id === 'Фильмы') ? 'active' : null}`}
                        onClick={() => handleClick('Фильмы')}>Фильмы
                </button>
                <button className={`button_two tabs__nav-btn ${(id === 'Новинки') ? 'active' : null}`}
                        onClick={() => handleClick('Новинки')}>Новинки
                </button>
                <button className={`button_three tabs__nav-btn ${(id === 'Top-100') ? 'active' : null}`}
                        onClick={() => handleClick('Top-100')}>Top-100
                </button>
            </div>
            <div className={'group_two'}>
                <button className={`button_four tabs__nav-btn ${(id === 'Сериалы') ? 'active' : null}`}
                        onClick={() => handleClick('Сериалы')}>Сериалы
                </button>
            </div>
        </div>
    );
}

export default MyTabs;