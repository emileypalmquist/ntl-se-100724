from config import app, db
from models import Post, Comment, User 

if __name__ == '__main__':
    with app.app_context():
        print('deleting posts')
        Post.query.delete()

        print('deleting comments')
        Comment.query.delete()

        print('deleting users')
        User.query.delete()

        print('creating posts')
        p1 = Post(title="React is cool!", body="Hope you all have practiced react a bit, we are starting next week.")
        p2 = Post(title="Flask SQLAlchemy is cool!", body="Less work for us.")
        p3 = Post(title="Serialization is cool!", body="creating python dictionaries with data from python objects")

        print('adding posts to database')
        db.session.add_all([p1,p2,p3])
        db.session.commit()

        print('creating users')
        u1 = User(username='Emiley')
        u2 = User(username='Conner')

        print('adding users to the database')
        db.session.add_all([u1, u2])
        db.session.commit()

        print('create comments')
        c1 = Comment(content='Cool!', post_id=p1.id, user_id=u1.id)
        c2 = Comment(content='Awesome!', post_id=p2.id, user_id=u1.id)
        c3 = Comment(content='Great!', post_id=p1.id, user_id=u2.id)

        print('adding comments to database')
        db.session.add_all([c1,c2,c3])
        db.session.commit()

        print('DONE!')