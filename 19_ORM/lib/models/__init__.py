import sqlite3
# connect to db
CONN = sqlite3.connect('development.db')

# communicate with the db
CURSOR = CONN.cursor()