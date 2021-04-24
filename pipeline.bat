Rem '%1 is your commit message.''
Rem 'Example: .\pipeline.bat "My commit message".'

Rem 'Merging is a prerequisit to pass'
call git fetch
call git merge

Rem 'Proceed to push your update.'
call git add .
call git commit -m %1
call git push

Rem 'Pipeline updated successfully!'