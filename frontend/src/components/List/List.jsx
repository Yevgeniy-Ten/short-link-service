import React from "react";
import {Pane, Paragraph, majorScale} from "evergreen-ui";
import LItem from "./LItem";
import PropTypes from "prop-types"

const List = ({data}) => {
    return (
        <Pane marginY={majorScale(2)}>
            {
                data.length ? data.map(link => (<LItem key={link._id}
                                                       shortLink={link.short}
                                                       clicks={link.clicks}
                                                       link={link.main}/>)) :
                    <Paragraph size={400}>
                        No links items
                    </Paragraph>
            }
        </Pane>
    );
};

List.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        short: PropTypes.string.isRequired,
        main: PropTypes.string.isRequired
    })),
}

export default List;
