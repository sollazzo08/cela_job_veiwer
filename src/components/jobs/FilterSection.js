import React, { useState } from 'react'
import SearchBar from './SearchBar';
import '../../styles/style.css';
import '../../styles/_filters.scss';
import FormModal from '../modals/FormModal';

function FilterSection(props) {

  const[isOpened, setIsOpened] = useState(false);

  console.log(props);
    return (
      <div>
        <div className="filter_section">
          <SearchBar />
              <div className="dropdowns">
                <div className="dropdown_date">
                  <select className="dropdown" name="date" id="date">
                    <option value="">Newest</option>
                    <option value="">Oldest</option>
                  </select>
                </div> 
                <div className="dropdown_type">
                  <select className="dropdown" name="date" id="">
                    <option value="">Roofing</option>
                    <option value="">Siding</option>
                    <option value="">Windows</option>
                    <option value="">Gutters</option>
                  </select>
                </div>

              </div>
              <button className="btn" onClick={() => setIsOpened(!isOpened)}>Add Job</button> {/*Bring up pop up modal */}
              {isOpened && <FormModal jobs = {props.jobs} addJob={props.addJob} setIsOpened={setIsOpened}/>}
        </div>
      </div>
    )
  
}

export default FilterSection;
