import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Leagues.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router';

const Leagues = (props) => {
       const {strLeague, strLeagueAlternate,strBadge,idLeague} = props.league;
    const history = useHistory()
    
    const exploreMore = () => {
        const url = `/league/${idLeague}`
        history.push(url)
    }
    return (
        
         <div className='singleCard'>
             
             <div className='single col-md-4  '>
            <Card style={{ width: '18rem' }} className='addMore'>
                <Card.Img variant="top" src={strBadge} />
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>
                        {strLeagueAlternate}
                </Card.Text >
                    <div>
                    <Button onClick={() => exploreMore()} variant="primary">Explore</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
         </div>
        
    );
};

export default Leagues;