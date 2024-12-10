from flask import make_response

from config import app, db
from models.dog import Dog

# RESTful routing
# GET all   '/dogs'
# GET one   '/dogs/<int:id>'
# POST      '/dogs'
# PATCH     '/dogs/<int:id>'
# DELETE    '/dogs/<int:id>'

@app.route('/dogs', methods=['GET'])
def get_all_dogs():
    # all_dogs = Dog.query.all()
    all_dogs = db.session.execute(db.select(Dog)).scalars()
    dog_dictionaries = [dog.to_dict() for dog in all_dogs]
    return make_response(dog_dictionaries)


@app.route('/dogs/<int:id>', methods=['GET'])
def dog_by_id(id):
    # dog = Dog.query.get(id)
    dog = db.session.execute(db.select(Dog).filter_by(id=id)).scalar_one()
    return make_response(dog.to_dict())