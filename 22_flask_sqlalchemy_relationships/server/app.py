from flask import make_response, request

from config import app, db
from models import Post, Comment

@app.route('/posts', methods=['GET', 'POST'])
def all_posts():
    if request.method == 'GET':
        posts = db.session.execute(db.select(Post)).scalars()
        list_posts = [post.to_dict(rules=('-body',)) for post in posts]
        return make_response(list_posts)
    elif request.method == 'POST':
        data = request.json
        new_post = Post(title=data['title'], body=data['body'])
        db.session.add(new_post)
        db.session.commit()
        return make_response(new_post.to_dict(), 201)