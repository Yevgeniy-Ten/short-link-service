import React from "react";
import {Heading, Pane, Button} from "evergreen-ui";

const Header = ({onLogout, isAuth}) => {
    return (
        <Pane background={"blueTint"} padding={24}>
            <Pane flex={1} alignItems="center" display="flex" justifyContent={"space-between"}>
                <Heading color={"dark"} size={700}>Short your link:)</Heading>
                {isAuth && <Button appearance={"minimal"} height={40} onClick={onLogout}>
                    Logout
                </Button>}
            </Pane>
        </Pane>
    );
};

export default Header;
