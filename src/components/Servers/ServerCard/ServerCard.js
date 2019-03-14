import React from 'react';
import {Card} from 'react-bootstrap'
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions'
import ToogleButton from '../../ToogleButton/ToogleButton'
import style from './ServerCard.module.css'

const ServerCard= ({clicked,id,name,ip,hosting,status,time,services}) =><Card className={style.card} style={{ width: '18rem',margin:"10px",boxShadow:"7px 8px 9px grey" }}>
                                    <Card.Body>
                                    <Card.Title>Server Name:{name}</Card.Title>
                                    
                                    <Card.Text>
                                        <span>Ip:{ip}</span>
                                        <span>Hosting:{hosting}</span>
                                        <span>Status:{status}</span>
                                        <span>Time:{time}</span>
                                        
                                        {services.map((service,ind)=><span key={ind} style={{color:"red" ,fontSize:"11px",textShadow:"1px 2px 3px red"}}>
                                            <span>Service Name:{service.name}</span>
                                            <span>Service Date:{service.date}</span>
                                            <span>Service Status:{service.status}</span>
                                            <span>Service Last Update:{service.lastUpdate}</span>
                                        </span>)}
                                    </Card.Text>
                                    {clicked?null:<ToogleButton id={id} status={status}/>}
                                    </Card.Body>
                                    </Card>


export default connect(null,actions)(ServerCard)
    


