from flask import make_response, request
from flask_restful import Resource

from config import app, db, api
from models import Post, Comment

# @app.route('/posts', methods=['GET', 'POST'])
# def all_posts():
#     if request.method == 'GET':
#         posts = db.session.execute(db.select(Post)).scalars()
#         list_posts = [post.to_dict(rules=('-body',)) for post in posts]
#         return make_response(list_posts)
#     elif request.method == 'POST':
#         data = request.json
#         new_post = Post(title=data['title'], body=data['body'])
#         db.session.add(new_post)
#         db.session.commit()
#         return make_response(new_post.to_dict(), 201)


class Posts(Resource):
    def get(self):
        posts = db.session.execute(db.select(Post)).scalars()
        list_posts = [post.to_dict(rules=('-comments',)) for post in posts]
        return make_response(list_posts)

    def post(self):
        data = request.json
        new_post = Post(title=data['title'], body=data['body'])
        db.session.add(new_post)
        db.session.commit()
        return make_response(new_post.to_dict(), 201)

class PostById(Resource):
    def get(self, id):
        post = db.session.execute(db.select(Post).filter_by(id=id)).scalar_one()
        return make_response(post.to_dict())

    def patch(self, id):
        post = db.session.execute(db.select(Post).filter_by(id=id)).scalar_one()
        params = request.json
        for attr in params:
            setattr(post, attr, params[attr])
        db.session.commit()
        return make_response(post.to_dict())

    def delete(self, id):
        post = db.session.execute(db.select(Post).filter_by(id=id)).scalar_one()
        db.session.delete(post)
        db.session.commit()
        return make_response('', 204)

api.add_resource(PostById, '/posts/<int:id>')
api.add_resource(Posts, '/posts')
