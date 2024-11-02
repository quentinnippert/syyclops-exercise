from datetime import datetime

class DateConstraint:
    def __init__(
            self,
            min_date: str = None,
            max_date: str = None,
            expected_format: str = "%Y-%m-%d"
        ):
        self.min_date = min_date
        self.max_date = max_date
        self.expected_format = expected_format
    
    def validate(self, value: str):
        error = None

        if self.min_date is not None and value < datetime.strptime(self.min_date, self.expected_format):
            error = f"Date must be at least {self.min_date}"
        
        if self.max_date is not None and value > datetime.strptime(self.max_date, self.expected_format):
            error = f"Date must be at most {self.max_date}"
        
        return error