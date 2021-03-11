import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Male from '../../Photo/male.png'
import Female from '../../Photo/female.png'
import './LeagueDetails.css'
import Facebook from '../../Icon/Facebook.png'
import Twiter from '../../Icon/Twitter.png'
import Youtube from '../../Icon/YouTube.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia, faVolleyballBall, faVenusMars, faStopwatch } from '@fortawesome/free-solid-svg-icons'

const LeagueDetails = () => {
    const { idLeague } = useParams();
    const [details, setDetails] = useState({})
    useEffect(() => {
        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.leagues[0])) 
    }, [idLeague])
    console.log(details)
    return (
        <div className='mainContainer'>
                    <div className='cover-images'>
                        <img className='badges' src={details.strBadge} alt=""/>
                        <img className='banner' src={details.strBanner} alt=""/>
                    </div>

                <div className='container d-flex  '>
                    <div className='innerContainer justify-content-md-around '>
                    <div className='names col'>
                      <h2>{details.strLeague}</h2>
                      <h4><FontAwesomeIcon icon={faStopwatch } /> Founded Year :{details.intFormedYear}</h4>
                       <h4><FontAwesomeIcon icon={faGlobeAsia } /> Country: {details.strCountry}</h4>
                      <h4><FontAwesomeIcon icon={faVolleyballBall } /> Sports Type: {details.strSport}</h4>
                     <h4><FontAwesomeIcon icon={faVenusMars } /> Gender :{details.strGender}</h4>
                     </div>
                    <div className='detaildImage '>
                         {
                         details.strGender === "Male"? <img src={Male} alt=""/> : <img src={Female} alt=""/>
                         }
                     </div>
                    </div>
                     
                 </div>
            <div>
                <Card className="text-center">
                    <Card.Header>{details.strLeague}</Card.Header>
                    <Card.Body>
                        <Card.Title>{details.strDescriptionEN}</Card.Title>
                        <Card.Text>
                            Current Season:{details.strCurrentSeason}
                    </Card.Text>
                        
                    </Card.Body>
                    <Card.Footer className="text-muted">
                    <div className=' social-icon d-flex justify-content-center'>
                            <a href={"https://" + details.strTwitter}  ><img src={Twiter} alt=""/></a>
                            <a href={"https://" + details.strFacebook}  ><img src={Facebook} alt=""/></a>
                            <a href={"https://" + details.strYoutube}  ><img src={Youtube} alt=""/></a>
                        </div>
                    </Card.Footer>
                </Card>
                
                
            </div>
        </div>
    );
};

export default LeagueDetails;