/**
 * y-websocket server for WB Diagram Board collaboration
 * 
 * Deploy to Render.com (free tier)
 */

import { WebSocketServer } from 'ws';
import { setupWSConnection } from 'y-websocket/bin/utils';

const PORT = process.env.PORT || 1234;

const wss = new WebSocketServer({ port: PORT });

wss.on('connection', (ws, req) => {
  console.log(`[${new Date().toISOString()}] New connection from ${req.socket.remoteAddress}`);
  setupWSConnection(ws, req);
});

wss.on('listening', () => {
  console.log(`✅ y-websocket server running on port ${PORT}`);
});

// Keep alive for Render
setInterval(() => {
  console.log(`[${new Date().toISOString()}] Active connections: ${wss.clients.size}`);
}, 60000);
