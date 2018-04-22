node {
    checkout scm

    stage('init') {
        // sh '. ~/.bashrc'
        // sh 'env'
        // echo "PATH is $PATH"
        cleanWs()
    }
    stage('git') {
        git credentialsId: '94b9e957-0a7d-4b96-8d75-dd3a447b408a', url: 'git@github.com:ihassin/fragileagile.git'
    }
    stage('gems') {
        sh 'gem install bundler'
        sh 'bundle install'
    }
    stage('setup') {
        sh 'RAILS_ENV=test bundle exec rake db:migrate'
        sh 'RAILS_ENV=test bundle exec rake db:seed'
    }
    stage('tests') {
        sh 'bundle exec cucumber'
    }
}
