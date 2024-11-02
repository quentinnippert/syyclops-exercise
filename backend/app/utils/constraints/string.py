class StringConstraint:
    def __init__(
            self,
            min_length: int = None,
            max_length: int = None,
        ):
        self.min_length = min_length
        self.max_length = max_length
    
    def validate(self, value: str):
        error = None

        if not isinstance(value, str):
            error = "Value must be a string"

        if self.min_length is not None and len(value) < self.min_length:
            error = "String length must be at least {self.min_length}"
        
        if self.max_length is not None and len(value) > self.max_length:
            error = "String length must be at most {self.max_length}"
        
        return error