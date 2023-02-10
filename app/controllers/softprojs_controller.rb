class SoftprojsController < ApplicationController

    def index
        render json: Softproj.all
    end
end
