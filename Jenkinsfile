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
        stage('Clean') { 
            steps {
                cleanWs (deleteDirs: true, patterns: [[pattern: 'node_modules', type: 'EXCLUDE']])
            }
        }
    }
     post { 
        success { 
            withCredentials([usernamePassword(credentialsId: '8008e296-6a79-4846-9161-a0ea884f6cc3', passwordVariable: 'pass', usernameVariable: 'name')]) {
                        sh "scp -v dist ${env.name}@108.160.132.39:/data/CItest/"
                        echo "${env.pass}"
                    }
        }
    }
}
