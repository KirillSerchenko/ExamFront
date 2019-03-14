import React,{Component} from 'react';
import {Container,Row} from 'react-bootstrap'
import Servers from '../Servers/Servers'
import {connect} from 'react-redux'
import {Service} from '../../service/service'
import * as actions from '../../actions/actions'


class App extends Component{

    async componentDidMount(){
        const service = new Service()
        this.props.fetching(true)
        const data= await service.getAllServers()
        this.props.setServers(data)
        this.props.fetching(false) 
    }

    render(){    
        return(
            <Container>
            <Row>
                <Servers />
            </Row>  
        </Container>
        )
    }                        
}




export default connect(null,actions)(App)