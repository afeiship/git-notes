# check if has branch


```shell
exists=`git show-ref refs/heads/<branch-name>`
if [ -n "$exists" ]; then
  echo 'branch exists!'
fi
```

## resources
- https://stackoverflow.com/questions/5167957/is-there-a-better-way-to-find-out-if-a-local-git-branch-exists
