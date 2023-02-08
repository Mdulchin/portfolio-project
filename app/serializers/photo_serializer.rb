class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :alt
  has_one :finished_project
end
