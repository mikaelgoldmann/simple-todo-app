#!/bin/bash
ROOT=`dirname $0`
export FLASK_APP=${ROOT}/server/server.py
python3 py3env/bin/flask run
