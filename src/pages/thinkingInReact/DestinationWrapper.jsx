import { useState } from "react"
import DestinationHeader from "./DestinationHeader"
import DestinationList from "./DestinationList"

const DestinationWrapper=(props)=>{
    const [value, setvalue] = useState('')
    const onChange=(e)=>{
        setvalue(e.target.value)
    }

    return(
        <div className="row wrapper">
            <div className="ibox">
                <DestinationHeader filteredText={value} onChange={(e)=>onChange(e)}/>
                <DestinationList destinations={props.destinations} filteredText={value}/>
            </div>
        </div>
    )
}
export default DestinationWrapper