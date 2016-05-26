Given(/^I am on the home page$/) do
  go_home
end

When(/^I navigate to the home page$/) do
  go_home
end

Then(/^I see an object labelled "([^"]*)"$/) do |arg1|
  expect(page).to have_content(arg1)
end

When(/^I click on the object labelled "([^"]*)"$/) do |arg1|
  click_button arg1
end

Then(/^I see the text associated with it$/) do
  a = page.driver.browser.switch_to.alert
  the_text = a.text

  expect(the_text).to match 'Code'
  a.accept
end

def go_home
#  visit 'http://localhost:3000'
  visit '/'
end
