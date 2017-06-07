from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index():
    q = request.args.get('q')
    if q:
        return render_template('zlatanize.html')
    else:
        return render_template('index.html')


if __name__ == '__main__':
    app.run()
