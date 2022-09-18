import React from 'react'
import { useState } from 'react'
import { logo } from '../../assets'
import './style.css'




const AppComponent = (props) => {
  return (
    <React.Fragment>
        <Header />
        <DestinationWrapper destinations={props.destinations} />
    </React.Fragment>
  )
}

export default AppComponent


const Header=()=>{
    return(
        <div className="row border-bottom">
            <nav className="navbar navbar-fixed-top" id="navbar-wrapper" role="navigation">
            <div className="left">
                <span className="hams">☰</span>	
                <img className='logo' src={logo} alt='logo' />
            </div>
            <div className="right">
                <i className="fa fa-commenting fa-lg"></i>
                <i className="fa fa-bell fa-lg"></i>
                <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                    <span className="color-text-color dropdown-top-accountname">E-commerce Demo </span>
                </a>
            </div>
            </nav>
        </div>
    )
}

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

const SearchComponent=(props)=>{
    return(
        <div className="row justify-content-md-center">
            <div className="col-md-6">
                <div className="input-group m-b">
                    <span className="input-group-addon">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </span>
                    <input type="text" name="search" value={props.filteredText} onChange={(e)=>props.onChange(e)} placeholder="Search destinations" className="form-control"/>
                </div>
            </div>
        </div>
    )
}

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