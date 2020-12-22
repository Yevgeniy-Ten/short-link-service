import React, {useRef} from "react";
import {AddIcon, Button, Pane, TextInput} from "evergreen-ui";
import PropTypes from "prop-types"

const Form = ({onSubmit}) => {
    const linkRef = useRef()
    const onSubmitHandler = (e) => {
        e.preventDefault()
        onSubmit(linkRef.current.value)
    }
    return (
        <Pane onSubmit={onSubmitHandler} is={"form"} display={"flex"} height={64}>
            <TextInput ref={linkRef} width="100%" height={48} placeholder="Paste your link"/>
            <Button height={48}
                    width={200}
                    appearance={"primary"}
                    intent={"success"}
                    iconBefore={AddIcon}
                    marginLeft={16}>IN SHORT</Button>
        </Pane>
    );
};

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Form;
