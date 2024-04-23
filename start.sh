#!/bin/bash

# Define the port number
PORT=8001

# Start the Python HTTP server in the background
python3 -m http.server $PORT &

# Wait a moment for the server to start
sleep 1

# Open Firefox to the specified URL
open -a "/Applications/Firefox Developer Edition.app" "http://localhost:$PORT/apltv" &
