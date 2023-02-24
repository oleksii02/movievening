import React from 'react';
import './poster.css'
import img from './dakj623.jpg'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const Poster = ({movie, Content,Film}) => {

    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]





    return (

        <div className={'movie'} onClick={() => (Content(false), Film(movie) )}>
            <div className={'movie__cover-inner'}>
                <img src={movie.posterUrl} className={'movie__cover'} alt={movie.posterUrlPreview}/>

            </div>
            <div className={'movie__info'}>
                <div className={'movie__title'}>{movie.nameRu}</div>
                <div className={'movie__year'}>{movie.year}</div>
                <div className={'movie__country'}>{movie.countries[0].country}</div>
                <div className={'movie__category'}>{movie.genres[0].genre}</div>

                {list.map(id =>
                    (id <= Math.round(movie.rating)) ?
                        <StarIcon className={'icons'} sx={{fontSize: 15}}/> :
                        <StarBorderIcon className={'icons'} sx={{fontSize: 15}}/>
                )}

            </div>


        </div>

    );
}

export default Poster;