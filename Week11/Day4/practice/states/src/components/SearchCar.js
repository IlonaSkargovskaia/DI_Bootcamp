const SearchCar = (props) => {
    console.log(props);
    const {list, handleChange} = props;
    return (
        <>
        <select id ="mySelect" onChange={handleChange}>
           
            {
                list.map(item => {
                    return (
                        <option value={item.brand} key={item.id}>{item.brand}</option>
                        
                    )
                })
            }
           
        </select>
            
        </>
    )
}

export default SearchCar;