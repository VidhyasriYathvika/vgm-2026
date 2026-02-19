"""
MySQL Connection Setup Script for Django
Run this script to test your MySQL connection
"""

import os
import sys
import django
from pathlib import Path

# Setup Django
BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.append(str(BASE_DIR))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'vgm_backend.settings')
django.setup()

from django.db import connection
from django.conf import settings


def test_mysql_connection():
    """Test MySQL database connection"""
    print("=" * 50)
    print("Testing MySQL Connection")
    print("=" * 50)
    
    print(f"\nDatabase Configuration:")
    print(f"  ENGINE: {settings.DATABASES['default']['ENGINE']}")
    print(f"  NAME:   {settings.DATABASES['default']['NAME']}")
    print(f"  USER:   {settings.DATABASES['default']['USER']}")
    print(f"  HOST:   {settings.DATABASES['default']['HOST']}")
    print(f"  PORT:   {settings.DATABASES['default']['PORT']}")
    
    print("\nTesting connection...")
    
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT VERSION();")
            version = cursor.fetchone()
            print(f"\n✅ SUCCESS! Connected to MySQL")
            print(f"   MySQL Version: {version[0]}")
            
            # Check if database exists
            cursor.execute(f"SHOW DATABASES LIKE '{settings.DATABASES['default']['NAME']}';")
            db_exists = cursor.fetchone()
            
            if db_exists:
                print(f"   Database '{settings.DATABASES['default']['NAME']}' exists!")
            else:
                print(f"   ⚠️  Database '{settings.DATABASES['default']['NAME']}' does not exist!")
                print(f"   Run: CREATE DATABASE {settings.DATABASES['default']['NAME']};")
            
            return True
            
    except Exception as e:
        print(f"\n❌ FAILED! Could not connect to MySQL")
        print(f"   Error: {e}")
        return False


def create_database():
    """Create the database if it doesn't exist"""
    print("\n" + "=" * 50)
    print("Creating Database (if not exists)")
    print("=" * 50)
    
    db_name = settings.DATABASES['default']['NAME']
    
    # Connect without database first
    from django.db import connections
    connections.databases['default']['NAME'] = None
    
    try:
        with connections['default'].cursor() as cursor:
            cursor.execute(f"CREATE DATABASE IF NOT EXISTS {db_name} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;")
            print(f"\n✅ Database '{db_name}' created successfully!")
    except Exception as e:
        print(f"\n❌ Failed to create database: {e}")
    finally:
        # Restore database name
        connections.databases['default']['NAME'] = db_name


if __name__ == "__main__":
    print("\n🚀 MySQL Setup for Django - VGM Meridian\n")
    
    # Test connection first
    success = test_mysql_connection()
    
    if not success:
        print("\n⚠️  Please make sure:")
        print("   1. MySQL server is running")
        print("   2. MySQL credentials in .env file are correct")
        print("   3. MySQL user has permission to access the database")
        print("\n📝 Edit backend/.env file to update credentials")
    else:
        # Ask to create database
        create = input("\nDo you want to create the database? (y/n): ")
        if create.lower() == 'y':
            create_database()
            
        print("\n" + "=" * 50)
        print("Next Steps:")
        print("=" * 50)
        print("1. Run migrations: python manage.py migrate")
        print("2. Create superuser: python manage.py createsuperuser")
        print("3. Run server: python manage.py runserver")
        print("=" * 50)
