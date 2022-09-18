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
export default SearchComponent