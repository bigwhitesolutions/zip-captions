import { createAction, props } from "@ngrx/store";

export const PeerActions = {
  connectSocketServer: createAction('[Peer] Connect Socket Server'),
  socketServerConnected: createAction('[Peer] Socket Server Connected'),
  socketServerUserId: createAction('[Peer] Socket Server User ID Assigned', props<{id: string}>()),
  connectSocketServerFailure: createAction('[Peer] Connect Socket Server Error', props<{error: string}>()),
  
  disconnectSocketServer: createAction('[Peer] Disconnect Socket Server'),
  socketServerDisconnected: createAction('[Peer] Socket Server Disconnected'),
  
  socketServerMessageReceived: createAction('[Peer] Server Message Received', props<{data: any}>()),
  
  createBroadcastRoom: createAction('[Peer] Create Broadcast Room'),
  createBroadcastRoomSuccess: createAction('[Peer] Create Broadcast Room Success', props<{id:string}>()),
  createBroadcastRoomFailure: createAction('[Peer] Create Broadcast Room Failure', props<{error: string}>()),
  
  joinBroadcastRoom: createAction('[Peer] Join Broadcast Room', props<{id: string}>()),
  joinBroadcastRoomSuccess: createAction('[Peer] Join Broadcast Room Success'),
  joinBroadcastRoomFailure: createAction('[Peer] Join Broadcast Room Failure', props<{error: string}>()),
  
  connectPeerServer: createAction('[Peer] Connect Peer Server'),
  peerServerConnected: createAction('[Peer] Peer Server Connected'),
  connectPeerServerFailure: createAction('[Peer] Connect Peer Server Error', props<{error: string}>()),
  disconnectPeerServer: createAction('[Peer] Disconnect Peer Server'),
  peerServerDisconnected: createAction('[Peer] Peer Server Disconnected'), 

  connectToRemotePeer: createAction('[Peer] Connect to Remote Peer', props<{id: string}>()),
  connectToRemotePeerSuccess: createAction('[Peer] Connect to Remote Peer Success'),
  connectToRemotePeerFailure: createAction('[Peer] Connect to Remote Peer Failure', props<{error: string}>()),

  acceptPeerConnection: createAction('[Peer] Accept Peer Connection'),
  acceptPeerConnectionSuccess: createAction('[Peer] Peer Connection Accepted'),
  acceptPeerConnectionFailure: createAction('[Peer] Accept Peer Connection Failure', props<{error: string}>()),
}
