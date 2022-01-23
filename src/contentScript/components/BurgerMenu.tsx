import {useEffect} from "react";
import {useSelector} from "react-redux";
import {Text} from "@chakra-ui/react";
import {selectBookmarkedVideos} from "../../redux/selectors/bookmarkVideoSelectors";
import {Header} from "../../popup/components/header/Header";
import TimestampBox from "./TimestampBox";
import "./burger-menu.css"

export const BurgerMenu = () => {
    const videos = useSelector(selectBookmarkedVideos)

    useEffect(() => {
        console.log("videos: ", videos);
    }, [videos])

    return (
        <div className={"burger-menu"}>
            <div className={"header-container"}>
                <Header style={{marginLeft: "20px"}}/>
            </div>
            <div className={"content"}>
                <Text fontSize={"20px"}>There are <b>{videos?.length}</b> timestamps...</Text>
                {videos?.map(video => <TimestampBox video={video}/>)}
            </div>
        </div>
    )
}
