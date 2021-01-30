# ASAP-Map
A Chrome extension for searching Google Maps locations from different tabs.

# Background
I built this extension because I wanted to make the process of opening and searching for addresses on Google Maps more efficient.
This extension eliminates the need to manually open a new tab for Google Maps when an address has been found on the current tab.
A user can enter any part of the name, address, or the comma-separated latitude-longitude coordinates of a location in addition to
its optional place ID into a pop-up window. Upon submission, Google Maps will then be opened automatically in a new tab displaying
the result of their search.

# How to install
1. Clone this repository.
2. Open the Chrome Extension Management page at chrome://extensions.
3. Enable Developer Mode on the upper-right corner of the Extension Management page.
4. Click the 'Load unpacked' button and select your directory for ASAP Map.

# How to use
1. On the tab of your choosing, click on the ASAP Map extension icon.
2. Enter the name, address, or latitude-longitude coordinates of a location into the 1st pop-up field (required).
   Latitude-longitude coordinates must be comma-separated.
   
   Examples:
   - Columbus, OH
   - 1111 Fictional Street
   - 0.000000, 0.000000
   - 0°00'00.0"N, 0°00'00.0"E
   
3. Enter the place ID of a location into the 2nd pop-up field (optional). See the API Docs for more information on place IDs.

4. Click on the 'Go to Google Maps!' button to open Google Maps in a new tab.

# API Docs
https://developers.google.com/maps/documentation/urls/get-started

https://developers.google.com/places/web-service/place-id
