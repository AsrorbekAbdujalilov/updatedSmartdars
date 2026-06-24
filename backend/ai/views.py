from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions

class GenerateQuizView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def post(self, request):
        return Response({"message": "Not implemented"})

class GenerateOutlineView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def post(self, request):
        return Response({"message": "Not implemented"})

class GenerateImageView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def post(self, request):
        return Response({"message": "Not implemented"})

class ExtractContentView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def post(self, request):
        return Response({"message": "Not implemented"})

class GradeHomeworkView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def post(self, request):
        return Response({"message": "Not implemented"})

class GenerateAIReportView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def post(self, request):
        return Response({"message": "Not implemented"})

class GenerateClassReportView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def post(self, request):
        return Response({"message": "Not implemented"})
