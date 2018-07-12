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
       stage('Deploy') { 
            steps {
                echo "Should deploy the dist dir to server"
            }
        }
        stage('Clean') { 
            steps {
                cleanWs (deleteDirs: true, patterns: [[pattern: 'node_modules', type: 'EXCLUDE']])
            }
        }
    }
}
