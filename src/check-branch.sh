exists=`git show-ref refs/heads/dev`
if [ -n "$exists" ]; then
  echo 'dev branch exists!'
fi


exists=`git show-ref refs/heads/master`
if [ -n "$exists" ]; then
  echo 'master branch exists!'
fi
