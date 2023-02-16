class FinishedProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :cover, :photos
end
