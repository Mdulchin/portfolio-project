class CreatePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :photos do |t|
      t.belongs_to :finished_project, null: false, foreign_key: true
      t.string :title
      t.string :image
      t.string :alt

      t.timestamps
    end
  end
end
