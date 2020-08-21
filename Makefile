.PHONY: venv

run-local-dev:
	. ./venv/bin/activate && python main.py

venv:
	rm -rf venv || true
	python -m venv venv
	. ./venv/bin/activate && pip install --upgrade pip
	. ./venv/bin/activate && pip install -r requirements.txt
