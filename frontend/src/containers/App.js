import React, {useEffect} from "react";
import Header from "../components/Header/Header";
import {Pane, majorScale} from "evergreen-ui";
import Form from "../components/Form/Form";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import List from "../components/List/List";
import {createShortLink, getAllLinks, goToPageByLink} from "../redux/shorterActions";

function App() {
    const {links} = useSelector(state => state.shorter, shallowEqual)
    const dispatch = useDispatch()
    const createLink = (link) => dispatch(createShortLink(link))
    const goToPage = (shortLink) => dispatch(goToPageByLink(shortLink))
    useEffect(() => {
        dispatch(getAllLinks())
    }, [dispatch])
    return (
        <>
            <Header/>
            <Pane maxWidth={1140} paddingY={majorScale(2)} marginX={"auto"}>
                <Form onSubmit={createLink}/>
                <List goToPage={goToPage} data={links}/>
            </Pane>
        </>
    );
}

export default App;
