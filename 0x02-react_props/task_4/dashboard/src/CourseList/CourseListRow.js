import React from "react";
import PropTypes from "prop-types";
const CourseListRow = ( {isHeader= false,textFirstCell,textSecondCell= null} ) => {

        if (isHeader){
            if (textSecondCell === null)
            {
                return(
                    <tr key="">
                    <th colSpan="2">{ textFirstCell} </th>
                    </tr>
                );
            }
            if (textSecondCell !== null)
                return(
                    <tr key="">
                        <th>
                            {textFirstCell}
                        </th>
                        <th>
                            {textSecondCell}
                        </th>
                    </tr>
                );
            
        }
        else {
            return(
                <tr key="">
                    <td>
                        {textFirstCell}
                    </td>
                    <td>{textSecondCell}</td>
                </tr>

            );
            
        }
    };

        
 

CourseListRow.PropTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string, 
};

 
export default CourseListRow;