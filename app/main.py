from flask import Flask, render_template, jsonify
from flask_cors import CORS

app = Flask(__name__, static_url_path=None)
cors = CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:3000"}})

@app.route('/<string:page_name>/')
def render_static(page_name):
    return render_template('%s.html' % page_name)

@app.route('/api')
def api():
  message = {}
  data = {}

  message['message'] = 'Hello World from Flask!'
  data['status'] = 200
  data['data'] = message

  return jsonify(data)

if __name__ == '__main__':
    app.static_url_path=app.config.get('/')
    app.static_folder='/'
    print(app.static_url_path)
    print(app.static_folder) 
    app.run(host="0.0.0.0", port=80, debug=True)