import React from "react";
import {Pane, majorScale, InfoSignIcon, Tooltip, Button, ArrowRightIcon, Text} from "evergreen-ui";
import {serverURL} from "../../config/axios";
import PropTypes from "prop-types"

const LItem = ({shortLink, link, clicks}) => {
    const shortLinkPath = `${serverURL}/api/shorter/${shortLink}`
    return (
        <Pane marginBottom={majorScale(1)} flex={1} alignItems={"center"}>
            <Tooltip content={link}>
                <InfoSignIcon color={"info"}/>
            </Tooltip>
            <Button is={"a"} href={shortLinkPath}
                    height={40} marginLeft={majorScale(2)} iconAfter={ArrowRightIcon}>
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
