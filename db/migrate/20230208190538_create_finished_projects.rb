class CreateFinishedProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :finished_projects do |t|
      t.string :title
      t.string :description
      t.string :cover

      t.timestamps
    end
  end
end
