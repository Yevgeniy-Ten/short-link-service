import React from "react";
import {Heading, Pane} from "evergreen-ui";

const Header = () => {
    return (
        <Pane background={"blueTint"} padding={24}>
            <Pane flex={1} alignItems="center" display="flex">
                <Heading color={"dark"} size={700}>Short your link:)</Heading>
            </Pane>
        </Pane>
    );
};

export default Header;
