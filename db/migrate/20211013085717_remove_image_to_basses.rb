class RemoveImageToBasses < ActiveRecord::Migration[6.1]
  def change
    remove_column :basses, :image
  end
end
