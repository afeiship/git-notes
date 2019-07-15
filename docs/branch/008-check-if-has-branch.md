# check if has branch


```shell
exists=`git show-ref refs/heads/<branch-name>`
if [ -n "$exists" ]; then
  echo 'branch exists!'
fi
```
