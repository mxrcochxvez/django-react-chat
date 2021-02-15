# Music Rooms

This application is written with React, Python, and Django. This app allows you to create rooms to listen to music in and invite other people in those rooms to either play or pause music.

## Setup

Before you use this application make sure you have Python 3 installed and you run these commands in the root directory.

1.) run `pip install -r requirements.txt`
2.) run `source venv/bin/activate`
3.) run `cd music_controller/frontend`
4.) run `npm install`
5.) run `cd ../../`

## The server and frontend both need to be running, start the server then the frontend.

*To start the python server*
1.) run `cd music_controller`
2.) run `python manage.py runserver`

*To start the frontend server to build the templates*
1.) run `cd music_controller/frontend`
2.) run `npm run dev`