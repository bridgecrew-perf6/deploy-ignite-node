# install handlebars .hbs
yarn add handlebars
- this library allow you write html and to renderize by the server

# Coverage test
- in jest.config.ts
    - collectCoverage: true.
    - collectCoverageFrom: "<rootDir>/src/modules/**/useCases/**/*.ts" // what files to make report.
    - coverageDirectory: 'coverage' // where the report needs to be
    - coverageReporters: [
        'text-summary', // 'summary of the report coverage'
        'lcov',
    ]

# Deploy AWS
- Files need to be in the storage
- Example s3

# Mapper pattern
- you can verify the file ./src/modules/mapper/UserMap.ts
- the main idea is a static class that tranform your object/array before you send as json
- the interface example is in src/models/dto

# yarn add class-tranform
- this lib allow you manipulate the entity typeorm
- example: the method avatar_url into the ./src/modules/accounts/infra/typeorm/entities


# To make available static files in the server:
express.static()

# To add new user
- sudo adduser app (app is this the user name)
- sudo usermod -aG sudo app -> All Permissions
- sudo su - app -> Accessing the user

# to add permission to the app user access the machine
- cd ~
- mkdir .ssh
- chmod 700 .ssh
- cd .ssh
- touch authorized_keys
- chmod 600 .ssh
- vim authorized_keys
- copy your id_rsa.pub and paste in the authorized_keys file
- sudo service ssh restart

# Before start update the system
- sudo apt-get update

# Install node
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - (adding the package to manager package)
sudo apt-get install -y nodejs (installing...)

# Install docker
- You can install using the docs
- Docker Link: https://docs.docker.com/engine/install/ubuntu/
- Compose Link: https://docs.docker.com/compose/install/
- Adding docker for the group
   - sudo groupadd docker
   - sudo usermod -aG docker $user
# Install Yarn
npm install --global yarn

# Copy .env and config orm
ls -la seeing the hidden files
cp .env.example .env
cp ormconfig.example.json ormconfig.json

# Uping only service database
- sudo docker-compose up -d database
- sudo docker exec -it database_ignite bash

# Adding ssh key gihub_actions
- ssh-keygen
- this time the name is github_actions
- copy github_actions.pub
- paste the github_actions.pub in the instance aws in the authorized_keys file.
- cat >> authorized_keys.

# Useful links:
- s3 (Dashboard)
    - https://s3.console.aws.amazon.com/s3/home?region=sa-east-1

- ec2 (Dashboard)
    - https://sa-east-1.console.aws.amazon.com/ec2/v2/home?region=sa-east-1#Home:

- This ip instance:
    - 18.228.224.74

# Habiliting the reverse proxy
- sudo apt-get install nginx
- You need to give permission on AWS
    - You can use this example link: 
    - https://sa-east-1.console.aws.amazon.com/ec2/v2/home?region=sa-east-1#SecurityGroups:
- the default nginx folder is /etc/nginx
- the default nginx file is /etc/nginx/sites-available/default
- you can create yourself file
    - cd /etc/nginx/sites-available
    - sudo touch rentx
    - sudo vim rentx
    - content
       - example .config/server
- The reverse proxy only accepts one config, you can't create two configs in the same service.

# Symbol link in sites-enable
- cd /etc/nginx/sites-enabled
- sudo ln -s /etc/nginx/sites-available/rentx rentx
- You can remove the default
   - cd /etc/nginx/sites-available
   - sudo rm -rf default
   - cd /etc/nginx/sites-enabled
   - sudo rm -rf default
    
# Configuring the PM2
- sudo yarn global add pm2
- pm2 (To test)
- docs: https://pm2.keymetrics.io/docs/usage/quick-start/
- pm2 start (To start)
- cd ~/ && pm2 start app/api-test/src/server.js --name api-test (api-test example)
- cd ~/ && pm2 start app/api-test/dist/shared/infra/http/server.js --name api-rentx (api rentx example)
- pm2 status (to status)
- pm2 stop api-test (To Stop)
- pm2 start api-test (You can start this way, after you have created already)