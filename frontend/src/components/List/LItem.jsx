import React from "react";
import {Pane, majorScale, InfoSignIcon, Tooltip, Button, ArrowRightIcon} from "evergreen-ui";

const LItem = ({shortLink, link}) => {
    return (
        <Pane marginBottom={majorScale(1)} flex={1} alignItems={"center"}>
            <Tooltip content={link}>
                <InfoSignIcon color={"info"}/>
            </Tooltip>
            <Button height={40} marginLeft={majorScale(2)} iconAfter={ArrowRightIcon}>
               Go to: {shortLink}
            </Button>
        </Pane>
    );
};

export default LItem;
