## This project is to illustrate the article here: https://blog.gsej.co.uk/angular-on-docker/

To build the docker image, switch to the directory mysite and run:

```
docker build -t mysite .
```

to run the container:

```
docker run -e API_URL='https://example.com' -p 8080:80 mysite
```

If you then browse to http://localhost:8080, you should see the API URL displayed.
