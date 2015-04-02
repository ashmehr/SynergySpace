class AddMadebyToPost < ActiveRecord::Migration
  def change
    add_column :posts, :madeby, :integer
  end
end
