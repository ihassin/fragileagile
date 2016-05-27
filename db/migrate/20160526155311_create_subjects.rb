class CreateSubjects < ActiveRecord::Migration
  def change
    create_table :subjects do |t|
      t.string :title

      t.integer :y
      t.integer :x

      t.text :comments

      t.integer :terminal, default: 0
      t.timestamps null: false
    end
  end
end