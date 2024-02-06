
# APLTV 

APLTV is an innovative initiative by the Austin Public Library to engage visitors through digital announcements displayed on monitors throughout the Central Library. This includes a prominent nine-screen display near the main circulation desk, ensuring high visibility for library events, notices, and other important information.

## Technical Setup

The heart of APLTV is a Drupal-based slideshow that cycles through fullscreen image content, each representing an individual announcement. These images are displayed for 30 seconds before transitioning to the next slide through a fade effect. The slideshow is powered by a custom JavaScript player that manages the sequence and timing of the slides, ensuring a smooth and continuous display throughout the day.

### Fullscreen Image Content

- **Content Type:** Each slide is a "Fullscreen Image" node in Drupal, designed to fill the entire screen for maximum impact.
- **Scheduling:** Nodes can be scheduled to appear during specific times, allowing for precise control over the sequence of announcements.

## Content Management

Content creators publish Fullscreen Image nodes with designated display timespans. This flexibility allows for timely and relevant announcements tailored to the library's schedule and special events.

### Administrative Links

- **Channel 1 Admin Page:** [APLTV Channel 1](https://library.austintexas.gov/apl-tv/1)
- **Schedule Calendar View:** [Calendar Schedule](https://library.austintexas.gov/admin/apltv/1)

## Clock Display Feature

A JavaScript-generated clock is displayed in the bottom right corner of the screen, providing real-time updates to visitors. This feature enhances the utility of the APLTV by offering a constant time reference in addition to the rotating announcements.

## Special Sequences and Nightly Reboot

- **Closing Sequence:** Fifteen minutes before the library's closing time, the regular slideshow sequence is interrupted to display a closing message alongside the current time. This message remains onscreen for the rest of the day, ensuring all visitors are aware of the library's closing time.
- **Nightly Reboot:** To ensure optimal performance and fresh content display, the server powering APLTV is rebooted nightly. This process clears any cached data and reloads the scheduled announcements for the next day.

## JavaScript for Sequence Management

The project repository includes JavaScript code responsible for:
- Pulling in the list of scheduled announcements.
- Managing the slideshow sequence, including looping and the transition to the closing message.
- Displaying the real-time clock.

These files are located at the root of the repository:
- `apltv-channel.js`
- `apltv-clock.js`

## Maintenance and Troubleshooting

Routine maintenance is recommended to ensure the APLTV system runs smoothly. This includes checking for software updates, verifying the integrity of scheduled content, and rebooting the system as necessary. Common issues and their solutions will be documented to assist with troubleshooting.
