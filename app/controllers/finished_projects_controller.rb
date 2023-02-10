class FinishedProjectsController < ApplicationController

    def index
        render json: FinishedProject.all
    end
end
