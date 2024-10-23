from src.db_utils import *

def rebuildTables():
    conn = connect()
    cur = conn.cursor()
    drop_sql = """
        DROP TABLE IF EXISTS users
    """
    create_users = """
        CREATE TABLE users(
            user_id SERIAL PRIMARY KEY NOT NULL,
            email VARCHAR(40),
            password VARCHAR(100)
        );
    """
    cur.execute(drop_sql)
    cur.execute(create_users)
    conn.commit()
    conn.close()