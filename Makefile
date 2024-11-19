dev:
	npx concurrently "npm run server" "npx vite"

install:
	npm install

build:
	npx vite build

lint:
	npx eslint .