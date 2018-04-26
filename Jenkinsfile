node {
    checkout scm

    stage('Init') {
        cleanWs()
    }
    stage('Get code') {
        git credentialsId: '94b9e957-0a7d-4b96-8d75-dd3a447b408a', url: 'git@github.com:ihassin/fragileagile.git'
    }
    stage('Install dependencies') {
        sh 'gem install bundler'
        sh 'bundle install'
    }
    stage('Prepare database') {
        sh 'RAILS_ENV=test bundle exec rake db:drop db:create db:migrate db:seed'
    }
    stage('Run tests') {
        sh 'bundle exec cucumber'
    }
    stage('Deploy') {
        sh 'bundle exec cap production deploy'
    }
}
