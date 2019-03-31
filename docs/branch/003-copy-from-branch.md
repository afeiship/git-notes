# copy files from other branch

- [copy-all-files-in-a-directory-from-another-branch](https://stackoverflow.com/questions/2668886/git-copy-all-files-in-a-directory-from-another-branch)

## How do I copy all files in a directory from another branch?
~~~
As you are not trying to move the files around in the tree
you should be able to just checkout the directory:
~~~

```shell
git checkout master -- dirname
```
