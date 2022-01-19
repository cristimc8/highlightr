import {BookmarkButton} from "./BookmarkButton";
import React, {useEffect, useState} from "react";
import {BurgerMenu} from "./BurgerMenu";

/**
 * Injected in the youtube page with access to html
 * so you can use shit like document.getElementById
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
