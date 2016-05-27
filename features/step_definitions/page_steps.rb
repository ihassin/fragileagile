Given(/^I have subjects$/) do
  Subject.make_subjects
end

Given(/^I am on the home page$/) do
  go_home
end

When(/^I navigate to the home page$/) do
  go_home
end

Then(/^I see an object labelled "([^"]*)"$/) do |subject|
  expect(page).to have_content(subject)
end

When(/^I select "([^"]*)"$/) do |subject|
  @subject_title = subject
  click_button subject
end

Then(/^I see its comments$/) do
  alert = page.driver.browser.switch_to.alert
  alert_text = alert.text

  subject = Subject.find_by_title(@subject_title)
  expect(alert_text).to match subject.comments
  alert.accept
end

Then(/^I see all my presentation's subjects$/) do
  Subject.all.each do |subject|
    expect(page).to have_content(subject.title)
  end
end

def go_home
#  visit 'http://localhost:3000'
  visit '/'
end
