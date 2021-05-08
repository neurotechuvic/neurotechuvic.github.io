@echo off
echo % + 1 is your commit message.
echo Example: .\pipeline.bat "My commit message".
echo.

echo fetch, pull, and merge are prerequisits to pass
call git fetch
call git pull
call git merge
echo.

echo Proceeding to push your update.
call git add .
call git commit -m %1
call git push
echo.

echo Pipeline updated successfully!
echo.