
const initialState={
   servers:[],
   isFetching:false,
   buttonClicked:false,
}


const reducer = (state=initialState,action) => {
    
    switch (action.type){
        
        case("setServers"):{
            const servers = []
            action.payload.forEach(server => servers.push(server))
            return{
                ...state,
                servers,
            }
        }
        
        case("buttonClicked"):{
            console.log("Button Clicked")
            return{
                ...state
            }

        }


        case("isFetching"):{
            return{
                ...state,
                isFetching:action.isFetching
            }
        }
        
        default: return state
    }

}

export default reducer