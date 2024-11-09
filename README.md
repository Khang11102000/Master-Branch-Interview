# My Task
# 1. Propose a data structure to use for this screen. How the backend should return data to you. Please explain why you choose this structure
I designed an object with fields title, start, end, type, repeat and client based on observing the event tags (upcoming events). In which the fields like title, type and client are simply to display information. The start, end fields (time and end of the event) will be used more for logic processing and finally the repeat field is to create repeating events.
# 4. Let us know what you have learned from this project
- Organize folders and data properly
- Control the rendering of components
- Efficient processing methods and algorithms
- Control data types
- Understand the lifecycle, hooks of React, props, state and callback
# 5. Let us know if you can continue to develop this project, and what will you work on. These could be concepts that you’re still not completely done with or some features that you think could make this layout better
- Expanded Calendar range allows selecting multiple dates at once.
- Open more interfaces that allow viewing calendars by year and day instead of currently only being able to view by month.
- Upgraded interface, displaying upcoming events clearly and diversely
- Added feature to allow editing events
- Add backend and store data properly, currently using json server, a simple library to store data
- Add login and authentication features to save individual user information
- Add themes and languages ​​to the app
- Add Search feature to find events
- Link gmail or phone so users can capture events without accessing the web
- Fix some bug, optimize performance

# How to run
- Open project
- Use command 'npm install'
- Use command npx json-server db.json to run server (localhost: 3000), after that use command npm start to run client (localhost: 3001)

# Features
- Check events from day, month, recurring event
- Create new event by click large calendar. You will be taken to the event creation page.
