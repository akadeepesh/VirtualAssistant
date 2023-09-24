python manage.py collectstatic
#!/bin/bash

# Install pipenv
pip install pipenv

# Install dependencies
pipenv install

# Move to the Django project directory
cd VirtualAssistant
cd speak-up-backend

pip install -r requirements.txt

# Collect static files
python manage.py collectstatic --no-input

# Make migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Compress the project directory
tar -czf project.tar.gz .

# Move the compressed file to the root directory
mv project.tar.gz ../

# Move back to the root directory
cd ..
cd ..