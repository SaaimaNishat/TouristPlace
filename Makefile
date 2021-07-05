build-react:
	sudo docker build -t react-app .

build-react-local:
	sudo docker build \
	-t react-app-production:local \
	--build-arg CADDYFILE=Caddyfile.local \
	--build-arg BASE_URL=http://localhost:12345/api \
	-f Dockerfile.production .


build-react-production:
	sudo docker build \
	-t react-app-production:production \
	--build-arg CADDYFILE=Caddyfile.production \
	--build-arg BASE_URL=https://mern.tourist-place.com/api \
	-f Dockerfile.production .