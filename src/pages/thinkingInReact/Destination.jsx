const Destination=(props)=>{
    return(
        props.destinations.map((destination)=>
            <div className="col-md-3">
                <div className="row">
                <div className="col-md-12 intergration_tools hover">
                    <span className='inter_details'>
                        <div className="row">
                            <div className="col-md-12 text-end">
                                <i class="fa fa-lg fa-check-circle margin-top-10" aria-hidden="true" style={{verticalAlign: '-12px'}}></i>
                            </div>
                        </div>
                        <div className="row inter_image_custom">
                            <div className="col-md-12">
                                <center><img className='int_image_custom' src={destination.images.logo} /></center>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <center>
                                    <h3 className='inter_name'>{destination.name}</h3>
                                    <div className="inter_label">
                                        Send data to {destination.name}
                                    </div>
                                </center>
                            </div>
                        </div>
                    </span>
                    <div className="row bottom_inter">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <center><h3 class="inter_details">View details</h3></center>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center align-items-center">
                        <i class="fa fa-cog fa-lg color-cog" data-toggle="tooltip" title="Settings" data-placement="bottom"></i>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
        )
        
    )
}
export default Destination