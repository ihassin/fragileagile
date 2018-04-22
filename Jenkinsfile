node {
    checkout scm

    stage('init') {
        // sh '. ~/.bashrc'
        // sh 'env'
        // echo "PATH is $PATH"
        cleanWs()
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
