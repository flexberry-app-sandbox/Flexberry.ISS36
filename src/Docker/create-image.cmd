docker build --no-cache -f SQL\Dockerfile.PostgreSql -t iss36/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t iss36/app ../..
