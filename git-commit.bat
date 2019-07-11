@echo.
@echo START TIME: %time%

@echo.
@echo ^>^> git add .
@git add .

@echo.
@echo ^>^> git commit -m "scheduled commit"
@git commit -m "scheduled commit"

@echo.
@echo ^>^>git push
@git push

@echo.
@echo FINISH TIME: %time%

pause