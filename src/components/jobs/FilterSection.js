import React, { useState } from 'react'
import SearchBar from './SearchBar';
import FormModal from '../modals/FormModal';
import '../../styles/_jobFilter.scss';
import '../../styles/style.css';


function FilterSection(props) {

  const[isOpened, setIsOpened] = useState(false);

  console.log(props);
    return (
      <div>
        <div className="filter_section">
          <SearchBar />
              <div className="dropdown_container">
                <div className="dropdown_date">
                  <select className="filter_dropdown" name="date" id="date">
                    <option value="">Newest</option>
                    <option value="">Oldest</option>
                  </select>
                </div> 
                <div className="dropdown_type">
                  <select className="filter_dropdown" name="date" id="">
                    <option value="">Roofing</option>
                    <option value="">Siding</option>
                    <option value="">Windows</option>
                    <option value="">Gutters</option>
                  </select>
                </div>

              </div>
              <button className="filter_btn" onClick={() => setIsOpened(!isOpened)}>Add Job</button> {/*Bring up pop up modal */}
              {isOpened && <FormModal jobs = {props.jobs} addJob={props.addJob} setIsOpened={setIsOpened}/>}
        </div>
      </div>
    )
  
}

export default FilterSection;
