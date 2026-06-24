from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from users.views import CoinUserViewSet
from payments.views import PaymentRequestViewSet
from referrals.views import ReferralViewSet
from classes.views import ClassViewSet, QuizViewSet, QuestionBankViewSet
from content.views import NewsViewSet, TestimonialViewSet
from teachers.views import TopTeacherRewardViewSet
from ai.views import (GenerateQuizView, GenerateOutlineView, GenerateImageView, 
                      ExtractContentView, GradeHomeworkView, GenerateAIReportView, 
                      GenerateClassReportView)

router = DefaultRouter()
router.register(r'users', CoinUserViewSet, basename='users')
router.register(r'payments', PaymentRequestViewSet, basename='payments')
router.register(r'referrals', ReferralViewSet, basename='referrals')
router.register(r'classes', ClassViewSet, basename='classes')
router.register(r'quizzes', QuizViewSet, basename='quizzes')
router.register(r'news', NewsViewSet, basename='news')
router.register(r'testimonials', TestimonialViewSet, basename='testimonials')
router.register(r'question-bank', QuestionBankViewSet, basename='question-bank')
router.register(r'top-teachers', TopTeacherRewardViewSet, basename='top-teachers')

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Auth
    path('api/auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # AI Endpoints
    path('api/ai/generate-quiz/', GenerateQuizView.as_view(), name='generate-quiz'),
    path('api/ai/generate-outline/', GenerateOutlineView.as_view(), name='generate-outline'),
    path('api/ai/generate-image/', GenerateImageView.as_view(), name='generate-image'),
    path('api/ai/extract/', ExtractContentView.as_view(), name='extract-content'),
    path('api/ai/grade/', GradeHomeworkView.as_view(), name='grade-homework'),
    path('api/ai/generate-ai-report/', GenerateAIReportView.as_view(), name='generate-ai-report'),
    path('api/ai/generate-class-report/', GenerateClassReportView.as_view(), name='generate-class-report'),
    
    # API Router
    path('api/', include(router.urls)),
]

