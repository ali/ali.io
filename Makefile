JADEDIR = jade
STYLUSDIR = stylus
ASSETSDIR = assets

PUBLIC = public
HTMLDIR = $(PUBLIC)
CSSDIR = $(PUBLIC)/css
ASSETDIRS = $(patsubst $(ASSETSDIR)/%,$(PUBLIC)/%,$(shell find $(ASSETSDIR) -type d))

JADE = $(shell find $(JADEDIR) -name "*.jade" -not -path "*_*.jade")
HTML = $(patsubst $(JADEDIR)/%.jade,$(HTMLDIR)/%.html,$(JADE))

STYLUS = $(shell find stylus -name "*.styl" -not -path "*_*.styl")
CSS = $(patsubst $(STYLUSDIR)/%.styl,$(CSSDIR)/%.css,$(STYLUS))

ASSETS = $(shell find $(ASSETSDIR) -type f)
PUBLICASSETS = $(patsubst $(ASSETSDIR)/%,$(PUBLIC)/%,$(ASSETS))

all: compile

compile: $(HTML) $(CSS) $(PUBLICASSETS)

# requires https://github.com/nodeapps/http-server
server:
	http-server

clean:
	rm -rf $(PUBLIC)

# Compilation

$(HTML): $(JADE) | $(PUBLIC)
	jade $< -o $(HTMLDIR)

$(CSS): $(STYLUS) | $(CSSDIR)
	stylus -c $< -o $(CSSDIR)

$(PUBLICASSETS): $(ASSETS) | $(ASSETDIRS)
	cp $< $@

# Directories
$(PUBLIC) $(PUBLIC)/%:
	mkdir -p $@

.PHONY: all compile server clean
