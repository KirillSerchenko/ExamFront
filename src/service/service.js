export class Service{
    
     getAllServers = async () => {
        const servers = await fetch("http://localhost:5000/servers")
        const data = await servers.json()
        return data
    }

    updateServer = async (id,status) => {
       const result = await fetch(`http://localhost:5000/servers/${id}`, {headers:{ "Content-Type": "application/json; charset=utf-8" },method: 'PATCH',body: JSON.stringify({status:status})})
       return result        
    }
}