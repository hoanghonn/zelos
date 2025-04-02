class HackathonsController < ApplicationController
  before_action :set_hackathon, only: %i[ show edit update destroy ]

  # GET /hackathons or /hackathons.json
  def index
    @hackathons = Hackathon.all
  end

  # GET /hackathons/1 or /hackathons/1.json
  def show
  end

  # GET /hackathons/new
  def new
    @hackathon = Hackathon.new
  end

  # GET /hackathons/1/edit
  def edit
  end

  # POST /hackathons or /hackathons.json
  def create
    @hackathon = Hackathon.new(hackathon_params)

    respond_to do |format|
      if @hackathon.save
        format.html { redirect_to @hackathon, notice: "Hackathon was successfully created." }
        format.json { render :show, status: :created, location: @hackathon }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @hackathon.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /hackathons/1 or /hackathons/1.json
  def update
    respond_to do |format|
      if @hackathon.update(hackathon_params)
        format.html { redirect_to @hackathon, notice: "Hackathon was successfully updated." }
        format.json { render :show, status: :ok, location: @hackathon }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @hackathon.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /hackathons/1 or /hackathons/1.json
  def destroy
    @hackathon.destroy!

    respond_to do |format|
      format.html { redirect_to hackathons_path, status: :see_other, notice: "Hackathon was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hackathon
      @hackathon = Hackathon.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def hackathon_params
      params.expect(hackathon: [ :title, :description, :image ])
    end
end
