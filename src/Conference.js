import {selectPeers, useHMSStore} from "@100mslive/react-sdk";
import React from "react";
import Peer from "./Peer";
import './App.css';

function Conference() {
    const peers = useHMSStore(selectPeers);

    return (
    <div className="room-section">
        <div className="conference-section">
            <div className="peers-container">
                {peers.map((peer) => (
                <Peer key={peer.id} peer={peer} />
                ))}
            </div>
        </div>
    </div>    
    
    )
}

export default Conference;