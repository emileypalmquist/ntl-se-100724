from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///dogs.db'

db = SQLAlchemy()

migrate = Migrate(app, db)

db.init_app(app)


# flask db init  - creates migration repository
# flask db migrate -m"Detailed message of what changed"
                #    compares what is in the models that are imported in app.py to what is in the database
                #    create migration that contains how to update the database
# flask db upgrade - run the newest migration and all that came before it
# flask db downgrade - will run the downgrade function in the newest migration