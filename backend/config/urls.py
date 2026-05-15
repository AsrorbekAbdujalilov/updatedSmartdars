from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from users.views import CoinUserViewSet
from payments.views import PaymentRequestViewSet
from referrals.views import ReferralViewSet
from classes.views import ClassViewSet, QuizViewSet
from content.views import NewsViewSet, TestimonialViewSet, QuestionBankViewSet
from teachers.views import TopTeacherRewardViewSet
from ai.views import (GenerateQuizView, GenerateOutlineView, GenerateImageView, 
                      ExtractContentView, GradeHomeworkView, GenerateAIReportView, 
                      GenerateClassReportView)

router = DefaultRouter()
router.register(r'users', CoinUserViewSet)
router.register(r'payments', PaymentRequestViewSet)
router.register(r'referrals', ReferralViewSet)
router.register(r'classes', ClassViewSet)
router.register(r'quizzes', QuizViewSet)
router.register(r'news', NewsViewSet)
router.register(r'testimonials', TestimonialViewSet)
router.register(r'question-bank', QuestionBankViewSet)
router.register(r'top-teachers', TopTeacherRewardViewSet)

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
