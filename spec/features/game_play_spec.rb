require "rails_helper"

RSpec.feature "GamePlay" do

  scenario "starting a new game" do
    visit "/"

    click_button "Shoot"
  end
end
