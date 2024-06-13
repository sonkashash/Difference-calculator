install:
		npm ci
gendiff -h: 
		node bin/gendiff.js
lint:
		npx eslint .
fix: 
		npx eslint --fix .
test:
		npm test

.PHONY: test