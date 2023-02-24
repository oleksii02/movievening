import React from 'react';
import './categories.css'

const Categories_List = [
    {name: 'Анонсы'},
    {name: 'Боевые искусства'},
    {name: 'Биографические'},
    {name: 'Боевики'},
    {name: 'Вестерны'},
    {name: 'Военные'},
    {name: 'Детективы'},
    {name: 'Драмы'},
    {name: 'Исторические'},
    {name: 'Комедии'},
    {name: 'Криминальные'},
    {name: 'Мелодрамы'},
    {name: 'Мультфильмы'},
    {name: 'Мюзиклы'},
    {name: 'Приключенческие'},
    {name: 'Семейные'},
    {name: 'Спортивные'},
    {name: 'Триллеры'},
    {name: 'Ужасы'},
    {name: 'Фантастические'},
    {name: ''},


]


function Categories({category_API_URL}) {


    return (
        <div className='categories_window'>

            <div className={'categories_name'}>
                Категорій
            </div>
            <div className={'categories_list'}>
                {Categories_List.map((category) => (<button className={'categories_button'} onClick={() => {
                    category_API_URL(category.name, 'Search')
                }}>{category.name}</button>))}
            </div>
        </div>
    );
}

export default Categories;