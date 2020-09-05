import { h, Fragment } from "preact";

import { Avatar } from "Components"

import { CARD_WRAPPER } from "./styles"

export const SocialCard = ({tag, displayName, avatarUrl, roundedCorners}) => (
    <div className="card-wrapper" style={{
        ...CARD_WRAPPER,
        borderRadius: roundedCorners ? roundedCorners : "0px"
    }}>
        <div className="card-header" style={{}}>
            <Avatar 
                url={avatarUrl} 
                isRounded
                />
        </div>
        <div classname="card-body">
            <p>{displayName}</p>
            <p>@{tag}</p>
        </div>
    </div>
)