class NumberConstraint:
    def __init__(
            self,
            min_value: int = None,
            max_value: int = None,
        ):
        self.min_value = min_value
        self.max_value = max_value

    def validate(self, value: int):
        error = None

        if not isinstance(value, int):
            error = "Value must be an integer"

        if self.min_value is not None and value < self.min_value:
            error = f"Value must be at least {self.min_value}"

        if self.max_value is not None and value > self.max_value:
            error = f"Value must be at most {self.max_value}"

        return error