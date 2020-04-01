class SensorController < ApplicationController
    before_filter :authenticate_user!
  