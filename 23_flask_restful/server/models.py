from sqlalchemy_serializer import SerializerMixin

from config import db

class Post(db.Model, SerializerMixin):
    __tablename__ = 'posts'

    serialize_rules = ('-comments.post',)

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    body = db.Column(db.String)

    comments = db.relationship('Comment', back_populates='post', cascade='all, delete-orphan')


class Comment(db.Model, SerializerMixin):
    __tablename__ = 'comments'

    serialize_rules = ('-post.comments',)

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'))

    post = db.relationship('Post', back_populates='comments')