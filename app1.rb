require 'sinatra'
require 'mongoid'
require 'json'

configure do
  Mongoid.load!("./mongoid.yml")
end

class Weather
	include Mongoid::Document
	field :sun, type: String
	field :temp, type: Integer
end

before do
	content_type :json
	headers 'Access-Control-Allow-Origin' => '*', 
           'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST'],
           'Access-Control-Allow-Headers' => 'Content-Type'  
end

set :protection, false

get '/today_weather.?:format?' do
	weather = Weather.first
	weather.to_json	
end