# clean

## scripts
```shell
rm -rf .git/refs/original/
git reflog expire --expire=now --all
git fsck --full --unreachable
git repack -A -d
git gc --aggressive --prune=now
git push --force
```


## resources
- https://blog.csdn.net/luchengtao11/article/details/82531044
