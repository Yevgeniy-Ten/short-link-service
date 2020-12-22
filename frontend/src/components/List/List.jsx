import React from "react";
import {Pane, Paragraph, majorScale} from "evergreen-ui";
import LItem from "./LItem";
import PropTypes from "prop-types"

const List = ({data, goToPage}) => {
    return (
        <Pane marginY={majorScale(2)}>
            {
                data.length ? data.map(link => (<LItem key={link._id}
                                                       goToPage={goToPage.bind(null, link.short)}
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
    goToPage: PropTypes.func
}

export default List;
