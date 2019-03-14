import React from 'react';
import {Button} from 'react-bootstrap'
import {Service} from '../../service/service'
import {connect} from 'react-redux'
import * as actions from '../../actions/actions' 


const ToogleButton = (props) => <Button variant={props.status == "on"?"success":"danger"} onClick={async()=>{
    const status = props.status == "on"?"off":"on"
    const service = new Service()
    props.fetching(true)
    const res = await service.updateServer(props.id ,status)
    const data = await service.getAllServers()
    props.setServers(data)
    props.fetching(false)
}}>{props.status}</Button>

export default connect(null,actions)(ToogleButton)




