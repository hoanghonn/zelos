require "application_system_test_case"

class HackathonsTest < ApplicationSystemTestCase
  setup do
    @hackathon = hackathons(:one)
  end

  test "visiting the index" do
    visit hackathons_url
    assert_selector "h1", text: "Hackathons"
  end

  test "should create hackathon" do
    visit hackathons_url
    click_on "New hackathon"

    fill_in "Description", with: @hackathon.description
    fill_in "Title", with: @hackathon.title
    click_on "Create Hackathon"

    assert_text "Hackathon was successfully created"
    click_on "Back"
  end

  test "should update Hackathon" do
    visit hackathon_url(@hackathon)
    click_on "Edit this hackathon", match: :first

    fill_in "Description", with: @hackathon.description
    fill_in "Title", with: @hackathon.title
    click_on "Update Hackathon"

    assert_text "Hackathon was successfully updated"
    click_on "Back"
  end

  test "should destroy Hackathon" do
    visit hackathon_url(@hackathon)
    accept_confirm { click_on "Destroy this hackathon", match: :first }

    assert_text "Hackathon was successfully destroyed"
  end
end
