class Bass < ApplicationRecord
	attr_accessor :pic
	has_one_attached :image

	def as_json(options={})
		super.as_json(options).merge({:image => pic})
	end

end
