class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :sub
      t.string :title
      t.text :content
      t.integer :user_id
      t.integer :upvotes
      t.integer :downvotes
      t.timestamps null: false
    end
  end
end
