#!/usr/bin/env python3
# 1a. Set Up Imports
from flask import Flask, make_response, request
import ipdb

# set environment variable flask app located
# export FLASK_APP=server/app.py

# environment variable to change what port flask app runs on
# export FLASK_RUN_PORT=5555

# set debug to true so you don't have to restart after making changes
# export FLASK_DEBUG=true

# 1b. Create instance of Flask
app = Flask(__name__)

# 2. Create a / route that returns Hello World
# 2a. Run the server with `flask run --debug` to check if its in the browser
@app.route('/', methods=['GET'])
def hello_world():
    return 'Hello world'

#3. Create a path /cats
@app.route('/cats', methods=['GET', 'POST'])
def get_cats():
    if request.method == 'GET':
        cats = [
            {
                "name": "Rose", 
                "age": 5
            },
            {
                "name": "Luke", 
                "age": 3
            },
            {
                "name": "Leia", 
                "age": 3
            }
        ]
        return make_response(cats)
    elif request.method == "POST":
        return make_response({"message": "Successfully created cat"}, 201)
        

# 4. Create a dynamic route
@app.route('/cats/<int:id>', methods=['GET'])
def get_cat_by_id(id):
    cats = [
        {
            "id": 1,
            "name": "Rose", 
            "age": 5
        },
        {
            "id": 2,
            "name": "Luke", 
            "age": 3
        },
        {
            "id": 3,
            "name": "Leia", 
            "age": 3
        }
    ]
    for cat in cats:
        if cat['id'] == id:
            return make_response(cat)
    return make_response({"error": "Cat not found"}, 404)


# 5. Use the before_request request hook, what this hook does is up to you. You could hit a breakpoint, print something to server console or anything else you can think of.
@app.before_request
def runs_before():
    print("runs before request")

@app.after_request
def runs_after(response):
    print("runs after request")
    return response


# Note: If you'd like to run the application as a script instead of using `flask run`, uncomment the line below 
# and run `python app.py`
if __name__ == '__main__':
    app.run(port=5555, debug=True)