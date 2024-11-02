import re

class EmailConstraint:

    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b'

    def validate(self, value: str):
        error = None

        if not re.match(self.regex, value):
            error = "Invalid email format"

        return error