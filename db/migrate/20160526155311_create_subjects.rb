class CreateSubjects < ActiveRecord::Migration[4.2]
  def change
    create_table :subjects do |t|
      t.string :title

      t.integer :y
      t.integer :x

      t.text :comments

      t.integer :terminal, default: 0
      t.integer :stories, default: 0
      t.integer :bdd, default: 0
      t.integer :tdd, default: 0
      t.integer :home, default: 0

      t.string :url, default: nil

      t.timestamps null: false
    end
  end
end
