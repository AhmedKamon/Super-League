import React, { useEffect, useState } from 'react';
import Leagues from '../Leagues/Leagues';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../Header/Header';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    // let newLeague = setLeagues.slice(0,9)
    
    
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England'
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.countrys))
        
    }, [])
    return (

        <div>
            <Header></Header>
            <div className='row'>
                {
                    leagues.map(league => <Leagues league={league}></Leagues>)
                }
            </div>
        </div>
    );
};

export default Home;