pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                script {
                    echo 'Checking out the code...'
                    git branch: 'main', url: 'https://github.com/LeoRodrigues290/KubeShop-Pipeline.git'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    echo 'Building the Docker image...'
                    dockerImage = docker.build("liionardable/kubeshop-app:${env.BUILD_NUMBER}")
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                script {
                    echo 'Pushing the Docker image to Docker Hub...'
                    docker.withRegistry('', 'docker-hub-credentials') {
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    echo 'Deploying to Kubernetes...'
                    sh 'kubectl apply -f kubernetes/deployment.yaml'
                    sh 'kubectl apply -f kubernetes/service.yaml'
                }
            }
        }
    }
}
