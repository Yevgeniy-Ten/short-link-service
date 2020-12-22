import React from "react";
import {Pane, majorScale, InfoSignIcon, Tooltip, Button, ArrowRightIcon, Text} from "evergreen-ui";
import PropTypes from "prop-types"

const LItem = ({shortLink, link, goToPage, clicks}) => {
    return (
        <Pane marginBottom={majorScale(1)} flex={1} alignItems={"center"}>
            <Tooltip content={link}>
                <InfoSignIcon color={"info"}/>
            </Tooltip>
            <Button onClick={goToPage} height={40} marginLeft={majorScale(2)} iconAfter={ArrowRightIcon}>
                Go to: {shortLink}
            </Button>
            <Text marginLeft={majorScale(1)}>
                Clicks by link: {clicks}
            </Text>
        </Pane>
    );
};
LItem.propTypes = {
    shortLink: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default LItem;
