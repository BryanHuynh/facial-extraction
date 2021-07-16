from flask import Flask, jsonify, request
from flask_restful import reqparse, abort, Api, Resource

app = Flask(__name__)
api = Api(app)

class Home(Resource):
    def get(self):
        return {"data": "Hello from Server"}

    def post(self):
        data = request.json
        print('client request: ', data)
        return jsonify(data)

api.add_resource(Home, '/')

if __name__ == '__main__':
    app.run(host='localhost', port=8080, debug=True)