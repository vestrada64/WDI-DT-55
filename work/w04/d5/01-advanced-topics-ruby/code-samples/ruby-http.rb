require "net/http"
require "uri"

uri = URI.parse("http://www.jtamsut.com/")

# Shortcut
response = Net::HTTP.get_response(uri)

puts 'Request made!'

# Will print response.body
puts Net::HTTP.get_print(uri)

# Full
http = Net::HTTP.new(uri.host, uri.port)
response = http.request(Net::HTTP::Get.new(uri.request_uri))