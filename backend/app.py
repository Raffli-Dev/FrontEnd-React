from flask import Flask,redirect,url_for,render_template,request, jsonify

app=Flask(__name__)

if __name__ == '__main__':
    app.run(port=5000,debug=True)