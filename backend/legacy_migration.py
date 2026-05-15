import sqlite3
import os
import django
import json

# Django Environment setup
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")
django.setup()

from users.models import CoinUser
from classes.models import Class, AppUser, Lesson, Quiz, QuizResult
# etc.

def migrate_database(legacy_db_path):
    print(f"Connecting to legacy database: {legacy_db_path}")
    if not os.path.exists(legacy_db_path):
        print("Database not found.")
        return

    conn = sqlite3.connect(legacy_db_path)
    cursor = conn.cursor()

    # Generic function to migrate blob table
    def migrate_blob_table(table_name, model_class):
        try:
            cursor.execute(f"SELECT id, data FROM {table_name}")
            rows = cursor.fetchall()
            print(f"Found {len(rows)} records in {table_name}")
            for row_id, data_text in rows:
                try:
                    data = json.loads(data_text)
                except Exception:
                    data = {}
                
                # Create or update in Django models
                model_class.objects.update_or_create(
                    id=row_id,
                    defaults={'data': data}
                )
            print(f"Migrated {table_name} successfully.")
        except sqlite3.OperationalError:
            print(f"Table {table_name} does not exist.")

    # Migrate generic tables
    migrate_blob_table('users', AppUser)
    migrate_blob_table('classes', Class)
    migrate_blob_table('lessons', Lesson)
    migrate_blob_table('quizzes', Quiz)
    migrate_blob_table('results', QuizResult)

    # In a full migration, you'd map specific fields (email, coins) 
    # to CoinUser, PaymentRequest, Referral, etc.
    
    conn.close()

if __name__ == "__main__":
    LEGACY_DB = "../../backend/platform.db" # Assume platform.db or change as needed
    migrate_database(LEGACY_DB)
