import { logo } from '../../assets'

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

export default Header