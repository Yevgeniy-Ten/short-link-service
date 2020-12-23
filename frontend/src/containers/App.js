import React, {useEffect} from "react";
import Header from "../components/Header/Header";
import {Pane, majorScale} from "evergreen-ui";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import List from "../components/List/List";
import {createShortLink, getAllLinks, goToPageByLink} from "../redux/shorterActions";
import ShortForm from "../components/ShortForm/Form";
import {Switch, Route, Redirect} from "react-router-dom"
import AuthForm from "../components/AuthForm/AuthForm";
import {login, refreshToken, register} from "../redux/authActions";
import {logout} from "../redux/authSlice"


// P.S когда доделал понял что proptypes не работает
function App() {
    const {links, isLoad: linkIsLoad, isSended: linkIsCreated} = useSelector(state => state.shorter, shallowEqual)
    const {isAuth, isSended, isLoad} = useSelector(state => state.auth, shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(refreshToken())
    }, [dispatch])
    useEffect(() => {
        if (isAuth) {
            dispatch(getAllLinks())
        }
    }, [isAuth, dispatch])
    const createLink = (link) => dispatch(createShortLink(link))
    const goToPage = (shortLink) => dispatch(goToPageByLink(shortLink))
    const onRegistration = (data) => dispatch(register(data))
    const onLogin = (data) => dispatch(login(data))
    const onLogout = () => dispatch(logout())
    return (
        <>
            <Header onLogout={onLogout} isAuth={isAuth}/>
            <Pane maxWidth={1140} paddingY={majorScale(2)} marginX={"auto"}>
                <Switch>
                    {
                        !isAuth ? <Route exact path={"/auth"}>
                            <AuthForm isSended={isSended} isLoad={isLoad} onRegistartion={onRegistration}
                                      onLogin={onLogin}/>
                        </Route> : <Route exact path="/">
                            <ShortForm isLoad={linkIsLoad} isCreated={linkIsCreated} onSubmit={createLink}/>
                            <List goToPage={goToPage} data={links}/>
                        </Route>
                    }
                    <Redirect to={isAuth ? "/" : "/auth"}/>
                </Switch>
            </Pane>
        </>
    );
}

export default App;
