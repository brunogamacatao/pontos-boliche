node {
    stage('Checkout') {
        deleteDir()
        checkout scm
    }
    
    stage('NPM Install') {
        withEnv(["NPM_CONFIG_LOGLEVEL=warn"]) {
            bat 'npm install'
        }
    }

    stage('Test') {
        withEnv(["CHROME_BIN='C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'"]) {
          bat 'ng test --progress=false --watch false'
        }
        junit '**/test-results.xml'
    }

    stage('Lint') {
        bat 'ng lint'
    }

    stage('Build') {
        milestone()
        bat 'ng build --prod --aot --sm --progress=false'
    }

    stage('Deploy') {
        milestone()
        echo "Deploying..."
    }
}
