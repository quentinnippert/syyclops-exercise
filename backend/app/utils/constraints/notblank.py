class NotBlankConstraint:
    
    def validate(self, value: str):
        error = None

        if not value:
            error = "Value cannot be blank"

        return error