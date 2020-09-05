import { h, Fragment } from "preact";

import { AVATAR_WRAPPER, AVATAR_ROUNDED, AVATAR_IMAGE } from "./styles";

export const Avatar = ({ url, isRounded }) => (
    <div style={ isRounded ? AVATAR_ROUNDED : AVATAR_WRAPPER } className={`avatar`}>
        <img style={AVATAR_IMAGE} src={url} />
    </div>
)