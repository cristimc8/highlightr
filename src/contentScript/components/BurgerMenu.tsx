import {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectBookmarkedVideos} from "../../redux/selectors/bookmarkVideoSelectors";
import {Header} from "../../popup/components/header/Header";

const _width    = "350px";
const _padding  = "20px";

export const BurgerMenu = () => {
    const videos = useSelector(selectBookmarkedVideos)

    useEffect(() => {
        console.log(videos);
    }, [videos])

    return (
        <div style={{position: "fixed", right: 0,
            height: '100vh', backgroundColor: 'white', width: _width, zIndex: 999999999, padding: _padding
        }}>
            <div style={{marginLeft: "20px"}}>
                <Header/>
            </div>
            <hr />
        </div>
    )
}
