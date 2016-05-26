require 'cucumber/rails'
require "selenium-webdriver"
require 'capybara/cucumber'

# Capybara.configure do |config|
#   config.run_server = false
#   config.default_driver = :selenium
#   #config.app_host = 'https://www.google.com' # change url
# end

Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, :browser => :firefox)
end

Capybara.default_max_wait_time = 5
#Capybara.default_driver = :selenium
#Capybara.javascript_driver = :webkit

Capybara.configure do |config|
  config.match = :one
  config.exact_options = true
  config.ignore_hidden_elements = true
  config.visible_text_only = true
end

