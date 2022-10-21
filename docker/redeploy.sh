#!/usr/bin/env bash
set -euo pipefail

pushd ~/jx22

updated() {
  docker-compose -f docker/docker-compose.yml build
  docker-compose -f docker/docker-compose.yml up -d
}

while true; do
  git pull -f && updated
  sleep 30
done
