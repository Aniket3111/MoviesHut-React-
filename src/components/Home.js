import React,{useState,useEffect} from 'react'
import './Home.css'
import PropTypes from 'prop-types'
import Moviebox from './Moviebox'
import Spinner from './Spinner';

const Home=(props)=> {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateResults = async()=>{
        let url=`https://api.themoviedb.org/3/movie/${props.category}?api_key=e148180d79ad4358d3b045dabb589f5d&language=en-US&region=IN&$page=1`;
        setLoading(true);
        let data= await fetch(url);
        let parseddata= await data.json()
        setResults(parseddata.results)
        setLoading(false);
    }
    useEffect(() => {
        updateResults();
        },[])


    return (
        <div className="main">
        <h1 className="text-center" style={{marginTop:'56px' }}>{capitalize(props.category)} Movies</h1>
                 {loading && <Spinner/>}
                
                <div className="movie-container ">
                { results.map((element)=>
                {
                return <div className="col md-3" key={element.url}>
                <Moviebox  title={element.title?element.title:""}  overview={element.overview} 
                poster_path={element.poster_path} vote_average={element.vote_average}
                release_date={element.release_date} popularity={element.popularity} />
                </div>
                })}
                
                </div>
                </div>
    )
}
Home.defaultProps = {
    category: "popular"
}
Home.propTypes = {
    category: PropTypes.string
}

export default Home