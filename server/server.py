from flask import Flask
from flask import abort
from flask import jsonify
from flask import request
from flask_cors import CORS
import uuid


app = Flask(__name__)
CORS(app)


todos = {}

def make_todo(title, completed):
    return dict(id=str(uuid.uuid4()), title=title, completed=completed)


@app.route('/todo/<todo_id>', methods=["POST", "GET", "DELETE"])
def post_completed_todo(todo_id):
    if request.method == 'POST':
        if not request.json or not 'completed' in request.json:
            abort(400)
        try:
            todo = todos[todo_id]
            todo['completed'] = request.json['completed']
            return jsonify(todo)
        except KeyError as e:
            abort(404)
    elif request.method == 'GET':
        try:
            return jsonify(todos[todo_id])
        except KeyError as e:
            abort(404)
    elif request.method == 'DELETE':
        try:
            del todos[todo_id]
            return ""
        except KeyError as e:
            abort(404)
    else:
        raise Exception("Unexpected method")



@app.route('/todo', methods=["GET", "POST"])
def todo():
    if request.method == 'POST':
        if not request.json or 'title' not in request.json:
            abort(400)
        completed = request.json.get('completed', False)
        todo = make_todo(request.json['title'], completed)
        todos[todo['id']] = todo
        return jsonify(todo)
    elif request.method == 'GET':
        return jsonify(list(todos.values()))
    else:
        raise Exception("Unexpected method")
