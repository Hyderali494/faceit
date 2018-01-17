# faceit

sudo apt-get install python-mysqldb

1)Create virtual environment by using following command:
   cmd: virtualenv -p python3 ecom

2)Activate virtualenv
   cmd: source ecom/bin/activate

3)Upgrade virtualenv with pip.
  cmd: pip install --upgrade virtualenv

4)Install requirements
   cmd: pip install -r requirements.pip (or) IF any error comes. Follow below procedure
   a) Manually Install Django
   b) sudo apt-get install python-dev python3-dev
   c) sudo apt-get install libmysqlclient-dev
   d) pip install pymysql
   e) pip install mysqlclient
   f) djangorestframework==3.7.7
