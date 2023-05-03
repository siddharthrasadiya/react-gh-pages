import React from 'react';
import {useParams} from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// http://192.168.1.30:3000/room/siddharth
export default function Room() {
    const {roomId} = useParams();
    const myMeeting = async (element)=> {
        const appID = 1238511554;
        const serverSecret = "c40a5ba57764a08445c18176185f716d";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "siddharth");
        const zc = ZegoUIKitPrebuilt.create( kitToken);
        zc.joinRoom({
            container:element,
            sharedLinks:[{
                name: 'copy link',
                url: window.location.protocol + '//' + 
                window.location.host + window.location.pathname +
                 '?roomId=' +
                 roomId,
            }],
            scenario:
            {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true,
            turnOnMicrophoneWhenJoining: false,
            turnOnCameraWhenJoining:false,
            useFrontFacingCamera: true
        });
    };
  return (
    <div ref={myMeeting}>
    </div>
  )
}
