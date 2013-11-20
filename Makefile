
CSS := $(shell find lib -name '*.css' -print)
JS := $(shell find lib -name '*.js' -print)

build: components $(JS) $(CSS)
	$(MAKE) lint
	component build --copy --dev --verbose

components: component.json
	component install --dev --verbose

install:
	gem install
	npm install -g component jshint

lint: $(JS)
	jshint $(JS)

serve:
	jekyll serve --watch --drafts

watch:
	watch $(MAKE) build
