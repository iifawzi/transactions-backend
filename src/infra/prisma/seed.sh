#!/bin/sh
psql postgresql://admin:admin@localhost:5433/airbank -c "\copy \"Transactions\".\"Accounts\"(\"id\",\"name\") FROM ./src/infra/data/accounts.csv CSV HEADER"
psql postgresql://admin:admin@localhost:5433/airbank -c "\copy \"Transactions\".\"Categories\"(\"id\",\"name\",\"color\") FROM ./src/infra/data/categories.csv CSV HEADER"
psql postgresql://admin:admin@localhost:5433/airbank -c "\copy \"Transactions\".\"Transactions\"(\"id\",\"accountId\",\"categoryId\",\"reference\",\"amount\",\"currency\",\"date\") FROM ./src/infra/data/transactions.csv CSV HEADER"
