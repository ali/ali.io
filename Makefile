JADE_DIR = jade
STYLUS_DIR = stylus
ASSETS_DIR = assets

PUBLIC = public
CSS_DIR = $(PUBLIC)/css

JADE := $(shell find $(JADE_DIR) -name "*.jade" -not -path "*_*.jade")
HTML := $(patsubst $(JADE_DIR)/%.jade,$(PUBLIC)/%.html,$(JADE))

STYLUS := $(shell find stylus -name "*.styl" -not -path "*_*.styl")
CSS := $(patsubst $(STYLUS_DIR)/%.styl,$(CSS_DIR)/%.css,$(STYLUS))

.PHONY : all compile server clean assets

all : compile

compile : $(HTML) $(CSS) assets

server :
	# requires https://github.com/nodeapps/http-server
	http-server

clean :
	rm -rf $(PUBLIC)

# Compile things
$(HTML) : $(JADE) | $(PUBLIC)
	jade -Pp ./jade/jade < $< > $@

$(CSS) : $(STYLUS) | $(CSS_DIR)
	stylus -c < $< > $@

assets: $(PUBLIC)
	cp -R $(ASSETS_DIR)/* $(PUBLIC)

# Make directories
$(PUBLIC) $(PUBLIC)/%:
	mkdir -p $@
