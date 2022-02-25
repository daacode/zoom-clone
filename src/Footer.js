import React from "react";
import { useAVToggle } from "@100mslive/react-sdk";
import {
    selectIsConnectedToRoom,
    useHMSActions,
    useHMSStore
  } from "@100mslive/react-sdk";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneSlash, faMicrophone, faVideo, faVideoSlash, 
         faUserPlus, faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {

    const isConnected = useHMSStore(selectIsConnectedToRoom);
    const hmsActions = useHMSActions();

    const {isLocalAudioEnabled,
    isLocalVideoEnabled,
    toggleAudio,
    toggleVideo
    } = useAVToggle();

    return (
        <div className="main_control">
            <div className="main_controls_section">
                <div className="main_controls_button" onClick={toggleAudio}>
                {isLocalAudioEnabled ? (
                <><FontAwesomeIcon icon={faMicrophoneSlash} size="lg" /><span>UnMute</span></>
                
                ): (
                <><FontAwesomeIcon icon={faMicrophone} size="lg" /><span>mute</span></>
                )}
               
               
                </div>

                <div className="main_controls_button" onClick={toggleVideo}>
                {isLocalVideoEnabled ? (
                <><FontAwesomeIcon icon={faVideoSlash} size="lg" /><span>Stop Video</span></>
                ): (
                <><FontAwesomeIcon icon={faVideo} size="lg" /><span>Start Video</span></>
                )}
                </div>

            </div>

            <div className="main_controls_section">
                <div className="main_controls_button">
                    <FontAwesomeIcon icon={faUserPlus} size="lg" />
                    <span>Participants</span>
                </div>
                <div className="main_controls_button">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare}  size="lg" />
                    <span>Share Screen</span>
                </div>
                <div className="main_controls_button">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Chat</span>
                </div>
                <div className="main_controls_button">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Reactions</span>
                </div>
                <div className="main_controls_button">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Settings</span>
                </div>
                <div className="main_controls_button">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>More</span>
                </div>
            </div>

            <div className="main_controls_section">
              <div className="main_controls_button">
                    {isConnected && (
                        <button
                        id="leave-btn"
                        class="btn-danger"
                        onClick={() => hmsActions.leave()}
                        >
                        Leave
                        </button>
                    )}
             </div>
            </div>

            

            {/* <button className="btn-control" onClick={toggleAudio}>
                {isLocalAudioEnabled ? "Mute" : "Unmute"}
            </button>
            <button className="btn-control" onClick={toggleVideo}>
                {isLocalVideoEnabled ? "Hide" : "Unhide"}
            </button>
            {isConnected && (
                <button
                id="leave-btn"
                class="btn-danger"
                onClick={() => hmsActions.leave()}
                >
                Leave Room
                </button>
            )} */}
            
        </div>
        
    )
}   

export default Footer;