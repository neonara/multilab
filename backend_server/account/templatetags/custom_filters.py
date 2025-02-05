from django import template
import os

register = template.Library()

@register.filter
def split(value, key):
    """
    Returns a list of strings after splitting by the key
    """
    return value.split(key)

@register.filter
def filename(value):
    """
    Returns just the filename from a file path
    """
    return os.path.basename(value.name) if value else ''