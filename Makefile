SHELL := /bin/bash
OPTIM := /Applications/ImageOptim.app/Contents/MacOS/ImageOptim 
IMG   := ./images
IMGS  := $(wildcard $(IMG)/*.png $(IMG)/*.jpg) 
.POSIX:
.PHONY: push update clean optim build buildall
all: help

help: ## Show this help
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

push: ## Push plugin to github / upstream
	git push origin master

clean: ## Reset plugin to pristine state (including git stash)
	rm -rf dist node_modules package-lock.json
	git stash

buildclean: ## Reset plugin to pristine state (Also Images!)
	clean install build optim

# https://imageoptim.com/command-line.html
optim: ## reduce image sizes
	$(OPTIM) $(IMGS)

build: ## Build package
	npm run build

install: ## Install plugin dependencies
	npm install