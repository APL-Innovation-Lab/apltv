# Display Monitor System at Austin Central Library

The Austin Central Library uses a custom JavaScript code to display fullscreen images of upcoming events and announcements on the display monitors. The code also superimposes a clock on the right corner of the screen.

## Table of Contents
- [Code Overview](#code-overview)
- [Clock Functionality](#clock-functionality)
- [Library Hours](#library-hours)
- [Image Rotation](#image-rotation)
- [Administration](#administration)

## Code Overview

The JavaScript code is added to the Drupal CMS using the Asset Injector module. It performs the following main functions:

1. Creates a clock div and appends it to the body of the page.
2. Updates the clock every second, displaying the current time and the closing time of the library if it's within 30 minutes of closing.
3. Retrieves a JSON file containing the URLs and durations of the images to be displayed.
4. Rotates through the images by fading them in and out at the specified intervals.

## Clock Functionality

The code creates a `div` element with the ID `digitalClock` and appends it to the body of the page. The clock is positioned at the bottom right corner of the screen with a semi-transparent black background.

The `updateClock()` function is responsible for updating the clock every second. It retrieves the current time and formats it in a 12-hour format (e.g., 2:30pm). If the library is closing within 30 minutes, it also displays a closing message alongside the current time.

## Library Hours

The library hours are defined in the `libraryHours` object. Each day of the week is represented by a number (0 for Sunday, 1 for Monday, and so on), and the corresponding closing hour is specified in 24-hour format.

The `updateClock()` function checks the current time against the library hours to determine if the library is closing within 30 minutes. If so, it displays the appropriate closing message.

## Image Rotation

The code retrieves a JSON file from the URL `/apltv/channel/{channel_tid}/play.json`, where `channel_tid` is the ID of the current channel. The JSON file contains an array of objects, each representing an image to be displayed. Each object includes the URL of the image and its duration in minutes and seconds.

The `playa()` function is responsible for rotating through the images. It fades out the current image, updates the `src` attribute of the `iframe` element with the URL of the next image, and fades in the new image. The duration of each image is determined by the `item_time` array, which is calculated based on the minutes and seconds specified in the JSON file.

If the end of the image array is reached, the page is reloaded to start the rotation from the beginning.

## Administration

The JavaScript code is managed through the Drupal CMS using the Asset Injector module. The administration page for the code can be found at `/admin/config/development/asset-injector/js/apltv_channel`.

Please note that this documentation assumes familiarity with the Drupal CMS and the Asset Injector module.