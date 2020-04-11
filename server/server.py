from flask import Flask
from flask import abort
from flask import jsonify
from flask import request
from flask_cors import CORS
import uuid

app = Flask(__name__)
CORS(app)


todos = {}

def make_todo(title):
    return dict(id=uuid.uuid4(), title=title, completed=False)

@app.route('/todo/<id>', methods=["POST", "GET", "DELETE"])
def post_completed_todo(id):
    if request.method == 'POST':
        if not request.json or not 'completed' in request.json:
            abort(400)
        for t in todos:
            if t['id'] == id:
                t['completed'] = request.json['completed']
            return ''
        abort(404)
    elif request.method == 'GET':
        try:
            return jsonify(todos[id])
        except KeyError as e:
            abort(404)
    elif request.method == 'DELETE':
        try:
            del todos[id]
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
        todo = make_todo(request.json['title'])
        todos[todo['id']] = todo
        return ''
    elif request.method == 'GET':
        return jsonify(list(todos.values()))
    else:
        raise Exception("Unexpected method")
