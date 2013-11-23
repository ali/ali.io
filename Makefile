all: dev

dev: stylus jade server

stylus:
	stylus -w -c stylesheets &

jade:
	jade -w *.jade &

server:
	python -m SimpleHTTPServer 8000 &
