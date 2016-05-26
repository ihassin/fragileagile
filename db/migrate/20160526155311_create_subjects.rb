class CreateSubjects < ActiveRecord::Migration
  def change
    create_table :subjects do |t|
      t.string :title
      t.integer :top
      t.integer :left

      t.text :comments

      t.timestamps null: false
    end
  end
end
