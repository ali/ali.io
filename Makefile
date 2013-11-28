PUBLIC = public
CSSDIR = $(PUBLIC)/css

JADE = $(shell find jade -name "*.jade" -not -path "*_*.jade")
HTML = $(patsubst jade/%.jade,public/%.html,$(JADE))

STYLUS = $(shell find stylus -name "*.styl" -not -path "*_*.styl")
CSS = $(patsubst stylus/%.styl,$(CSSDIR)/%.css,$(STYLUS))

all: clean compile

compile: $(HTML) $(CSS)

# requires https://github.com/nodeapps/http-server
server:
	http-server

clean:
	rm -rf $(PUBLIC)

$(HTML): $(JADE) | $(PUBLIC)
	jade $< -o $(PUBLIC)

$(CSS): $(STYLUS) | $(CSSDIR)
	stylus -c $< -o $(CSSDIR)

$(PUBLIC):
	mkdir $(PUBLIC)

$(CSSDIR):
	mkdir -p $(CSSDIR)

.PHONY: all test server clean
