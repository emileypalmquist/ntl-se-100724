#!/usr/bin/env python3

from models import db, Scientist, Mission, Planet
from flask_restful import Api, Resource
from flask_migrate import Migrate
from flask import Flask, make_response, jsonify, request
from sqlalchemy.exc import NoResultFound
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)

@app.route('/')
def home():
    return ''

class Scientists(Resource):
    def get(self):
        scientists = db.session.execute(db.select(Scientist)).scalars()
        scientists_list = [scientist.to_dict(rules=('-missions',)) for scientist in scientists]
        return make_response(scientists_list)

    def post(self):
        params = request.json
        try:
            scientist = Scientist(name=params['name'], field_of_study=params['field_of_study'])
            db.session.add(scientist)
            db.session.commit()
            return make_response(scientist.to_dict(), 201)
        except:
            return make_response({"errors": ["validation errors"]}, 400)

class ScientistById(Resource):
    def get(self, id):
        try:
            scientist = db.session.execute(db.select(Scientist).filter_by(id=id)).scalar_one()
            return make_response(scientist.to_dict())
        except:
            return make_response({"error": "Scientist not found"}, 404)

    def patch(self, id):
        try:
            scientist = db.session.execute(db.select(Scientist).filter_by(id=id)).scalar_one()
            params = request.json
            for key in params:
                setattr(scientist, key, params[key])
            db.session.commit()
            return make_response(scientist.to_dict(), 202)
        except NoResultFound:
            return make_response({"error": "Scientist not found"}, 404)
        except:
            return make_response({"errors": ["validation errors"]}, 400)

    def delete(self, id):
        try:
            scientist = db.session.execute(db.select(Scientist).filter_by(id=id)).scalar_one()
            db.session.delete(scientist)
            db.session.commit()
            # return make_response(jsonify(''), 204)
            return make_response({}, 204)
        except:
            return make_response({"error": "Scientist not found"}, 404)

class Planets(Resource):
    def get(self):
        planets = db.session.execute(db.select(Planet)).scalars()
        planets_list = [planet.to_dict() for planet in planets]
        return make_response(planets_list)

class Missions(Resource):
    def post(self):
        try:
            params = request.json
            mission = Mission(
                name=params['name'],
                planet_id=params['planet_id'],
                scientist_id=params['scientist_id']
            )
            db.session.add(mission)
            db.session.commit()
            return make_response(mission.to_dict(), 201)
        except:
            return make_response({"errors": ["validation errors"]}, 400)



api.add_resource(Scientists, '/scientists')
api.add_resource(ScientistById, '/scientists/<int:id>')
api.add_resource(Planets, '/planets')
api.add_resource(Missions, '/missions')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
