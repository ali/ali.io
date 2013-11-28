PUBLIC = public
JADE = $(shell find jade -name "*.jade" -not -path "*_*.jade")
HTML = $(JADE:.jade=.html)
STYLUS = $(shell find stylus -name "*.styl" -not -path "*_*.styl")
CSS = $(STYLUS:.styl=.css)

all: clean compile

compile: $(HTML) $(CSS)

%.html: %.jade
	mkdir -p $(PUBLIC)
	jade $< -o $(PUBLIC)

%.css: %.styl
	mkdir -p $(PUBLIC)/css
	stylus $< -o $(PUBLIC)/css

server:
	http-server

clean:
	rm -rf $(PUBLIC)

.PHONY: clean
