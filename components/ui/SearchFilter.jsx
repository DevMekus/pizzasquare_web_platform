"use client"

const SearchFilter = () => {
    const searchProduct = function(value){}
    const toggleFilters = function(){}


  return (
    <div className="search-filter">
        <div className="search-box">
            <input type="text" placeholder="Search menu..." onInput={()=>searchProduct(this.value)}/>
        </div>
        <button className="filter-btn">
            <span>⚙️</span>
            <span>Filters</span>
        </button>
    </div>
  )
}

export default SearchFilter
