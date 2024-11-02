import re

regex = r'^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$'

class PhoneConstraint:
    
    def validate(self, value: str):
        error = None

        if not re.match(regex, value):
            error = "Invalid phone number format"

        return error
    