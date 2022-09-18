import SearchComponent from "./SearchComponent"

const DestinationHeader=(props)=>{
    return(
        <div className="row">
            <div className="col-md-8">
                <h3 className="displaybl">Destinations</h3>
                <label className="integration_label">We send your data to any tools you like.</label>
            </div>
            <div className="col-md-4">
                <img className='img_integrate' src='https://app.customerlabs.com/static/Img/Groupintegrate.svg' alt="group" />
            </div>
            <SearchComponent filteredText={props.filteredText} onChange={(e)=>props.onChange(e)}/>
        </div>
    )
}

export default DestinationHeader