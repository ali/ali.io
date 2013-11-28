all: dev

dev: stylus jade server

stylus:
	stylus -w -c stylesheets &

jade:
	jade -w *.jade &

server:
	python -m SimpleHTTPServer 8000 1> /dev/null &

kill:
	ps -ef | grep -w -e stylus -e jade -e python | grep -v grep | cut -c 7-11 | xargs kill

