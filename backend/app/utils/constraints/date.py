from datetime import datetime, date

class DateConstraint:
    def __init__(
            self,
            min_date: datetime = None,
            max_date: datetime = None,
            expected_format: str = "%Y-%m-%d"
        ):
        self.min_date = min_date
        self.max_date = max_date
        self.expected_format = expected_format
    
    def validate(self, value):
        error = None
        
        if isinstance(value, str):
            value_date = datetime.strptime(value, self.expected_format).date()
        elif isinstance(value, date):
            value_date = value
        else:
            raise TypeError("value must be a string or a datetime.date instance")

        if self.min_date is not None and value_date < self.min_date.date():
            error = f"Date must be at least {self.min_date.strftime(self.expected_format)}"
        
        if self.max_date is not None and value_date > self.max_date.date():
            error = f"Date must be at most {self.max_date.strftime(self.expected_format)}"
        
        return error