class Api::V1::BassesController < Api::V1::BaseController
	before_action :set_bass, only: [:destroy, :update]

	def index
		basses = Bass.all
		basses.each do |bass|
			bass.pic = url_for(bass.image)
		end

		respond_with basses
	end

	def create
		Bass.create(name: params[:name], description: params[:description], image: params[:image])
		new_bass = Bass.order(created_at: :desc).first
		new_bass.pic = url_for(new_bass.image)
		respond_with :api, :v1, new_bass
	end

	def destroy
		#removing image first before destroying
		@bass.image.purge
		respond_with @bass.destroy
	end

	def update
		@bass.name = params[:name]
		@bass.description = params[:description]
		#check if image is empty
		@bass.image = params[:image] if params[:image] != ""
		@bass.save

		@bass.pic = url_for(@bass.image)

		respond_with @bass, json: @bass
	end

	private
		def set_bass
			@bass =  Bass.find(params[:id])
		end
end