#!/usr/bin/env bash
# Script d'installation des Charts K8S

# Install nginx ingress controller
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/mandatory.yaml
minikube addons enable ingress
kubectl apply -f service-loadbalancer.yaml
kubectl apply -f nginx/ingress.yaml

# Launch 2 replicas pods NodeJS API
kubectl apply -f web-service.yaml
kubectl apply -f web-deployment.yaml
kubectl apply -f web-claim0-persistentvolumeclaim.yaml
kubectl apply -f web-claim1-persistentvolumeclaim.yaml

# Launch postgresql pod
kubectl apply -f db-postgres-storage.yaml
kubectl apply -f db-postgres-service.yaml
kubectl apply -f db-postgres-deployment.yaml

# Launch redis pod
kubectl apply -f redis-service.yaml
kubectl apply -f redis-deployment.yaml

kubectl get all --all-namespaces