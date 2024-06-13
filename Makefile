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
test-coverage:
		npm test -- --coverage --coverageProvider=v8

.PHONY: test