import React, {useState} from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({placeholder, data}) {

    const [filteredData, setFilteredData] = useState([]);
    const [input, setInput] = useState("");
// if there's an input in the search box display the search item if not dont display
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setInput(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord ===""){
            setFilteredData([]);
        }else{
            setFilteredData(newFilter);
        }
    };
//function for Clearbutton to clear out input
    const clearInput = () => {
        setFilteredData([]);
        setInput("");
    };
    return (
        <div>
            {/* Search Box which filter the title of the articles */}
            <div className="search">
                <div className="searchInputs">
                    <input type="text" placeholder={placeholder} value={input} onChange={handleFilter}/>
                    <div className="searchIcon">
                        {filteredData.length === 0? <SearchIcon/> : <CloseIcon id="clearButton" onClick={clearInput}/>}
                    </div>
                </div>
                
                {/* resultbox which list all the top 10 title from data */}
                {filteredData.slice(0, 10).length !== 0 &&(
                <div className="dataResult">
                    {filteredData.map((value, key) => {
                        return <div className="dataItem">
                            <p>{value.title}</p>
                        </div>;
                    })}
                </div>)}
            </div>
        </div>
    )
}

export default SearchBar
