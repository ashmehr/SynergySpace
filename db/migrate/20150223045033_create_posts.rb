class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :address
      t.string :postedby
      t.string :description
      t.string :city
      t.string :country
      t.string :size

      t.timestamps null: false
    end
  end
end
