import React, { useState } from "react"
import { Modal } from 'react-bootstrap'

const Destination=(props)=>{
    const [isOpen, setisOpen] = useState(false)
    const [selectedDestination, setselectedDestination] = useState(0)
    const closeModal=()=>{
        setisOpen(false)
    }
    const openModal=(id)=>{
        setisOpen(true)
        setselectedDestination(id)
    }
    return(
        <React.Fragment>
        {props.destinations.map((destination)=>
            <div key={destination.id} className="col-md-3" onClick={(e)=>openModal(destination.id)}>
                <div className="row">
                <div className="col-md-12 intergration_tools hover">
                    <span className='inter_details'>
                        <div className="row">
                            <div className="col-md-12 text-end">
                                <i className="fa fa-lg fa-check-circle margin-top-10" aria-hidden="true" style={{verticalAlign: '-12px'}}></i>
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
                            <center><h3 className="inter_details">View details</h3></center>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center align-items-center">
                        <i className="fa fa-cog fa-lg color-cog" data-toggle="tooltip" title="Settings" data-placement="bottom"></i>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )}

        <Modal show={isOpen} onHide={closeModal} size='lg' centered>
            
            <Modal.Body>
                <div className="row">
                    <div className="col-md-3 border_line">
                        <center>
                            <img className="line_image" src={props.destinations[selectedDestination].images.left}/>
                        </center>
                    </div>
                    <div className="col-md-9">
                        <Modal.Header closeButton style={{whiteSpace: 'nowrap'}}>
                            <Modal.Title>{props.destinations[selectedDestination].name + ' Customization'}</Modal.Title>
                        </Modal.Header>
                        <div style={{marginTop: '20px'}}>
                            <div className="row">
                                <div className="col-md-12">
                                    {props.destinations[selectedDestination].settings_available.map((item)=>
                                        <div className="navigation_section next">
                                            <div className="row">
                                                <div className="col-md-11">
                                                    <h3 className="nav_header_inter">{item === 'config' ? 'Configuration Settings' : item === 'workflow' ? 'Setup Event Workflow' : item === 'source_config' ? 'Configure Source Data' : item === 'path' ? 'Setup trigger path' : null}</h3>
                                                    <p className="nav_header_label">{item === 'config' ? 'Setup configuration details for this integration.' : item === 'workflow' ? 'You can customize which events data to be sent to this integration.' : item === 'source_config' ? 'Control data flow from the particular source' : item === 'path' ? 'You can customize the path where this integration will be included.' : null}</p>
                                                </div>
                                                <div className="col-md-1">
                                                <i class="fa fa-2x fa-chevron-right styling_inter_fixing" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
        </React.Fragment>
    )
}
export default Destination