# Introduction 
TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project. 

# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Installation process
2.	Software dependencies
3.	Latest releases
4.	API references

# Build and Test
TODO: Describe and show how to build your code and run the tests. 

# Local Development

```
npm install -g @nestjs/cli
export NODE_ENV=dev
nest start --watch
```

# Deploy

docker build -t order-matching .

docker run -p 3000:3000 -d order-matching

ngrok http --domain=alien-present-carefully.ngrok-free.app 3000

for webhooks

# Migration

1. Build project
```bash
npm install
```

2. Go to migration folder
```bash
cd src/migrations
```

3. Generate migration
```bash
npm run migration:create --name=test
```

4. Push the PR