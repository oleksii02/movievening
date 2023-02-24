import React from 'react';
import img from "../UI/Poster/dakj623.jpg";
import './film.css'

function Film({Film}) {
    return (
        <div className={'film'}>
            <div className={'film_window'}>
                <img src={Film.posterUrlPreview} className={'film_cover'} alt={'err'}/>
                <div className={'info'}>
                    <table>
                    <tbody>
                    <tr >
                        <td>Название:</td>
                        <td style={{width:350}}>{Film.nameRu}</td>
                    </tr>
                    <tr>
                        <td>Оригинальное название:</td>
                        <td>{Film.nameEn}</td>
                    </tr>
                    <tr>
                        <td>Год:</td>
                        <td>{Film.year}</td>
                    </tr>
                    <tr>
                        <td>Страна:</td>
                        <td>{Film.countries.map(country => country.country)}</td>
                    </tr>
                    <tr>
                        <td>Режиссер:</td>
                        <td></td>
                    </tr>
                    <tr >
                        <td>Жанр:</td>
                        <td>{Film.genres.map(genre => genre.genre +' ')}</td>
                    </tr>
                    <tr>
                        <td>Время:</td>
                        <td>{Film.filmLength}</td>
                    </tr>
                    <tr>
                        <td>Цикл:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>В главных ролях:</td>
                        <td></td>
                    </tr>

                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Film;