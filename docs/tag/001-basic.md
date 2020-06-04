# basic
> Basic tag operation.

## list all tags

```shell
git tag -l
```

## add

```shell
git tag v0.1.2-light
git tag v0.1.2-light -m "add: v0.1.2-light is a ligth update."
```

## delete

```shell
git tag -d v0.1.2-light
```

## push to remote

```shell
git push origin v0.1.2-light

# push multiple tags
git push origin v1.20.0
git push origin v1.21.0
```

## push all tags to remote

```shell
git push origin --tags
```
