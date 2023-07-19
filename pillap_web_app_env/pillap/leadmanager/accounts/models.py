from django.db import models
import uuid

class Newsletter(models.Model):
    id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, unique=True)
    email = models.CharField(max_length=64, blank=False, null=False)
    active = models.BooleanField(default=False)

    def __int__(self):
        return self.id

