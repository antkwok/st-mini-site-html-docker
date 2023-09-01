# <%= name %>

## For Docker Development Environment
```bash
# cp the example .env, and change the content inside the .env files.
cp .env.example .env

# for build and recreate
docker-compose up --build --force-recreate --no-deps -d

# for down, it will destroy all container, but the volume still exist
docker-compose down
```


## For Ops daily operations
```bash

# for start
docker-compose up -d

# for down, it will destroy all container, but the volume still exist
docker-compose down
```
