import React from "react";
import {AddIcon, Button, Pane, TextInput} from "evergreen-ui";

const Form = () => {
    return (
        <Pane is={"form"} display={"flex"} height={64}>
            <TextInput width="100%" height={48} placeholder="Paste your link"/>
            <Button height={48}
                    width={200}
                    appearance={"primary"}
                    intent={"success"}
                    iconBefore={AddIcon}
                    marginLeft={16}>IN SHORT</Button>
        </Pane>
    );
};

export default Form;
