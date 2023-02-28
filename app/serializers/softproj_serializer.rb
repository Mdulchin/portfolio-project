class SoftprojSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :cover, :github, :tech
end
