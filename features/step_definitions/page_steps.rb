Given(/^I have subjects$/) do
  Subject.find_or_create_by!(title: 'Code', top: 100, left: 50, comments: 'Comments about Code')
  Subject.find_or_create_by!(title: 'Fragile', top: 120, left: 50, comments: 'Comments about Fragile')
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
