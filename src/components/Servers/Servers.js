import React from 'react';
import ServerCard from './ServerCard/ServerCard'
import {connect} from 'react-redux'
import {Row,Button} from 'react-bootstrap'
import {loader} from './Spinner.module.css'






class Servers extends React.Component{

    state = {
        copyServers:[],
        clicked:false
    }



    filter=(type)=>{
     const copy = this.props.servers.filter(server => server.status == type)
     this.setState({clicked:true,copyServers:copy})
    }

    reset = () => this.setState({clicked:false})

    sort=()=>{
        const copy = this.props.servers.sort( (a,b) => a.time < b.time)
        this.setState({clicked:true,copyServers:copy})
       }

    render(){
        let {isFetching,servers} = this.props
        if(this.state.clicked==true){
            servers=this.state.copyServers
        }
        return(
           <>
           <Row style={{width:"100%"}}>
            <Button variant="success" onClick={()=>this.filter('on')} style={{marginLeft:"40%"}} >Only ON</Button>
            <Button variant="danger" onClick={()=>this.filter('off')}>Only OFF</Button>
            <Button variant="warning" onClick={this.reset}>RESET</Button>
            <Button variant="primary" onClick={this.sort}>SORT</Button>
         </Row>
         
            <Row>{isFetching?<div className={loader}>Loading...</div>: servers.map((server,ind) => <ServerCard
                                                                        key={ind}
                                                                        clicked={this.state.clicked} 
                                                                        id={server._id}  
                                                                        name={server.name}
                                                                        ip={server.ip}
                                                                        hosting={server.hosting}
                                                                        status={server.status}
                                                                        time={server.time}
                                                                        services={server.services}
                                                                />)}</Row>
                
        </>
        )
    }

}                                                         
    

const mapStateToProps = state => ({isFetching:state.isFetching,servers:state.servers})
export default connect(mapStateToProps)(Servers)
