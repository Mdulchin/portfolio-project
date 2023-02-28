class AddTechToSoftprojs < ActiveRecord::Migration[6.1]
  def change
    add_column :softprojs, :tech, :string
  end
end
