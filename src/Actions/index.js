import io from 'socket.io-client';
const socket = io();

socket.on('server request', (payload) => updateDataSet(payload));

export const updateDataSet = (payload) {
  console.log(" Action getting triggered....");
};
