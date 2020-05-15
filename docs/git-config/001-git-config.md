# project

```shell
git config user.name "aric.zheng"
git config user.email "aric.zheng@alo7.com"
```

## or git config
- https://stackoverflow.com/questions/8801729/is-it-possible-to-have-different-git-configuration-for-different-projects


As of git version 2.13, git supports conditional configuration includes. In this example we clone Company A's repos in ~/company_a directory, and Company B's repos in ~/company_b.

In your .gitconfig you can put something like this.

```conf
[includeIf "gitdir:~/company_a/"]
  path = .gitconfig-company_a
[includeIf "gitdir:~/company_b/"]
  path = .gitconfig-company_b


; Example contents of .gitconfig-company_a
[user]
name = John Smith
email = john.smith@companya.net


; Example contents of .gitconfig-company_b
[user]
name = John Smith
email = js@companyb.com
```


## resources
- https://git-scm.com/docs/git-config
- http://blog.bennycornelissen.nl.s3-website-eu-west-1.amazonaws.com/post/juggling-multiple-git-identities/
