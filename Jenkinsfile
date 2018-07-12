pipeline {
    agent {
        docker {
            image 'node:carbon-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Install') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Build') { 
            steps {
                sh 'npm run staging-build' 
            }
        }
    }
}
