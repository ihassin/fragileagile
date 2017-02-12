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
  click_button subject
end

Then(/^I see its connections$/) do
  ['Code', 'Stories', 'Semantic monitoring', 'Feature teams'].each do |button|
    expect(get_style(button)).to match(/opacity: 1;/)
  end
end

Then(/^I see its far connections as dimmed$/) do
  expect(get_style("SCM")).to match(/opacity: 0.4;/)
end

Then(/^I see all my presentation's subjects$/) do
  Subject.where(home: 1).each do |subject|
    expect(page).to have_content(subject.title)
  end
end

Then(/^I see the stories page$/) do
  expect(page).to have_content("Unbiased change")
end

When(/^I follow "([^"]*)"$/) do |button|
  double_click(button)
  switch_to_last_tab
end

Then(/^I see the BDD page$/) do
  expect(page).to have_content("DDD")
end

Then(/^I see the TDD page$/) do
  expect(page).to have_content("Test first")
end

def go_home
#  visit 'http://localhost:3000'
  visit '/'
end

def get_style(node)
  page.evaluate_script('document.getElementById("' + node + '");').attribute("style").to_json
end

def double_click button
  page.driver.browser.mouse.double_click(page.find("\##{button}").native)
end

def switch_to_last_tab
  page.driver.browser.switch_to.window(page.driver.browser.window_handles.last)
end
