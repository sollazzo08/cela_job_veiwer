import React from "react";
import '../../styles/_pagination.scss';

const Pagination = () => {
    return(
        <div className="pagination">
          <ul>
            <li>Prev</li>
            <li>1</li>
            <li>2</li>
            <li className="active">3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>Next</li>
          </ul>
        </div>
    );
};

export default Pagination;