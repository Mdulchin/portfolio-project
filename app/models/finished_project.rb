class FinishedProject < ApplicationRecord
    has_many :photos, dependent: :destroy
end
