import { FunctionComponent } from "preact";
import {Video} from "../types.ts";

type Props = {videos: Video[]; userid: string;};

const VideoList: FunctionComponent <Props> = ({videos, userid}) =>{
    return(
        <div >
            
        </div>
    );
};

export default VideoList;