require 'cucumber/rails'
# require "selenium-webdriver"
require 'capybara/cucumber'
require 'capybara/poltergeist'

begin
  DatabaseCleaner.strategy = :deletion
#  Cucumber::Rails::Database.javascript_strategy = :deletion
rescue NameError
  raise 'You need to add database_cleaner to your Gemfile (in the :test group) if you wish to use it.'
end

# Capybara.register_driver :selenium do |app|
#   Capybara::Selenium::Driver.new(app, :browser => :firefox)
# end

Capybara.javascript_driver = :poltergeist

Capybara.default_max_wait_time = 5
#Capybara.default_driver = :selenium
#Capybara.javascript_driver = :webkit

Capybara.configure do |config|
  config.match = :one
  config.exact_options = true
  config.ignore_hidden_elements = true
  config.visible_text_only = true
end

Capybara.register_driver :poltergeist do |app|
  Capybara::Poltergeist::Driver.new(
      app,
      window_size: [1280, 1024],
      phantomjs: '/usr/local/bin/phantomjs'
  )
end
Capybara.default_driver    = :poltergeist
Capybara.javascript_driver = :poltergeist

