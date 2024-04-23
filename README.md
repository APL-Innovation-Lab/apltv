# APLTV

APLTV is an innovative initiative by the Austin Public Library to engage visitors through digital announcements displayed on monitors throughout the Central Library. This initiative ensures high visibility for library events, notices, and other important information with a prominent nine-screen display near the main circulation desk.

## Technical Setup

The heart of APLTV is a Drupal-based slideshow that cycles through fullscreen image content, each representing an individual announcement. These images are displayed for 30 seconds before transitioning to the next slide through a fade effect. The slideshow is powered by custom JavaScript players that manage the sequence and timing of the slides, ensuring a smooth and continuous display throughout the day.

### Fullscreen Image Content

- **Content Type:** Each slide is a "Fullscreen Image" node in Drupal, designed to fill the entire screen for maximum impact.
- **Scheduling:** Nodes can be scheduled to appear during specific times, allowing for precise control over the sequence of announcements.

## Content Management

Content creators publish Fullscreen Image nodes with designated display timespans. This flexibility allows for timely and relevant announcements tailored to the library's schedule and special events.

### Administrative Links

- **Channel 1 Admin Page:** [APLTV Channel 1](https://library.austintexas.gov/apl-tv/1)
- **Schedule Calendar View:** [Calendar Schedule](https://library.austintexas.gov/admin/apltv/1)

## JavaScript for Sequence Management

### Production System
- The current production system uses `apltv-channel.js`, which includes the logic for pulling scheduled announcements, managing the slideshow sequence, and integrating special features like the closing sequence and real-time clock display.

### Streamlined Frontend Development
- We are working to streamline the frontend interaction through `simplified-apltv.js`. This new script is part of our effort to enhance performance and maintainability by simplifying the codebase and potentially incorporating modern frameworks like Remix.

These files are located at the root of the repository, which also serves as a demonstration platform for the player at [APL Innovation Lab's APLTV](https://apl-innovation-lab.github.io/apltv/).

## CSS Styling and Animation Timing

The `styles.css` file is where developers can experiment with different styling options, including adjusting the timing for the fade in and out transitions of the images. This is the place to fine-tune visual effects to ensure the best visual experience for library visitors.

## Local Development Environment Setup

To start the local development environment for APLTV, run the `start.sh` script. This script sets up a basic Python web server and opens the application in a browser.

```bash
bash start.sh
```

### Script Contents

```bash
#!/bin/bash

# Define the port number
PORT=8001

# Start the Python HTTP server in the background
python3 -m http.server $PORT &

# Wait a moment for the server to start
sleep 1

# Open Firefox to the specified URL
open -a "/Applications/Firefox Developer Edition.app" "http://localhost:$PORT/apltv" &
```

### Browser Adjustment

The script by default opens Firefox Developer Edition on macOS. If using a different browser or operating system, adjust the browser-opening command accordingly:

- **For Google Chrome on macOS**:
  ```bash
  open -a "/Applications/Google Chrome.app" "http://localhost:$PORT/apltv" &
  ```
- **For Microsoft Edge on macOS**:
  ```bash
  open -a "/Applications/Microsoft Edge.app" "http://localhost:$PORT/apltv" &
  ```
- **For Windows users using Chrome**:
  ```bash
  start chrome "http://localhost:$PORT/apltv"
  ```

## Maintenance and Troubleshooting

Routine maintenance is recommended to ensure the APLTV system runs smoothly. This includes checking for software updates, verifying the integrity of scheduled content, and rebooting the system as necessary. Common issues and their solutions will be documented to assist with troubleshooting.

## Future Upgrades

APLTV is an excellent candidate for demonstrating an upgrade from our existing systems to more modern and scalable web technologies, potentially using the Remix JavaScript framework. Remix could enhance content delivery, improve interactivity, and optimize overall performance with its efficient loading strategies and built-in support for React.