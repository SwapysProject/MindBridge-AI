from django.contrib.auth.models import AbstractUser
from django.db import models

class NeuroUser(AbstractUser):
    """Extended user model for neurodivergent support"""
    
    NEURODIVERGENT_CONDITIONS = [
        ('asd', 'Autism Spectrum Disorder'),
        ('adhd', 'ADHD'),
        ('dyslexia', 'Dyslexia'),
        ('dyspraxia', 'Dyspraxia (DCD)'),
        ('dyscalculia', 'Dyscalculia'),
        ('dysgraphia', 'Dysgraphia'),
        ('tourettes', 'Tourette Syndrome'),
        ('ocd', 'OCD'),
        ('apd', 'Auditory Processing Disorder'),
        ('irlen', 'Meares-Irlen Syndrome'),
        ('hyperlexia', 'Hyperlexia'),
        ('synesthesia', 'Synesthesia'),
    ]
    
    conditions = models.JSONField(default=list, blank=True)
    accessibility_preferences = models.JSONField(default=dict, blank=True)
    support_needs = models.JSONField(default=list, blank=True)
    emergency_contacts = models.JSONField(default=list, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)