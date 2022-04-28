# README
This is a Rails + React web app (with Tailwind CSS) for a fictional Bass Shop called BB's Bass Shop.

Things you may need:

* Ruby version 2.7.4

* Rails version 6.1.4

## How to get started

Clone the repository:
```
$ git clone https://github.com/projectgloriam/bbshop.git 
```

Change to the directory
```
$ cd bbshop
```

Install the gems
```
$ bundle install 
```

Check the db cnfiguration at: 
```
$ ./config/database.yml
```
I personally used postgres with a username and password. But feel free to change it.

Migrate the database:
```
$ rails db:migrate
```

Run the following command to install active storage
```
rails active_storage:install
```

Generate the routes
```
$ rails routes
```

Install Tailwind CSS
```
rails tailwindcss:install
```
Follow the instructions here for more info
```
https://tailwindcss.com/docs/guides/ruby-on-rails
```

Run the app
```
$ rails s
```