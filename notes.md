#Create angular project
ng new angular-http-services

##create required components/classes/services
ng g c header
ng g c contact
ng g s contact/contact
ng g class contact/contact

#create backend using json-server
create db.json in server folder
start json server as below : 

json-server -w db.json server/db.json

ng add @angular/material