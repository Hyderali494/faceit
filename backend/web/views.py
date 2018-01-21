from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, logout, login as auth_login
import json
# Create your views here.

@csrf_exempt
def login(request):
    """  Checks if user is a valid user or not  """

    response_data = {'data': {}, 'message': 'Fail'}
    username = request.POST.get('username', '')
    password = request.POST.get('password', '')

    if username and password:
        user = authenticate(username=username, password=password)

        if user and user.is_active:
            auth_login(request, user)
            response_data = {"data": {"username": user.username, "firstname": user.first_name}, "message": "success"}

    return HttpResponse(json.dumps(response_data), content_type='application/json')
