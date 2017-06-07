import flask

print('Starting tests ..')

app = flask.Flask(__name__)

with app.test_request_context('/?q=test'):
    assert flask.request.path == '/'
    assert flask.request.args['q'] == 'test'

print('Success')
