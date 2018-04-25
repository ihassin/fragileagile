namespace :custom do
  desc 'run seed rake db task'
  task :seed do
    on roles(:db) do
      within "#{current_path}" do
        with rails_env: "#{fetch(:stage)}" do
          execute :rake, 'db:seed'
        end
      end
    end
  end
end
