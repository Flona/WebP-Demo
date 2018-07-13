pipeline {
    agent {
        docker {
            image 'node:carbon'
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

        stage('UT') { 
            steps {
                echo 'should run unit test in this stage' 
            }
        }

        stage('E2E Testing') { 
            steps {
                echo 'should run E2E cases in this stage' 
            }
        }
                
        stage('Deploy') {
            steps {
                    sshagent (credentials: ['e9c209ac-5e6b-43d6-9759-e53d98257ce9']) {
                        sh "whoami"
                        sh "scp -v -r -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no dist root@108.160.132.39:/data"
                    }
            }
        }
        stage('Clean') { 
            steps {
                cleanWs (deleteDirs: true, patterns: [[pattern: 'node_modules', type: 'EXCLUDE']])
            }
        }
    }
}
