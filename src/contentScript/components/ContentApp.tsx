import {BookmarkButton} from "./BookmarkButton";
import React, {useState} from "react";
import {BurgerMenu} from "./BurgerMenu";

/**
 * Injected in the youtube page with access to html
 * @constructor
 */
export const ContentApp = () => {

    const [burgerVisible, setBurgerVisible] = useState(false);

    return (
        <>
            <BookmarkButton setBurgerVisible={setBurgerVisible}/>
            {burgerVisible && <BurgerMenu />}
        </>
    )
}
