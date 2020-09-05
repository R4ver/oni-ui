import { h, render, Fragment } from "preact";
import { useEffect } from "preact/hooks"

import { Avatar, SocialCard } from "Components";

const BODY_STYLE = {
    backgroundColor: "#272727"
}

const applyStyle = (elem, style) => {
    Object.keys(style).forEach( key => {
        const val = style[key]

        elem.style[key] = val;
    })
}

const App = () => {
    useEffect( () => {
        applyStyle(document.body, BODY_STYLE)
    }, [])

    return (
        <>
            <Avatar 
                url="https://static-cdn.jtvnw.net/jtv_user_pictures/a335b3b5-72be-4b3a-bcf7-60997bf92efe-profile_image-70x70.png" 
                isRounded
                />
            <SocialCard
                tag="r4verlive" 
                displayName="RAVER" 
                avatarUrl="https://static-cdn.jtvnw.net/jtv_user_pictures/a335b3b5-72be-4b3a-bcf7-60997bf92efe-profile_image-70x70.png"/>
        </>
    )
}

render(
    <App />,
    document.getElementById("app")
)