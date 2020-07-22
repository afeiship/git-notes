# git rm
> How to stop tracking and ignore changes to a file in Git?

```shell
git update-index --skip-worktree
```

## valid way
```shell
# There are 3 options, you probably want #3
# 1. This will keep the local file for you, but will delete it for anyone else when they pull.

git rm --cached <file-name> or git rm -r --cached <folder-name>

# 2. This is for optimization, like a folder with a large number of files, e.g. SDKs that probably won't ever change. It tells git to stop checking that huge folder every time for changes, locally, since it won't have any. The assume-unchanged index will be reset and file(s) overwritten if there are upstream changes to the file/folder (when you pull).

git update-index --assume-unchanged <path-name>

# 3. This is to tell git you want your own independent version of the file or folder. For instance, you don't want to overwrite (or delete) production/staging config files.

git update-index --skip-worktree <path-name>

# It's important to know that git update-index will not propagate with git, and each user will have to run it independently.
```

## resources
- https://stackoverflow.com/questions/936249/how-to-stop-tracking-and-ignore-changes-to-a-file-in-git
