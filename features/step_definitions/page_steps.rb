Given(/^I am on the home page$/) do
  go_home
end

When(/^I navigate to the home page$/) do
  go_home
end

Then(/^I see an object labelled "([^"]*)"$/) do |arg1|
  expect(page).to have_content(arg1)
end

When(/^I select "([^"]*)"$/) do |arg1|
  click_button arg1
end

Then(/^I see its associated text$/) do
  alert = page.driver.browser.switch_to.alert
  alert_text = alert.text

  expect(alert_text).to match 'Code'
  alert.accept
end

def go_home
#  visit 'http://localhost:3000'
  visit '/'
end
