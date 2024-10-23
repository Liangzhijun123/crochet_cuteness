import os
import sys
sys.path.append(os.path.dirname(os.path.dirname(os.path.realpath(__file__))))
from src.db_utils import *

def create_users(email, password):
    account_creation = """INSERT INTO users(email, password) VALUES (%s,%s);"""
    values = [email, password]
    return exec_commit(account_creation, values)