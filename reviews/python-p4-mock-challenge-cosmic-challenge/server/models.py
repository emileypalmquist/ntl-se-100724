from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

metadata = MetaData(naming_convention=convention)

db = SQLAlchemy(metadata=metadata)


class Planet(db.Model, SerializerMixin):
    __tablename__ = 'planets'

    serialize_rules = ('-missions',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    distance_from_earth = db.Column(db.Integer)
    nearest_star = db.Column(db.String)

    # Add relationship
    missions = db.relationship('Mission', back_populates='planet', cascade='all, delete-orphan')
    scientists = association_proxy('missions', 'scientist')

    # Add serialization rules
 

class Scientist(db.Model, SerializerMixin):
    __tablename__ = 'scientists'

    serialize_rules = ('-missions.scientist',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    field_of_study = db.Column(db.String)

    missions = db.relationship('Mission', back_populates='scientist', cascade='all, delete-orphan')
    planets = association_proxy('missions', 'planet')

    @validates('name')
    def validates_name(self, key, value):
        if not value or len(value) < 1:
            raise ValueError('Scientist must have a name.')
        return value

    @validates('field_of_study')
    def validates_field_of_study(self, key, value):
        if not value or len(value) < 1:
            raise ValueError('Scientist must have a field of study.')
        return value

class Mission(db.Model, SerializerMixin):
    __tablename__ = 'missions'

    serialize_rules = ('-scientist.missions', '-planet.missions',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    scientist_id = db.Column(db.Integer, db.ForeignKey('scientists.id'))
    planet_id = db.Column(db.Integer, db.ForeignKey('planets.id'))

    scientist = db.relationship('Scientist', back_populates='missions')
    planet = db.relationship('Planet', back_populates='missions')

    @validates('name')
    def validates_name(self, key, value):
        if not value or len(value) < 1:
            raise ValueError('Mission must have a name.')
        return value

    @validates('scientist_id')
    def validates_scientist_id(self, key, value):
        if not value:
            raise ValueError('Mission must have a scientist id.')
        return value

    @validates('planet_id')
    def validates_planet_id(self, key, value):
        if not value:
            raise ValueError('Mission must have a planet id.')
        return value

