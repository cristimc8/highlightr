import { FaTrashAlt } from 'react-icons/fa';
import { secondsToVideoTimestamp } from "../../services/utils/utils";

const BoxStyles = {
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    width: "95%",
    margin: "10px 0",
    borderRadius: "20px",
}

// video obj example
// {
//     bookmarkTitle: ""
//     secondsPassed: 1.046622
//     thumbnailUrl: "https://i.ytimg.com/vi/U9UfLibSjNw/hqdefault.jpg"
//     timestamp: "2022-01-23T15:33:08.772Z"
//     title: "Genos Flirts with Fubuki"
//     url: "https://www.youtube.com/watch?v=U9UfLibSjNw"
//     videoId: "U9UfLibSjNw"
//     videoUrlAtSavedTime: "https://www.youtube.com/watch?v=U9UfLibSjNw&t=1"
// }

const TimestampBox = ({video, ...props}) => {
    return (
        <div style={BoxStyles}>
            <div style={{
                display: "flex",
                padding: "25px 20px",
                flexWrap: "nowrap",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    flexGrow: "1",
                }}>
                    <img style={{maxWidth: "100px"}}
                         src={video.thumbnailUrl}/>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    flexGrow: "2",
                    margin: "5px 10px"
                }}>
                    <span style={{
                        fontSize: '14px',
                        fontWeight: 'bold'
                    }}>{video.title}</span>
                    {video.bookmarkTitle}
                    <span style={{fontSize: '12px'}}>this is the bookmarked title</span>
                    <span
                        style={{width: "100%", fontSize: "12px"}}>{secondsToVideoTimestamp(video?.secondsPassed)}</span>
                    <progress style={{width: '100%'}} value={video?.secondsPassed / 335 * 100}/>
                </div>
                <FaTrashAlt/>
            </div>
        </div>
    )
}

export default TimestampBox;
