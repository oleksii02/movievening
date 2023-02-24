import React from 'react';
import './content.css'
import Poster from "../UI/Poster/poster";
import MyPagination from "../UI/myPagination/myPagination";

const Content = ({Movies, onPage, pagesCount, Content,Film}) => {


    return (<div className={'content'}>

        <div>
            <div className='content_window'>

                {/*(!props.Movies) ? console.log('loading') : console.log(props.Movies)*/}
                {(!Movies) ? <h1>loading</h1> :
                    Movies.map(movie => (
                        <Poster
                            movie={movie}
                            Content={Content}
                            Film={Film}


                        />
                    ))}
            </div>
            <MyPagination
                onPage={onPage}
                pagesCount={pagesCount}

            />
        </div>


    </div>);
}


export default Content