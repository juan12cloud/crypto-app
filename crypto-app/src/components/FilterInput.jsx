const FilterInput = ({filter, onFilterChange}) =>{
    return(
        <div className="Filter">
            <input 
                type= "text"
                value={filter}
                placeholder= "Filter coins ny name or symbol"
                onChange={(e) => onFilterChange(e.target.value)}
            />
        </div>


    )


}


export default FilterInput