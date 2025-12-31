# WB Diagram Board Collab Server

y-websocket server for real-time collaboration in WB Diagram Board.

## Deploy to Render

1. Push this folder to GitHub repo `wb-diagram-board-collab-server`
2. Go to [render.com](https://render.com) → New → Web Service
3. Connect your GitHub repo
4. Render will auto-detect `render.yaml` and configure everything
5. Click "Create Web Service"
6. Copy the URL (e.g., `https://wb-diagram-board-collab-server.onrender.com`)

## Local Development

```bash
npm install
npm start
```

Server runs on `ws://localhost:1234`
