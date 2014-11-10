require 'sinatra'

get "/" do
	haml :main, layout: true
end