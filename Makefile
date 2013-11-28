all: dev

dev: stylus jade server

stylus:
	stylus -w -c stylesheets &

jade: index.jade
	jade -w *.jade~_* &

server:
	python -m SimpleHTTPServer 8000 1> /dev/null &

kill:
	ps -ef | grep -w -e stylus -e jade -e python | grep -wv -e grep -e vim | cut -c 7-11 | xargs kill

