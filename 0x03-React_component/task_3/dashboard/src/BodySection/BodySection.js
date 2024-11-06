import PropTypes, { string } from "prop-types";
import { React, Component }from "react";

class BodySection extends Component{
    render(){
        const {title, children} = this.props

        return(
            <>
            <div className="BodySection">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
            </>
        )
    }

}

BodySection.PropTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType[PropTypes.string, PropTypes.element, PropTypes.node]
}
export default BodySection;