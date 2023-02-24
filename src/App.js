import React from "react";
import './App.css';
import Content from "./components/Сontent/content";
import Navbar from "./components/Navbar/navbar";
import Categories from "./components/Categories/categories";
import {Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import Sort from "./components/Sort/sort";
import Footer from "./components/Footer/footer";
import Film from "./components/Movie/film";

const API_KEY = 'fa72ca6d-d9de-48b0-b4c4-5b9956921fea'

const API_URL = {
    'Фильмы': 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=',
    'Search': 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=',
    'Новинки': 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1',
    'Top-100': 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=',
}

function App() {
    const [api_url, setApiUrl] = React.useState(API_URL['Фильмы'])
    const [allMovieData, setMovieData] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    const [page, setPage] = React.useState(1)
    const [nameSort, setNameSort] = React.useState('Фильмы')
    const [content, setContent] = React.useState(true)
    const [film,setFilm] = React.useState()


    React.useEffect(() => {
        getMovies(api_url, page)
        console.log('useEffect')
    }, [])


    const newApiUrl = (id,name=undefined) => {
        setNameSort(id)
        showContent(true)
        console.log(id,name)
        if(name !== undefined){
            setApiUrl(API_URL[name]+id+'&page=')
            getMovies((API_URL[name]+id+'&page='),page)}

        else {
            setApiUrl(API_URL[id])
            getMovies(API_URL[id],page)
        }


    }


    const nextPage = (pages) => {
        console.log('nextPage',pages)


        if (pages === '>') {

            setPage((prev) => prev + 1)
            getMovies(api_url, page + 1)
        } else if (pages === '<') {
            setPage((prev) => prev - 1)
            getMovies(api_url, page - 1)

        } else {
            setPage((prev) => pages)
            getMovies(api_url, pages)

        }

    }

    const getMovies = (api_url, page) => {
        console.log('getMovies')
        setLoading(true)
        axios.get(api_url + String(page), {
            headers: {
                "Content-Type": "application/json", "X-API-KEY": API_KEY
            }
        })
            .then(res => {
                console.log(res.data)
                setMovieData(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log('err')
            })


    }


    /*   async function getMovies() {
           try {
               setLoading(true)
               const response = await axios.get(API_URL_top_100 + String(page), {
                   headers: {
                       "Content-Type": "application/json", "X-API-KEY": API_KEY
                   }
               })

               const resps = await response.data
               console.log(resps)
               setMovieData(resps)
               setLoading(false)

           } catch (err) {
               console.log(err)
           }
       }

     */

    /*
        async function getMovies(url) {
            try {
                setLoading(true)
                const resp = await fetch(API_URL_top_100 + String(page), {
                    headers: {
                        "Content-Type": "application/json", "X-API-KEY": API_KEY
                    }
                })
                const resps = await resp.json()
                setMovieData(resps)
                setLoading(false)

            } catch (err) {
                console.log('err')
            }
        }

     */

    /*  async function getMovies() {
          try {
              setLoading(true)
              let response = await axios.get('./response_1676561294416.json')
              setMovieData(response.data)
              setLoading(false)
          } catch (err) {
              console.log(err)
          }
      }

     */
    const showContent = (status) => {

        setContent(status)

    }

    const showFilm = (film) => {
        setFilm(film)


    }


    return (
        <div className="App">

            <Container>
                <Row>
                    <Navbar
                        stateAPI_URL={newApiUrl}
                        search_API_URL={newApiUrl}/>
                </Row>
                <Row>
                    <Col className='p-0 ' xs={9}>
                        <Sort
                            nameSort={nameSort}/>
                        {(content) ?<Content
                            Movies={(!loading) ? allMovieData.films : undefined}
                            onPage={nextPage}
                            pagesCount={allMovieData.pagesCount}
                            Content={showContent}
                            Film = {showFilm}
                        />:
                        <Film
                        Film = {film}
                        />}


                    </Col>
                    <Col className='p-0' xs={3}>
                        <Categories
                            category_API_URL={newApiUrl}/>
                    </Col>
                </Row>
                <Row>
                    <Footer/>
                </Row>
            </Container>


        </div>);
}

export default App;
