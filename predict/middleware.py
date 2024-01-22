# middleware.py
class LogHeadersMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Log headers for every request
        print(request.headers)
        
        response = self.get_response(request)
        return response
