require 'rails_helper'

RSpec.describe Bass, type: :model do
  context "create operation test" do
    it "should save successfully" do 
      bass = Bass.new(name:"Aria", description: "Aria pro").save
      expect(bass).to eq(true)
    end
  end
end
