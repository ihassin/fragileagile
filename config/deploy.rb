# config valid only for current version of Capistrano
lock '3.10.2'

set :application, 'fragileagile'
set :repo_url, 'git@github.com:ihassin/fragileagile.git'

set :git_shallow_clone, 1
set :branch, 'master'

set :deploy_to, '/home/pi/fragileagile'

set :format, :pretty
set :log_level, :info
set :pty, false

set :user, 'pi'

set :linked_files, %w(config/database.yml)
set :linked_dirs, %w(log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system config/certs)
set :bundle_binstubs, nil
set :conditionally_migrate, true

set :keep_releases, 3

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, "/var/www/my_app_name"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml", "config/secrets.yml"

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5

namespace :deploy do
  namespace :deploy do
    desc 'reload the database with seed data'
    task :seed do
      on roles(:app, :db), in: :sequence do
        info '*** Seeding DB'
        with rails_env: fetch(:rails_env) do
          begin
            within current_path do
              execute "cd #{current_path}; bundle exec rake db:seed RAILS_ENV=production"
            end
          rescue Exception => ex
            fatal '*** Cannot Run seed: ' + ex.message
          end
        end
      end
    end
  end

  desc 'Start application'
  task :start do
    on roles(:app), in: :sequence do
      info '*** Starting web server'
      with rails_env: fetch(:rails_env) do
        begin
          within current_path do
            execute *%w[bundle exec unicorn -c config/unicorn.rb -D]
            # execute *%w[sudo service nginx reload]
            execute *%w[sudo service nginx restart]
          end
        rescue Exception => ex
          fatal '*** Cannot start app. Maybe it\'s running already?' + ':' + ex.message
        end
      end
    end
  end

  desc 'Stop application'
  task :stop do
    on roles(:app), in: :sequence do
      info '*** Stopping web server'
      begin
        within current_path do
          execute *%w[sudo kill `cat tmp/pids/unicorn.pid`]
          execute *%w[sudo service nginx stop]
        end
      rescue StandardError => ex
        fatal '*** Cannot stop Unicorn/Nginx. Maybe they\'re not running?'
      end
    end
  end

  desc 'Restart web-server'
  begin
    task :restart do
      on roles(:app), in: :sequence do
        info '*** Restarting'
        Rake::Task['deploy:stop'].execute
        Rake::Task['deploy:start'].execute
      end
    end
  rescue
    nil
  end

  after :finished, :restart
  after :finished, 'custom:seed'
end
