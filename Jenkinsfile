node {
    stage('Checkout') {
        deleteDir()
        checkout scm
    }
    
    stage('NPM Install') {
        withEnv(["NPM_CONFIG_LOGLEVEL=warn"]) {
            sh 'npm install'
        }
    }

    stage('Test') {
        withEnv(["CHROME_BIN='C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'"]) {
          sh 'ng test --progress=false --watch false'
        }
        junit '**/test-results.xml'
    }

    stage('Lint') {
        sh 'ng lint'
    }

    stage('Build') {
        milestone()
        sh 'ng build --prod --aot --sm --progress=false'
    }

    stage('Archive') {
        sh 'tar -cvzf dist.tar.gz --strip-components=1 dist'
        archive 'dist.tar.gz'
    }

    stage('Deploy') {
        milestone()
        echo "Deploying..."
    }
}