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
