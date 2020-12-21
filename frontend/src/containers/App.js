import React from "react";
import Header from "../components/Header/Header";
import {Pane, majorScale} from "evergreen-ui";
import Form from "../components/Form/Form";
import {shallowEqual, useSelector} from "react-redux";
import List from "../components/List/List";

function App() {
    const {links} = useSelector(state => state.shorter, shallowEqual)
    return (
        <>
            <Header/>
            <Pane maxWidth={1140} paddingY={majorScale(2)} marginX={"auto"}>
                <Form/>
                <List data={links}/>
            </Pane>
        </>
    );
}

export default App;
