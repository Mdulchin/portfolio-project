class AddGithubToSoftprojs < ActiveRecord::Migration[6.1]
  def change
    add_column :softprojs, :github, :string
  end
end
