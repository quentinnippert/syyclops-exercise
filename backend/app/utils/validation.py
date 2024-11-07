from app.utils.constraints.notblank import NotBlankConstraint
from app.utils.constraints.email import EmailConstraint
from app.utils.constraints.phone import PhoneConstraint
from app.utils.constraints.string import StringConstraint
from app.utils.constraints.number import NumberConstraint
from app.utils.constraints.date import DateConstraint

from datetime import datetime

class Validation:
    def __init__(
            self,
            constraints: list,
            ):
        self.constraints = constraints
    
    def validate(self, values):
        values = values.dict()
        
        errors = {}
        for key in self.constraints:
            for contraint in self.constraints[key]:
                error = contraint.validate(values[key])

                if error:
                    if key in errors:
                        errors[key].append(error)
                    else:
                        errors[key] = [error]

        return errors if errors else None    
    
class ConstraintsList:

    def users(self, method: str):
        if method == "PUT":
            return {
                    "first_name":   [NotBlankConstraint(), StringConstraint(1, 255)],
                    "last_name":    [NotBlankConstraint(), StringConstraint(1, 255)],
                    "email":        [NotBlankConstraint(), EmailConstraint()],
                    "phone":        [NotBlankConstraint(), PhoneConstraint()],
                    "birth_date":   [NotBlankConstraint(), DateConstraint(None, datetime.today())],
                    "gender_id":    [NotBlankConstraint(), NumberConstraint(1, None)],
                }
        else:
            raise ValueError("There is no constraints list for this route : {method} /users")
