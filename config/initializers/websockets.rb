# runs the faye server in a separate thread"

Thread.new do
  system("rackup faye.ru -s thin -E production")
end
