import Destination from "./Destination";

const DestinationList=(props)=>{
    const rows = [];
    props.destinations.forEach((destination)=>{
        if(destination.name.indexOf(props.filteredText)===-1) {
            return
        }
        rows.push(destination)
    })
    
    return(
        <div className="row p-4">
            <Destination destinations={rows} />
        </div>
    )
}

export default DestinationList